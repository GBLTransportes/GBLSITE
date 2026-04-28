# 🚚 GBL Transportes - Site Profissional

Site moderno de logística e transporte construído com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

---

## 🚀 Início Rápido

### **Pré-requisitos**
- Node.js 18+ instalado
- npm ou yarn

### **Instalação**
```bash
npm install
npm run dev
```

Acesse: **http://localhost:3000**

---

## 📁 Estrutura do Projeto

```
app/                  # Next.js App Router
├── layout.tsx        # Layout raiz + SEO + Structured Data
├── page.tsx          # Página inicial
├── sitemap.ts        # Sitemap automático
└── api/
    └── contact/      # API de contatos

components/           # Componentes React reutilizáveis
├── Header.tsx        # Navegação + Logo
├── Footer.tsx        # Rodapé
├── HeroSection.tsx   # Banner principal
├── AboutSection.tsx  # Sobre a empresa
├── ServicesSection.tsx  # Serviços (6 opções)
├── ContactSection.tsx   # Formulário de contato
├── ServiceCard.tsx      # Card reutilizável
├── Button.tsx           # Botão customizado
├── WhatsAppButton.tsx   # Botão flutuante WhatsApp
└── StructuredData.tsx   # SEO - Schema.org

styles/
└── globals.css       # Estilos globais + animações

public/
├── logo-gbl.png      # Logo da empresa
├── robots.txt        # Configuração de crawlers
└── images/           # Imagens adicionais

⚙️ Configurações
├── package.json      # Dependências
├── tsconfig.json     # TypeScript
├── tailwind.config.ts # Tema Tailwind
├── next.config.js    # Next.js config
├── postcss.config.js # CSS processing
└── vercel.json       # Deploy Vercel
```

---

## 🎨 Personalização

### **Cores da Marca**
Edite [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  'primary': '#0F2B5F',      // Azul (da logo GBL)
  'primary-dark': '#0D2755',
  'secondary': '#0066cc',    // Azul secundário
  'accent': '#D4A337',       // Dourado (da logo)
}
```

### **Informações da Empresa**
- **Nome**: Edite em [components/Header.tsx](components/Header.tsx) (linha ~8)
- **Email**: Procure `contato@gbltransportes.com.br`
- **WhatsApp**: Procure `5511982043652`
- **Endereço**: Edite em [components/Footer.tsx](components/Footer.tsx)

### **Logo**
Coloque em: `public/images/LogotipoGBL.png`

### **SEO**
Edite em [app/layout.tsx](app/layout.tsx) (linhas 7-52):
- `title` - Título da página
- `description` - Descrição
- `keywords` - Palavras-chave
- `openGraph` - Redes sociais
- `twitter` - Twitter/X

---

## 📋 Seções do Site

| Seção | Arquivo | Descrição |
|-------|---------|-----------|
| **Home** | [app/page.tsx](app/page.tsx) | Página inicial com todas as seções |
| **Header** | [components/Header.tsx](components/Header.tsx) | Navegação responsiva |
| **Hero** | [components/HeroSection.tsx](components/HeroSection.tsx) | Banner com CTA |
| **Sobre** | [components/AboutSection.tsx](components/AboutSection.tsx) | Missão, valores, história |
| **Serviços** | [components/ServicesSection.tsx](components/ServicesSection.tsx) | 6 serviços com cards |
| **Contato** | [components/ContactSection.tsx](components/ContactSection.tsx) | Formulário + WhatsApp |
| **Footer** | [components/Footer.tsx](components/Footer.tsx) | Informações da empresa |

---

## 🔍 SEO Implementado

✅ Meta tags otimizadas  
✅ Open Graph (Facebook, LinkedIn, Pinterest)  
✅ Twitter Card  
✅ Structured Data (Schema.org)  
✅ Sitemap automático (`/sitemap.xml`)  
✅ Robots.txt (`/robots.txt`)  
✅ FAQ Schema  
✅ Local Business Schema  

### **Google Search Console**
1. Acesse: https://search.google.com/search-console
2. Adicione seu domínio
3. Envie o sitemap automático
4. Configure código de verificação em [app/layout.tsx](app/layout.tsx)

---

## 🚀 Build & Deploy

### **Build Local**
```bash
npm run build
npm start
```

### **Deploy na Vercel** (Recomendado)
```bash
vercel
```

Ou:
1. Faça push para GitHub
2. Conecte em [vercel.com](https://vercel.com)
3. Deploy automático!

---

## 📱 Responsividade

Site totalmente responsivo:
- ✅ Mobile (< 640px)
- ✅ Tablet (640px - 1024px)
- ✅ Desktop (> 1024px)

Teste com: Chrome DevTools (F12 → Device Toggle)

---

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS 3.4** - Styling
- **React 18** - UI Components
- **Node.js 18+** - Runtime

---

## 📝 Atualizações Futuras

Para adicionar/modificar:

1. **Nova seção**: Crie arquivo em `components/` e importe em `app/page.tsx`
2. **Nova página**: Crie em `app/nova-pagina/page.tsx`
3. **Novo serviço**: Edite array em [components/ServicesSection.tsx](components/ServicesSection.tsx)
4. **Integração de Email**: Configure em [app/api/contact/route.ts](app/api/contact/route.ts)

---

## 🔧 Troubleshooting

| Problema | Solução |
|----------|---------|
| Erro de build | Execute `npm install` novamente |
| Logo não aparece | Verifique caminho em `public/images/` |
| CSS não carrega | Limpe cache: `rm -rf .next && npm run dev` |
| Port 3000 em uso | Use: `npm run dev -- -p 3001` |

---

## 📞 Informações da Empresa

**GBL Transportes**
- Email: contato@gbltransportes.com.br
- WhatsApp: (11) 98204-3652
- Website: https://gbltransportes.com.br

---

## 📄 Licença

Desenvolvido para GBL Transportes ©2026

---

**Última atualização:** 15/04/2026
