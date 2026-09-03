import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Ecossistema } from "@/components/site/Ecossistema";
import { OQueFazemos } from "@/components/site/OQueFazemos";
import { Metodo } from "@/components/site/Metodo";
import { Cases } from "@/components/site/Cases";
import { Segmentos } from "@/components/site/Segmentos";
import { Sobre } from "@/components/site/Sobre";
import { Contato, Footer } from "@/components/site/Contato";

const title =
  "Agência de Inteligência Vozes — IA para comunicação, escuta pública e inteligência eleitoral";
const description =
  "A AIV constrói produtos de IA para comunicação com identidade autoral, escuta pública, gestão de campanhas e mandatos. Conheça o ecossistema: Vozes Paranaenses, ZapVozes, Vozes & Rotas e Politiza.IA.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Agência de Inteligência Vozes",
  legalName: "Agência de Inteligência Vozes Ltda",
  taxID: "68.276.102/0001-78",
  email: "lobo@aivozes.com.br",
  founder: { "@type": "Person", name: "Jefferson Lobo" },
  address: { "@type": "PostalAddress", addressLocality: "Curitiba", addressRegion: "PR", addressCountry: "BR" },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Ecossistema />
        <OQueFazemos />
        <Metodo />
        <Cases />
        <Segmentos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
