import { Kicker, Seal, seals } from "./brand";

const segmentos = [
  {
    title: "Imprensa e comunicação institucional",
    dor: "Produzir conteúdo relevante todo dia, em volume, sem virar fábrica de texto genérico — e sem perder controle editorial.",
    sol: "Vozes Paranaenses mostra o modelo funcionando em escala real; ZapVozes cobre a distribuição — assessoria de imprensa e relacionamento com veículos e listas segmentadas.",
    marcas: [
      { src: seals.vozesParanaenses, alt: "Vozes Paranaenses" },
      { src: seals.zapvozes, alt: "ZapVozes" },
    ],
  },
  {
    title: "Prefeituras e órgãos públicos",
    dor: "Saber o que a população realmente precisa, com dado que aguenta auditoria — não pesquisa de boca de urna nem caixa de sugestão que ninguém lê.",
    sol: "Vozes & Rotas estrutura a escuta, georreferencia a demanda e cruza por eixo temático, virando insumo real pra plano de governo e política pública.",
    marcas: [{ src: seals.vozesERotas, alt: "Vozes & Rotas" }],
  },
  {
    title: "Campanhas eleitorais e mandatos",
    dor: "Dado espalhado em planilha, pesquisa que não conversa com histórico eleitoral, operação de campo sem visibilidade em tempo real.",
    sol: "Politiza.IA centraliza tudo — due diligence, histórico eleitoral, cruzamento estratégico e operação de campo — num só painel de comando.",
    marcas: [{ src: seals.politizaIa, alt: "Politiza.IA" }],
  },
  {
    title: "Empresas e marcas",
    dor: "Usar IA generativa sem que o resultado soe genérico e sem controle de marca — ou pior, sem saber se o time está usando com responsabilidade.",
    sol: "O Método DEL treina agentes com a identidade real da marca; consultoria estratégica e palestras ajudam a estruturar governança de uso de IA internamente.",
    marcas: [{ src: seals.jeffersonLobo, alt: "Jefferson Lobo" }],
  },
];

export function Segmentos() {
  return (
    <section id="segmentos" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Segmentos</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          Pra quem a gente <em>constrói</em>
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Quatro tipos de organização batem na nossa porta com problemas parecidos — cada um resolvido por uma
          combinação diferente do que já construímos.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {segmentos.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <h3 className="display-title text-2xl">{s.title}</h3>
              <p className="highlight-yellow mt-4 border-l-2 border-primary pl-4 text-sm leading-relaxed">{s.dor}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.sol}</p>
              <div className="mt-auto flex items-center gap-3 pt-6">
                {s.marcas.map((m) => (
                  <Seal key={m.alt} src={m.src} alt={`Selo ${m.alt}`} size={36} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
