import { Kicker } from "./brand";

const eixos = [
  {
    num: "01",
    title: "Eixo sintático",
    text: "Como a frase é construída: ritmo, extensão, pontuação e cadência que fazem um texto soar como aquela pessoa.",
  },
  {
    num: "02",
    title: "Eixo semântico",
    text: "O que a marca defende e como argumenta: teses recorrentes, hierarquia de ideias e ângulo editorial.",
  },
  {
    num: "03",
    title: "Eixo lexical",
    text: "As palavras que essa voz usa — e as que ela nunca usaria. O vocabulário vira restrição do agente.",
  },
];

const etapas = [
  { n: "01", t: "Diagnóstico", d: "Mapeamos o problema real, o volume e quem decide — antes de qualquer tecnologia." },
  { n: "02", t: "Decomposição", d: "Aplicamos o Método DEL sobre o acervo do cliente para extrair a identidade autoral." },
  { n: "03", t: "Construção", d: "Agentes, fluxos e painéis montados sobre produtos que já operam em escala real." },
  { n: "04", t: "Auditoria contínua", d: "Fidelidade autoral medida por gatilho e período, com decisão humana obrigatória." },
];

export function Metodo() {
  return (
    <section id="metodo" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Kicker>Método DEL</Kicker>
        <h2 className="display-title mt-6 max-w-3xl text-4xl sm:text-5xl">
          IA com <em>DNA autoral</em>, não com prompt solto
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground">
          Decomposição de Estrutura de Linguagem: o protocolo proprietário da AIV para treinar agentes que escrevem
          como a marca — e são auditados para continuar escrevendo assim.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {eixos.map((e) => (
            <article key={e.num} className="rounded-2xl border border-border bg-card p-7">
              <span className="display-title text-4xl text-primary">{e.num}</span>
              <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((e) => (
            <li key={e.n} className="bg-card p-6">
              <span className="font-mono text-xs tracking-[0.16em] text-primary">{e.n}</span>
              <h3 className="mt-3 text-base font-semibold">{e.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
