import { ExternalLink } from "lucide-react";
import { Kicker, Seal, seals } from "./brand";

const trajetoria = [
  "1992 — Início da trajetória profissional na imprensa escrita",
  "Diretor de conteúdo da Câmara dos Deputados, em Brasília",
  "Gestor de comunicação da Alep (Assembleia Legislativa do Paraná)",
  "7 anos como secretário de Comunicação de Cascavel",
  "42 campanhas eleitorais desde 1999 — deputados, senadores, prefeitos e governadores",
  "Hoje — Head Executivo de Marketing do Sistema Fiep e fundador da AIV",
];

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Sobre</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          Uma agência que <em>constrói</em> o que vende
        </h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">
          A Agência de Inteligência Vozes nasceu de um jeito pouco comum: em vez de vender serviço de comunicação,
          construiu tecnologia própria pra resolver problemas reais de comunicação, escuta pública e inteligência
          política — e só depois virou produto pra outras organizações.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="display-title text-2xl">Quem somos</h3>
            <dl className="mt-6 flex flex-col gap-4 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Razão social</dt>
                <dd className="mt-1">Agência de Inteligência Vozes Ltda</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">CNPJ</dt>
                <dd className="mt-1">68.276.102/0001-78</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Sede</dt>
                <dd className="mt-1">Curitiba/PR — atende todo o Brasil</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Fundada por Jefferson Lobo, a AIV reúne cinco marcas próprias sob um mesmo sistema de identidade e um
              mesmo compromisso: tecnologia de IA que preserva identidade autoral em vez de apagar ela.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="flex items-center gap-4">
              <Seal src={seals.jeffersonLobo} alt="Selo Jefferson Lobo" size={56} />
              <div>
                <h3 className="display-title text-2xl">Jefferson Lobo</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Fundador da AIV</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Jefferson Lobo é palestrante, autor e consultor em Inteligência Artificial aplicada a marketing,
                negócios e lideranças. Atua como Gerente Executivo de Marketing do Sistema Fiep, combinando visão
                executiva de marketing em uma grande instituição com prática técnica em IA generativa.
              </p>
              <p>
                É reconhecido por defender teses proprietárias no debate brasileiro de IA, como o desafio de construir
                agentes de IA com DNA autoral e a tese de que o marketing com IA entrou na fase da orquestração de
                fluxos — superando a "indústria de prompts" e ferramentas isoladas.
              </p>
              <p>
                Ministra keynotes, workshops corporativos e consultorias estratégicas para diretores, gerentes e times
                de marketing em todo o Brasil, presencialmente e online.
              </p>
            </div>
            <a
              href="https://jeffersonlobo.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-card-hover"
            >
              Ver perfil completo <ExternalLink className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="display-title text-2xl">Trajetória institucional</h3>
            <ul className="mt-6 flex flex-col gap-5 border-l border-border pl-6">
              {trajetoria.map((t) => (
                <li key={t} className="relative text-sm text-muted-foreground">
                  <span className="absolute -left-[1.9rem] top-1.5 size-2 rounded-full bg-primary" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7">
            <h3 className="display-title text-2xl">Como trabalhamos com IA</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Usamos IA para acelerar apuração, cruzamento de dados e produção — a decisão final, seja editorial,
              estratégica ou de atendimento, é sempre revisada por gente. Isso vale pra cada produto da família, sem
              exceção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
