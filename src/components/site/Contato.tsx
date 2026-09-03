import { Mail, ArrowRight } from "lucide-react";
import { Kicker } from "./brand";

export function Contato() {
  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden border-t border-border py-24 sm:py-32">
      <div className="bg-brand-grid brand-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Kicker>Contato</Kicker>
        <h2 className="display-title mt-6 text-4xl sm:text-5xl">
          Vamos <em>conversar</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Imprensa, prefeituras, campanhas ou empresas — conte o que você precisa e a agência retorna com o produto ou
          a combinação certa pro seu caso.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:lobo@aivozes.com.br"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            <Mail className="size-4" /> lobo@aivozes.com.br
          </a>
          <a
            href="#ecossistema"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-card"
          >
            Rever o ecossistema <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Agência de Inteligência Vozes Ltda · CNPJ 68.276.102/0001-78</p>
        <a href="mailto:lobo@aivozes.com.br" className="transition-colors hover:text-primary">
          lobo@aivozes.com.br
        </a>
      </div>
    </footer>
  );
}
