# A Volta — Método Guiado (upsell)

Página de **upsell** estática (HTML puro + Tailwind via CDN, sem build) exibida
logo após a confirmação de pagamento. Oferece o método guiado **A Volta** por
um preço promocional único, com botão de aceite (Kirvano) e link de recusa.

Feita para ser publicada na Vercel e editada à mão.

---

## 📁 Estrutura

```
upsell-a-volta/
├── index.html      # página completa (markup + Tailwind + estilos da glow/pulse)
├── assets/         # imagens futuras (capa, mockups…)
├── vercel.json     # config de site estático para a Vercel
└── README.md       # este arquivo
```

Sem dependências npm. Tailwind vem do CDN e a fonte (Cormorant) do Google Fonts,
ambos via `<link>`/`<script>` no `index.html`.

---

## ✅ ANTES DE DIVULGAR — edite estes 2 pontos

Tudo está no `index.html` (use Ctrl+F):

1. `{{LINK_UPSELL_KIRVANO}}` → link de **ACEITE** da Kirvano (botão "SIM").
2. `{{LINK_RECUSA}}` → link de **RECUSA** (segue só para a leitura).

> 💰 Preço atual da oferta: **R$ 59,99** (de R$ 97,00). Para alterar, busque por
> `R$ 59,99` no `index.html` — aparece no bloco de preço e no texto do botão.

---

## 🚀 Publicar na Vercel

Esta pasta já está pronta para deploy estático. Como o repositório contém vários
projetos, configure o **Root Directory** como `upsell-a-volta`.

1. Acesse [vercel.com/new](https://vercel.com/new) e importe este repositório do GitHub.
2. Em **Root Directory**, selecione `upsell-a-volta`.
3. Framework Preset: **Other** (site estático — sem build).
4. Deploy. A cada `git push` no branch, a Vercel republica automaticamente.

---

## 🔒 Observações

- A página usa `noindex, nofollow` de propósito — é um destino pós-checkout,
  não deve ser indexada por buscadores.
- O Tailwind via CDN exibe um aviso no console em produção; funciona normalmente.
  Se quiser remover o aviso no futuro, gere um CSS compilado do Tailwind.
