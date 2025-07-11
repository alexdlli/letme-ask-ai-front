# NLW Agents

Projeto desenvolvido durante o evento NLW da Rocketseat, focado em criar uma aplicação web moderna para gerenciamento de salas interativas com sistema de perguntas e respostas alimentado por IA e funcionalidades de gravação de áudio.

## 🚀 Tecnologias Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca para construção de interfaces
- **TypeScript 5.8.3** - Superset do JavaScript com tipagem estática
- **Vite 7.0.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1.11** - Framework CSS utilitário
- **React Router DOM 7.6.3** - Roteamento para aplicações React

### UI Components & Design System

- **Shadcn/UI** - Sistema de componentes baseado em Radix UI
- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Biblioteca de ícones moderna
- **Class Variance Authority** - Utilitário para variantes de componentes
- **Tailwind Merge** - Mesclagem inteligente de classes Tailwind

### Gerenciamento de Estado & Dados

- **TanStack React Query** - Gerenciamento de estado servidor com cache
- **React Hook Form** - Gerenciamento de formulários performático
- **Zod** - Validação de esquemas TypeScript-first

### Funcionalidades Avançadas

- **MediaRecorder API** - Gravação de áudio nativa do navegador
- **File Upload** - Sistema de upload de arquivos para backend
- **Optimistic Updates** - Atualizações otimistas na interface

### Ferramentas de Desenvolvimento

- **Biome** - Linter e formatter (configuração Ultracite)
- **EditorConfig** - Padronização de configuração de editores
- **TypeScript** - Tipagem estática com strictNullChecks habilitado

## 📁 Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── ui/                 # Sistema de componentes UI
│   │   ├── button.tsx      # Botões com variantes
│   │   ├── card.tsx        # Cards e containers
│   │   ├── form.tsx        # Componentes de formulário
│   │   ├── input.tsx       # Campos de entrada
│   │   ├── textarea.tsx    # Áreas de texto
│   │   ├── label.tsx       # Labels acessíveis
│   │   └── badge.tsx       # Badges e indicadores
│   ├── question-form.tsx   # Formulário de perguntas
│   ├── question-item.tsx   # Item de pergunta/resposta
│   ├── question-list.tsx   # Lista de perguntas
│   ├── room-list.tsx       # Lista de salas
│   └── create-room-form.tsx # Formulário de criação de sala
├── pages/                  # Páginas da aplicação
│   ├── create-room.tsx     # Página de criação de salas
│   ├── room.tsx           # Página da sala
│   └── record-room-audio.tsx # Página de gravação de áudio
├── http/                   # Hooks e tipos para API
│   ├── types/             # Tipagens TypeScript
│   │   ├── create-room-request.ts
│   │   ├── create-room-response.ts
│   │   ├── create-question-request.ts
│   │   ├── create-quest-response.ts
│   │   ├── get-rooms-response.ts
│   │   └── get-room-questions-response.ts
│   ├── use-create-room.ts  # Hook para criação de salas
│   ├── use-create-question.ts # Hook para criação de perguntas
│   ├── use-rooms.ts        # Hook para listar salas
│   └── use-room-questions.ts # Hook para listar perguntas
├── lib/                    # Utilitários e configurações
│   └── utils.ts           # Funções utilitárias
└── app.tsx                # Componente principal da aplicação
```

## 🛠️ Padrões do Projeto

- **Alias de Importação**: `@/` mapeado para `./src/`
- **Tipagem Estrita**: TypeScript com `strictNullChecks` habilitado
- **Design System**: Shadcn/UI com tema dark por padrão
- **Roteamento**: SPA com React Router DOM
- **Estilização**: TailwindCSS com configuração v4
- **Validação**: Esquemas Zod com React Hook Form
- **API**: Hooks customizados com React Query
- **Padronização**: EditorConfig para consistência de código

## 🔧 Setup e Configuração

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Backend API rodando na porta 3333

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

### 🏠 Gerenciamento de Salas

- ✅ Criação de salas interativas
- ✅ Listagem de salas disponíveis
- ✅ Navegação entre salas

### 🎤 Gravação de Áudio

- ✅ Gravação de áudio em tempo real
- ✅ Upload automático para backend
- ✅ Suporte a codec WebM
- ✅ Configurações de qualidade de áudio
- ✅ Detecção de suporte do navegador

### 💬 Sistema de Perguntas & Respostas

- ✅ Formulário de criação de perguntas
- ✅ Validação de entrada com Zod
- ✅ Respostas geradas por IA
- ✅ Atualizações otimistas na interface
- ✅ Cache inteligente com React Query

### 🎨 Interface de Usuário

- ✅ Design responsivo com TailwindCSS
- ✅ Componentes acessíveis com Radix UI
- ✅ Tema dark por padrão
- ✅ Ícones modernos com Lucide React
- ✅ Animações e transições suaves

### 🔧 Funcionalidades Técnicas

- ✅ Tipagem completa com TypeScript
- ✅ Gerenciamento de estado servidor
- ✅ Validação de formulários
- ✅ Tratamento de erros
- ✅ Loading states e feedback visual

## 📡 API Integration

O projeto se comunica com um backend através de hooks customizados:

- **useCreateRoom**: Criação de novas salas
- **useRooms**: Listagem de salas disponíveis
- **useCreateQuestion**: Criação de perguntas
- **useRoomQuestions**: Listagem de perguntas por sala

Todas as requisições incluem tratamento de erro e estados de carregamento.

## 📝 Desenvolvimento

### Linting e Formatação

O projeto utiliza o Biome como ferramenta de linting e formatação, seguindo as configurações do preset Ultracite para manter consistência no código.

### Configurações do Editor

O arquivo `.editorconfig` define padrões de formatação:

- Indentação com 2 espaços
- Charset UTF-8
- Quebras de linha LF
- Remoção de espaços em branco

### Componentes UI

Os componentes seguem o padrão Shadcn/UI com:

- Variantes configuráveis
- Acessibilidade por padrão
- Tipagem TypeScript completa
- Composição flexível

Para desenvolvimento, certifique-se de que seu editor esteja configurado para usar o Biome ou execute as verificações manualmente durante o desenvolvimento.

Desenvolvido com 💜 durante um evento da rocketseat🚀!
