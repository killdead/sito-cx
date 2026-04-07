import { NextResponse } from "next/server";

import { getTicketProduct } from "@/lib/tickets";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENVIRONMENT === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials missing");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(`${PAYPAL_API_BASE}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to authenticate with PayPal");
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { productId?: string };
    const productId = body.productId ?? "";
    const product = getTicketProduct(productId);

    if (!product) {
      return NextResponse.json({ error: "Prodotto non valido" }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();

    const response = await fetch(`${PAYPAL_API_BASE}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: product.id,
            description: product.title,
            amount: {
              currency_code: product.paypalCurrency,
              value: product.paypalAmount,
            },
          },
        ],
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as { id?: string; message?: string };

    if (!response.ok || !data.id) {
      return NextResponse.json({ error: data.message || "Impossibile creare ordine PayPal" }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore durante la creazione dell'ordine PayPal" }, { status: 500 });
  }
}
