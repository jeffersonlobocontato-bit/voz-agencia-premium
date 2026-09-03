import { ArrowRight, Mail } from "lucide-react";
import { Kicker } from "./brand";

const roles = ["Comunicação com IA", "Escuta pública", "Inteligência eleitoral", "Consultoria estratégica"];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-brand-grid brand-fade pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--primary)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Agência de Inteligência Vozes</Kicker>

        <h1 className="display-title mt-6 max-w-4xl text-[2.6rem] sm:text-6xl lg:text-7xl">
          Inteligência artificial que <em>escuta</em>, escreve e decide com identidade
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Construímos produtos de IA para comunicação, escuta pública e inteligência eleitoral — não fazemos
          publicidade genérica, construímos tecnologia própria para quem precisa ser ouvido e entendido em escala.
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {roles.map((role, i) => (
            <li key={role} className="flex items-center gap-3">
              {i > 0 && <span className="text-primary">/</span>}
              <span>{role}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#ecossistema"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Conhecer o ecossistema <ArrowRight className="size-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            <Mail className="size-4" /> Falar com a agência
          </a>
        </div>
      </div>
    </section>
  );
}
