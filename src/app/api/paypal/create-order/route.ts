import { NextResponse } from "next/server";

const PAYPAL_API_BASE =
  process.env.PAYPAL_ENVIRONMENT === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

type Payload = {
  amount?: number;
  currency?: string;
  description?: string;
  productId?: string;
};

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
    const body = (await request.json()) as Payload;
    const amount = Number(body.amount);
    const currency = String(body.currency || "").toUpperCase();
    const description = String(body.description || "CilentoXtreme");

    if (!Number.isInteger(amount) || amount < 50) {
      return NextResponse.json({ error: "Importo PayPal non valido." }, { status: 400 });
    }

    if (currency !== "EUR") {
      return NextResponse.json({ error: "PayPal supporta solo EUR in questo flusso." }, { status: 400 });
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
            reference_id: body.productId || "cilentoxtreme-checkout",
            description,
            amount: {
              currency_code: currency,
              value: (amount / 100).toFixed(2),
            },
          },
        ],
      }),
      cache: "no-store",
    });

    const data = (await response.json()) as { id?: string; message?: string };

    if (!response.ok || !data.id) {
      return NextResponse.json({ error: data.message || "Impossibile creare l'ordine PayPal." }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Errore durante l'avvio del pagamento PayPal." }, { status: 500 });
  }
}
