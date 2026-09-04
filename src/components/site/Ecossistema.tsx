import { Kicker, Seal, seals } from "./brand";

type Product = { seal: string; name: React.ReactNode; alt: string; text: string };
type Frente = { num: string; title: string; text: string; products: Product[] };

const frentes: Frente[] = [
  {
    num: "01",
    title: "Comunicação com IA e identidade autoral",
    text: "Agentes e fluxos editoriais que escrevem com DNA de marca, não com prompt genérico — do jornalismo regional ao relacionamento direto com imprensa e leads.",
    products: [
      {
        seal: seals.vozesParanaenses,
        alt: "Selo Vozes Paranaenses",
        name: (
          <>
            <span className="highlight-yellow">Vozes</span> Paranaenses
          </>
        ),
        text: "Portal de notícias com cobertura editorial das 10 macrorregiões do Paraná — IA assistida na apuração, decisão editorial sempre humana.",
      },
      {
        seal: seals.zapvozes,
        alt: "Selo ZapVozes",
        name: (
          <>
            Zap<span className="highlight-yellow">Vozes</span>
          </>
        ),
        text: "Mensageria de relacionamento via WhatsApp e e-mail — caixa de entrada unificada, campanhas e automação para imprensa e leads.",
      },
    ],
  },
  {
    num: "02",
    title: "Escuta pública (plataforma)",
    text: "Ouvidoria técnica que transforma a voz da população em plano de governo auditável — não pesquisa de opinião solta, mas dado georreferenciado e cruzado.",
    products: [
      {
        seal: seals.vozesERotas,
        alt: "Selo Vozes & Rotas",
        name: (
          <>
            <span className="highlight-yellow">Vozes</span> &amp; Rotas
          </>
        ),
        text: "Escuta ativa: ouvidoria pública e técnica que transforma propostas e demandas em planos de governo e políticas públicas georreferenciadas.",
      },
    ],
  },
  {
    num: "03",
    title: "Garantia de Direitos (formação e assessoria)",
    text: "Serviço de pessoas, não de plataforma: formação e acompanhamento técnico à gestão pública na construção de políticas públicas, com equipe de assistência social e jurídica.",
    products: [
      {
        seal: seals.garantiaDireitos,
        alt: "Selo Garantia de Direitos",
        name: (
          <>
            Garantia de <span className="highlight-yellow">Direitos</span>
          </>
        ),
        text: "Cursos, palestras, workshops e assessoria na construção de políticas públicas, conduzidos por equipe técnica de assistência social e jurídica — com apoio de assistente de IA da AIV.",
      },
    ],
  },
  {
    num: "04",
    title: "Inteligência eleitoral e gestão de mandatos",
    text: "Comando de campanha e mandato num só lugar — cruzamento de macrodados onde antes existiam planilhas soltas e intuição.",
    products: [
      {
        seal: seals.politizaIa,
        alt: "Selo Politiza.IA",
        name: (
          <>
            Politiza<span className="highlight-yellow">.IA</span>
          </>
        ),
        text: "Gestão de mandatos e campanhas eleitorais — mais de 40 ferramentas de IA para due diligence, histórico eleitoral e cruzamento estratégico.",
      },
    ],
  },
  {
    num: "05",
    title: "Palestras e consultoria estratégica",
    text: "A voz institucional da agência em público — quem defende, ensina e implementa essas teses dentro das empresas e campanhas que contratam a AIV.",
    products: [
      {
        seal: seals.jeffersonLobo,
        alt: "Selo Jefferson Lobo",
        name: (
          <>
            Jefferson <span className="highlight-yellow">Lobo</span>
          </>
        ),
        text: "Palestrante, autor e consultor em Inteligência Artificial aplicada a marketing, negócios e lideranças. Criador do Método DEL.",
      },
    ],
  },
];

export function Ecossistema() {
  return (
    <section id="ecossistema" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Ecossistema</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          Uma agência, cinco frentes, <em>seis marcas</em>
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Cada frente nasceu de um problema real e virou produto próprio. O que a AIV oferece não é um catálogo de
          ferramentas — é a combinação certa entre elas para o seu caso.
        </p>

        <div className="mt-14 flex flex-col gap-14">
          {frentes.map((f) => (
            <div key={f.num} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div>
                <span className="font-mono text-sm text-primary">{f.num}</span>
                <h3 className="display-title mt-3 text-2xl sm:text-3xl">{f.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{f.text}</p>
              </div>

              <div className="flex flex-col gap-4">
                {f.products.map((p) => (
                  <article
                    key={p.alt}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-lg shadow-black/20 transition-colors hover:bg-card-hover"
                  >
                    <Seal src={p.seal} alt={p.alt} />
                    <div>
                      <h4 className="text-base font-semibold">{p.name}</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
