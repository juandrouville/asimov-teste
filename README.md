# asimov-teste

# Hero Section – Curso Python com IA

**Ferramentas de IA usadas:** v0.dev (geração inicial do componente), ChatGPT (refinamento de prompts e ajuste do CSS Modules) e Claude (revisão de semântica e boas práticas).

**Onde a IA ajudou mais:** Criação da estrutura base do React com CSS Modules; implementação das animações fade+slide-up com stagger via CSS; sugestões de glassmorphism e grid de fundo alinhadas ao estilo Asimov Academy.

**Ajustes manuais:** Corrigi o `z-index` dos orbs para não sobrepor o texto; melhorei o contraste dos bullets (cinza claro para branco + hover mais forte); adaptei o grid responsivo para 2 colunas em tablet (o v0.dev gerou 1 coluna até desktop). Também removi dependências do TypeScript e Tailwind que a IA sugeriu por padrã

 Positivus - Site Estático com Firebase Hosting

## Ferramentas de IA usadas
- **DeepSeek (assistente de código)** – para configuração do Firebase, diagnóstico de erros e automatização de deploys.

## Etapas com mais ajuda da IA
- Configuração inicial do Firebase CLI (resolução de erros de token e caminhos).
- Identificação do problema com o build do React (pasta `build` vs `public`).
- Ajuste do `firebase.json` para SPA (rewrites).

## Ajustes manuais e motivos
- **Correção dos caminhos de fontes e assets** – o preload da fonte causava warnings; ajustei para caminhos relativos.
- **Reconfiguração do diretório público** – mudei de `public` para `build` após entender que o React precisa do código compilado.
- **Configuração do GitHub Actions (não implementada)** – optei por deploy manual primeiro para validação, depois automatizarei.

> Deploy feito em: https://positivus-by-juandrouville.web.app
