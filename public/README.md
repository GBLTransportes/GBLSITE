# Pasta Public - Recursos Estáticos

## 📁 Como Adicionar as Logos

1. Coloque as imagens das logos nesta pasta:

```
public/
├── logo-gbl.png        ← Logo principal (usar na navegação)
└── images/
    ├── gbl-logo-blue.png   ← Logo azul com dourado
    └── gbl-logo-large.png  ← Logo grande (para hero section)
```

## 🖼️ Tamanhos Recomendados

- **Logo Header**: 200x80 px
- **Logo Grande**: 400x200 px
- **Logo Quadtico**: 300x300 px

## 📌 Como Usar no Site

### No Header (Navegação)
```tsx
<img src="/logo-gbl.png" alt="GBL Transportes" className="h-10 w-auto" />
```

### Na Hero Section (Grande)
```tsx
<img src="/images/gbl-logo-large.png" alt="GBL" className="w-48 h-auto" />
```

---

**Adicione seus arquivos de imagem aqui para que funcionem no site!**
