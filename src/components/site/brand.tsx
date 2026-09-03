import agenciaVozes from "@/assets/agencia-vozes.svg.asset.json";
import vozesParanaenses from "@/assets/vozes-paranaenses.svg.asset.json";
import zapvozes from "@/assets/zapvozes.svg.asset.json";
import vozesERotas from "@/assets/vozes-e-rotas.svg.asset.json";
import politizaIa from "@/assets/politiza-ia.svg.asset.json";
import jeffersonLobo from "@/assets/jefferson-lobo.svg.asset.json";

export const seals = {
  agenciaVozes: agenciaVozes.url,
  vozesParanaenses: vozesParanaenses.url,
  zapvozes: zapvozes.url,
  vozesERotas: vozesERotas.url,
  politizaIa: politizaIa.url,
  jeffersonLobo: jeffersonLobo.url,
};

export function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="section-kicker">{children}</span>;
}

export function Seal({ src, alt, size = 48 }: { src: string; alt: string; size?: number }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      className="shrink-0 rounded-xl"
      style={{ width: size, height: size }}
    />
  );
}
