# Curso de Python e IA - Landing Page

Landing page para curso de Python e Inteligencia Artificial.

## Requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

## Instalacao

```bash
# Clonar o repositorio
git clone <url-do-repositorio>
cd v0-project

# Instalar dependencias com pnpm
pnpm install

# Ou com npm
npm install
```

## Scripts Disponiveis

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
# ou
npm run dev

# Criar build de producao
pnpm build
# ou
npm run build

# Iniciar servidor de producao
pnpm start
# ou
npm run start

# Executar linting
pnpm lint
# ou
npm run lint
```

## Estrutura do Projeto

```
├── app/
│   ├── globals.css      # Estilos globais e tokens
│   ├── layout.tsx       # Layout principal
│   └── page.jsx         # Pagina inicial
├── components/
│   └── HeroSection/
│       ├── HeroSection.jsx         # Componente Hero
│       └── HeroSection.module.css  # Estilos CSS Modules
├── public/              # Assets estaticos
└── README.md
```

## Tecnologias

- Next.js 15
- React 19
- CSS Modules
- Tailwind CSS v4

## Desenvolvimento

O servidor de desenvolvimento roda em `http://localhost:3000` por padrao.

```bash
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.
