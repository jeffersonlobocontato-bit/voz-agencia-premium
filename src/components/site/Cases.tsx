import { Kicker, Seal, seals } from "./brand";

const cases = [
  {
    seal: seals.vozesParanaenses,
    alt: "Selo Vozes Paranaenses",
    tag: "Jornalismo regional",
    title: "Cobertura das 10 macrorregiões do Paraná",
    desc: "Portal de notícias operando com apuração assistida por IA e decisão editorial humana em toda publicação — o modelo de identidade autoral rodando em volume diário.",
    metrics: [
      { k: "10", v: "macrorregiões cobertas" },
      { k: "100%", v: "revisão humana antes de publicar" },
    ],
  },
  {
    seal: seals.zapvozes,
    alt: "Selo ZapVozes",
    tag: "Relacionamento e imprensa",
    title: "Mensageria unificada para assessoria",
    desc: "WhatsApp e e-mail numa caixa de entrada só, com campanhas segmentadas e automação — distribuição com a mesma voz da marca que produziu o conteúdo.",
    metrics: [
      { k: "2 canais", v: "em uma inbox única" },
      { k: "Segmentação", v: "por veículo e lista" },
    ],
  },
  {
    seal: seals.vozesERotas,
    alt: "Selo Vozes & Rotas",
    tag: "Escuta pública",
    title: "Da demanda de rua ao plano de governo",
    desc: "Ouvidoria técnica que georreferencia propostas e cruza por eixo temático, entregando à gestão pública um retrato auditável do que a população pede.",
    metrics: [
      { k: "Geo", v: "demandas referenciadas em mapa" },
      { k: "Eixos", v: "cruzamento temático auditável" },
    ],
  },
  {
    seal: seals.politizaIa,
    alt: "Selo Politiza.IA",
    tag: "Inteligência eleitoral",
    title: "Painel de comando de campanha e mandato",
    desc: "Due diligence, histórico eleitoral, cruzamento estratégico e operação de campo num só lugar — usado em campanhas e mandatos reais.",
    metrics: [
      { k: "40+", v: "ferramentas de IA" },
      { k: "42", v: "campanhas na bagagem do fundador" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Cases &amp; portfólio</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          O que já está <em>no ar</em>
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A AIV testa cada produto na própria operação antes de oferecer. Estes são os sistemas em uso hoje.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-colors hover:bg-card-hover"
            >
              <div className="flex items-center gap-4">
                <Seal src={c.seal} alt={c.alt} size={52} />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">{c.tag}</span>
              </div>
              <h3 className="display-title mt-5 text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                {c.metrics.map((m) => (
                  <div key={m.v}>
                    <dt className="display-title text-3xl text-primary">{m.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
