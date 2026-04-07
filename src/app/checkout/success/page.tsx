import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { getTicketProduct } from "@/lib/tickets";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const selected = product ? getTicketProduct(product) : undefined;

  return (
    <main className="section-space">
      <div className="container-shell">
        <section className="checkout-shell">
          <div className="checkout-intro">
            <p className="checkout-badge">Pagamento riuscito</p>
            <h1 className="checkout-title">Iscrizione completata</h1>
            <p className="checkout-subtitle">
              {selected ? `${selected.title} confermato.` : "La tua registrazione è stata confermata."}
            </p>
          </div>

          <div className="checkout-card">
            <p className="checkout-feedback checkout-feedback--success">
              Riceverai presto una conferma via email con i prossimi passaggi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/">Torna al festival</Button>
              <Button href="/programma" variant="secondary">
                Guarda il programma
              </Button>
            </div>
            <p className="mt-5 text-sm text-brand-ink/60">
              Se qualcosa non torna, scrivici dalla pagina <Link className="font-semibold text-brand-red" href="/contatti">Contatti</Link>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
