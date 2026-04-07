import { NextResponse } from "next/server";

import { getTicketProduct } from "@/lib/tickets";
import { getStripe } from "@/lib/stripe";

type Payload = {
  amount?: number;
  currency?: string;
  productId?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const amount = Number(body.amount);
    const currency = String(body.currency || "").toLowerCase();
    const productId = typeof body.productId === "string" ? body.productId : "";

    if (!Number.isInteger(amount) || amount < 50) {
      return NextResponse.json({ error: "Importo non valido." }, { status: 400 });
    }

    if (currency !== "eur") {
      return NextResponse.json({ error: "La valuta supportata è solo EUR." }, { status: 400 });
    }

    const product = productId ? getTicketProduct(productId) : undefined;

    if (productId && !product) {
      return NextResponse.json({ error: "Prodotto non riconosciuto." }, { status: 400 });
    }

    if (product && product.amountCents !== amount) {
      return NextResponse.json({ error: "Importo non coerente con il prodotto selezionato." }, { status: 400 });
    }

    const stripe = getStripe();
    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: product
        ? {
            productId: product.id,
            productTitle: product.title,
          }
        : undefined,
    });

    if (!intent.client_secret) {
      return NextResponse.json({ error: "Client secret mancante." }, { status: 500 });
    }

    return NextResponse.json({ clientSecret: intent.client_secret });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Impossibile avviare il pagamento adesso." }, { status: 500 });
  }
}
