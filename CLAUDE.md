# voz-agencia-premium

Site institucional (landing page única, em `/`) da **Agência de Inteligência Vozes (AIV)**, agência de Jefferson Lobo em Curitiba que constrói produtos de IA para comunicação política/pública: escuta pública (ouvidoria), inteligência de campanha, garantia de direitos, e o ecossistema de produtos abaixo. Público-alvo: imprensa, prefeituras, campanhas/mandatos, empresas. Gerenciado via [Lovable](https://lovable.dev).

## Ecossistema de produtos (apresentados nesta landing page)
- **Vozes Paranaenses** — portal de notícias regional → repo `vozesparanaenses`
- **ZapVozes** — mensageria WhatsApp/e-mail para imprensa → repo `connect-chat` (apesar do nome do repo)
- **Vozes & Rotas** — plataforma de escuta pública/ouvidoria
- **Garantia de Direitos** — consultoria/treinamento
- **Politiza.IA** — inteligência eleitoral → repo `politiza-ia` (produto separado, não pessoal — ver registro no `jeffersonlobo-ia-hub`)

A seção "Cases & portfólio" do site apresenta os próprios produtos da AIV como cases — é intencional, não é conteúdo de terceiro faltando.

## Stack
- **TanStack Start** (não é React Router puro) — rotas em `src/routes/` baseadas em arquivo. Só existem `__root.tsx` (shell) e `index.tsx` (a página inteira). **Leia `src/routes/README.md` antes de adicionar rota** — documenta as convenções específicas (nada de padrão Next/Remix).
- `src/routeTree.gen.ts` é gerado automaticamente — nunca editar à mão.
- Bundling via `@lovable.dev/vite-tanstack-config` — `vite.config.ts` tem comentário avisando pra não adicionar manualmente plugins de tailwind/devtools/nitro, já são injetados.
- Tailwind v4 + shadcn/ui ("new-york") + Radix. Fontes via Google Fonts no `__root.tsx`: Instrument Serif, Manrope, IBM Plex Mono.
- **Sem backend**: não há Supabase, nenhuma chamada de API, nenhuma env var de verdade em uso. Contato é só um link `mailto:`. Todo o conteúdo (serviços, cases, métricas) está hardcoded em `src/components/site/*.tsx`.
- Gerenciador de pacotes é **bun** (`bun.lock`/`bunfig.toml`), mesmo o README dizendo `npm i`/`npm run dev` — use bun.

## Estrutura
- `src/routes/__root.tsx` — shell, fontes, meta/JSON-LD genérico (cuidado: o head padrão daqui ainda diz "Lovable App" — é sobrescrito pelo `index.tsx`, mas fácil de confundir as duas camadas de `head()`)
- `src/routes/index.tsx` — composição da página + meta real + JSON-LD de Organization com CNPJ/fundador reais
- `src/components/site/` — uma seção por arquivo, na ordem: Header, Hero, Ecossistema, OQueFazemos, Metodo, Cases, Segmentos, Sobre, Contato/Footer. `brand.tsx` tem os componentes compartilhados (`Kicker`, `Seal`, mapa de `seals`)
- `src/assets/*.asset.json` — manifests do Lovable apontando pra CDN dele, não são os binários em si

## Convenções
- Projeto sincronizado com Lovable: nunca reescrever histórico já publicado (sem force-push/rebase/amend no branch sincronizado)
- Editar conteúdo = editar direto o componente da seção em `src/components/site/`, não existe CMS
- Se o ecossistema crescer e precisar de páginas dedicadas por produto, vai exigir expandir a estrutura de rotas — hoje é tudo âncora numa única página
