# 📖 Documentação - Guia de Manutenção

## 🔍 Edições Rápidas

### **Mudar Empresa (Nome, Cores, Contatos)**

| O que? | Arquivo | Linha | O quê trocar? |
|--------|---------|-------|---------------|
| **Nome da empresa** | `app/layout.tsx` | 8-9 | "GBL Transportes" |
| **Email** | `components/Footer.tsx` | ~46 | contato@gbltransportes.com.br |
| **WhatsApp** | Procure no projeto | - | 5511982043652 |
| **Cores primárias** | `tailwind.config.ts` | ~6-11 | #0F2B5F, #D4A337 |
| **Missão/Visão** | `components/AboutSection.tsx` | ~16-30 | Altere textos |
| **Serviços** | `components/ServicesSection.tsx` | ~11 | Array de serviços |

---

## 🛠️ Adições Comuns

### **Adicionar Novo Serviço**
1. Abra `components/ServicesSection.tsx`
2. No array `services` (linha ~11), adicione:
```tsx
{
  icon: '📦',  // Emoji
  title: 'Novo Serviço',
  description: 'Descrição breve',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}
```
3. Salve e pronto!

### **Adicionar Nova Seção**
1. Crie `components/NovaSecao.tsx`
2. Importe em `app/page.tsx`
3. Adicione entre as outras seções

### **Integrar Email Real**
1. Edite `app/api/contact/route.ts`
2. Adicione SendGrid/Mailgun/Resend
3. Configure variáveis de ambiente em `.env.local`

### **Adicionar Página**
1. Crie pasta: `app/nova-pagina/`
2. Crie `app/nova-pagina/page.tsx`
3. Automático no routing!

---

## 🎯 Deploy Checklist

Antes de publicar:

- [ ] Atualizou nome da empresa?
- [ ] Alterou email e WhatsApp?
- [ ] Logo em `public/images/LogotipoGBL.png`?
- [ ] Testou em mobile (F12)?
- [ ] Verifica Google Search Console?
- [ ] SEO meta tags corretas em `layout.tsx`?
- [ ] Enviou sitemap ao Google?

---

## 📱 Testar Localmente

```bash
npm run dev
```

Acesse: http://localhost:3000

---

## 🚀 Deploy

**Vercel (recomendado):**
```bash
vercel
```

**Manual:**
```bash
npm run build && npm start
```

---

## 🔐 Senhas & APIs

**NÃO commit em Git:**
- Chaves de API
- Tokens de email (SendGrid, etc)
- Credenciais

Use `.env.local` em vez disso.

---

## 📊 URLs Importantes

- Google Search Console: https://search.google.com/search-console
- Vercel: https://vercel.com
- GitHub: https://github.com
- Google Analytics: https://analytics.google.com

---

## ⚡ Performance

Links para testar:
- PageSpeed: https://pagespeed.web.dev
- Mobile Test: https://search.google.com/test/mobile-friendly
- Schema Validator: https://validator.schema.org

---

## 🆘 Problemas Comuns

| Problema | Solução |
|----------|---------|
| Build falha | `npm install` novamente |
| Logo borrada | Caminho correto em `public/` |
| Port 3000 ocupada | `npm run dev -- -p 3001` |
| CSS desaparece | Limpe `.next/` |

---

**Versão:** 1.0  
**Última atualização:** 15/04/2026
