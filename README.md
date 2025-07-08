# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat, focado em criar uma aplicação web moderna para gerenciamento de salas interativas.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.0.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1.11** - Framework CSS utilitário
- **React Router DOM 7.6.3** - Roteamento para aplicações React

### Bibliotecas Complementares

- **TanStack React Query** - Gerenciamento de estado servidor
- **Radix UI** - Componentes acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Utilitário para classes CSS condicionais
- **Tailwind Merge** - Mesclagem inteligente de classes Tailwind

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter (configuração Ultracite)
- **TypeScript** - Tipagem estática com strictNullChecks habilitado

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── ui/             # Componentes de interface
├── pages/              # Páginas da aplicação
│   ├── create-room.tsx # Página de criação de salas
│   └── room.tsx        # Página da sala
├── lib/                # Utilitários e configurações
└── app.tsx            # Componente principal da aplicação
```

## 🛠️ Padrões do Projeto

- **Alias de Importação**: `@/` mapeado para `./src/`
- **Tipagem Estrita**: TypeScript com `strictNullChecks` habilitado
- **Tema**: Configuração dark theme por padrão
- **Roteamento**: SPA com React Router DOM
- **Estilização**: TailwindCSS com configuração v4

## 🔧 Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🎯 Funcionalidades

- Criação de salas interativas
- Navegação entre páginas com React Router
- Interface responsiva com TailwindCSS
- Componentes acessíveis com Radix UI
- Gerenciamento de estado com React Query

## 📝 Desenvolvimento

O projeto utiliza o Biome como ferramenta de linting e formatação, seguindo as configurações do preset Ultracite para manter consistência no código.

Para desenvolvimento, certifique-se de que seu editor esteja configurado para usar o Biome ou execute as verificações manualmente durante o desenvolvimento.

Desenvolvido com 💜 durante um evento da rocketseat🚀!
