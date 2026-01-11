# 🛍️ Vue Fake Store

Uma aplicação de e-commerce moderna construída com **Vue 3**, **Vite** e **TypeScript**. Utiliza a [Fake Store API](https://fakestoreapi.com) para exibir produtos de forma interativa e responsiva.

## ✨ Características

- 🛒 Carrinho de compras persistente (localStorage)
- 📱 Design responsivo e moderno (DaisyUI + Tailwind)
- 🎯 Tipagem forte com TypeScript
- ⚡ Performance otimizada com Vite
- 🔄 Estado gerenciado com Pinia
- 🎨 UI elegante com ícones (Lucide Vue)
- ✅ Notificações nativas (Vue Sonner)
- 🔍 Código bem estruturado e mantível

## 🛠️ Tecnologias

### Core

- **[Vue 3](https://vuejs.org/)** - Framework reativo progressivo
- **[Vite](https://vite.dev/)** - Build tool ultrarrápido
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utilitário
- **[DaisyUI](https://daisyui.com/)** - Componentes Tailwind prontos
- **[Lucide Vue Next](https://lucide.dev/)** - Ícones SVG de alta qualidade

### State & Routing

- **[Pinia](https://pinia.vuejs.org/)** - Gerenciador de estado
- **[Vue Router](https://router.vuejs.org/)** - Roteamento SPA

### HTTP & Notifications

- **[Axios](https://axios-http.com/)** - Cliente HTTP
- **[Vue Sonner](https://vue-sonner.vercel.app/)** - Notificações elegantes

### Development

- **[ESLint](https://eslint.org/)** - Linting de código
- **[Prettier](https://prettier.io/)** - Code formatter
- **[vue-tsc](https://github.com/vuejs/language-tools)** - Type checking

## 📋 Pré-requisitos

- Node.js: `^20.19.0 || >=22.12.0`
- npm ou yarn

## 🚀 Instalação e Uso

### Instalar dependências

```bash
npm install
```

### Desenvolvimento (com hot-reload)

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

### Linting e formatting

```bash
npm run lint # ESLint com auto-fix
npm run format # Prettier
```

### Type checking

```bash
npm run type-check
```

## 📁 Estrutura do Projeto

```bash
src/
├── components/ # Componentes Vue reutilizáveis
│ ├── ProductCard.vue
│ ├── CartItem.vue
│ ├── ProductSkeleton.vue
│ └── ConfirmModal.vue
├── composables/ # Composables para lógica reutilizável
│ └── api/
│ └── products/
│ └── useProducts.ts
├── lib/ # Utilidades e configurações
│ └── api.ts # Instância Axios
├── stores/ # Pinia stores
│ └── cart.ts # Estado do carrinho
├── types/ # Tipos TypeScript
│ ├── Product.ts
│ └── CartItem.ts
├── views/ # Páginas da aplicação
│ └── HomeView.vue
├── router/ # Vue Router
│ └── index.ts
├── App.vue # Componente raiz
├── main.ts # Entry point
└── style.css # Estilos globais
```

## 🔧 Configuração

### IDE Recomendada

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desabilitar Vetur)

### DevTools do Navegador

- **Chrome/Edge/Brave**: [Vue.js DevTools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- **Firefox**: [Vue.js DevTools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## 📚 Funcionalidades Principais

### Listagem de Produtos

- Busca em tempo real da Fake Store API
- Grid responsivo (1-4 colunas)
- Skeleton loading para melhor UX
- Classificação por estrelas

### Carrinho de Compras

- Adicionar/remover produtos
- Ajustar quantidades
- Persistência em localStorage
- Cálculo automático de total

### Notificações

- Feedback visual para ações do usuário
- Toasts informativos com Vue Sonner

## 📝 Scripts Disponíveis

| Script               | Descrição                          |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Inicia servidor de desenvolvimento |
| `npm run build`      | Build otimizado para produção      |
| `npm run preview`    | Visualiza o build                  |
| `npm run type-check` | Verifica tipos TypeScript          |
| `npm run lint`       | Lint com auto-fix                  |
| `npm run format`     | Formata código com Prettier        |

## 🐛 Troubleshooting

### Imagens não aparecem?

Certifique-se de que o componente usa `<img :src="...">` (binding dinâmico) e não `<image src="...">`.

### Carrinho não persiste?

Verifique se localStorage está habilitado no navegador. O estado é salvo automaticamente na propriedade `vuefakeshop_cart`.

## 📄 Licença

MIT - Sinta-se livre para usar este projeto como base!

## 🤝 Contribuindo

Pull requests são bem-vindas. Para mudanças maiores, abra uma issue primeiro para discussão.
