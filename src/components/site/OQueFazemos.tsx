import { Check } from "lucide-react";
import { Kicker } from "./brand";

const blocos = [
  {
    title: "Comunicação com IA e identidade autoral",
    text: "Toda IA generativa comercial escreve igual, porque foi treinada pra ser genericamente boa. Nós desenvolvemos o Método DEL — um protocolo que decompõe a escrita de uma marca ou pessoa em três eixos e usa isso pra treinar agentes que escrevem com identidade real.",
    items: [
      "Auditoria de fidelidade autoral (lançamento, periódica e por gatilho)",
      "Agentes de redação treinados no DNA da marca do cliente",
      "Pipeline editorial com decisão humana obrigatória antes de publicar",
      "Mensageria de relacionamento (WhatsApp e e-mail) com a mesma voz",
    ],
    prova: "Prova: Vozes Paranaenses e ZapVozes nasceram dessa frente.",
  },
  {
    title: "Escuta pública e políticas públicas",
    text: "Escuta que aguenta auditoria: a demanda da população entra estruturada, georreferenciada e cruzada por eixo temático, virando insumo real para plano de governo e política pública.",
    items: [
      "Ouvidoria pública e técnica estruturada por eixo temático",
      "Georreferenciamento e cruzamento de demandas",
      "Relatórios de escuta prontos para plano de governo",
      "Painéis de acompanhamento para gestão pública",
    ],
    prova: "Prova: Vozes & Rotas, em operação com escuta ativa em campo.",
  },
  {
    title: "Inteligência eleitoral e gestão de mandatos",
    text: "Campanha e mandato deixam de morar em planilhas soltas: dado, histórico e operação de campo num só painel de comando, com leitura estratégica em tempo real.",
    items: [
      "Due diligence e histórico eleitoral automatizados",
      "Cruzamento estratégico de pesquisas e ativos políticos",
      "Operação de campo (tracking, logística, distribuição de material)",
      "Sala de crise e sala de guerra para decisão rápida",
    ],
    prova: "Prova: Politiza.IA — mais de 40 ferramentas em campanhas e mandatos reais.",
  },
  {
    title: "Palestras e consultoria estratégica",
    text: "Tudo isso só existe porque foi testado na prática primeiro. Jefferson Lobo leva essas teses pro palco e pra mesa de consultoria — não como teoria de mercado, mas como quem constrói a tecnologia e sabe onde ela quebra.",
    items: [
      "Palestras e keynotes sobre IA aplicada a marketing, comunicação e política",
      "Consultoria estratégica de adoção de IA para empresas e campanhas",
      "Diagnóstico de maturidade em IA",
    ],
    prova: "Prova: agenda nacional de keynotes e workshops corporativos.",
  },
];

export function OQueFazemos() {
  return (
    <section id="o-que-fazemos" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>O que fazemos</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          Quatro frentes, <em>um jeito</em> de trabalhar
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          A AIV não vende horas de agência — constrói tecnologia própria pra resolver um problema, testa nela mesma, e
          só depois oferece pra quem tem o mesmo problema.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {blocos.map((b) => (
            <article key={b.title} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <h3 className="display-title text-2xl">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {b.items.map((i) => (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
                {b.prova}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
