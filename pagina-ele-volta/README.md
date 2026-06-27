# Método das 3 Cartas — página de vendas

Página de vendas estática (HTML/CSS/JS puro, sem framework e sem build) para o
ebook **Método das 3 Cartas**. Pensada para ser publicada na Vercel e editada à mão.

---

## 📁 Estrutura

```
pagina-ele-volta/
├── index.html        # só o conteúdo/marcação (sem CSS ou JS inline)
├── css/
│   └── styles.css    # todo o estilo (cores em variáveis CSS no :root)
├── js/
│   └── main.js       # smooth scroll, FAQ accordion e animações de entrada
├── assets/           # imagens futuras (capa, mockups…)
├── vercel.json       # config de site estático para a Vercel
└── README.md         # este arquivo
```

Sem dependências npm. As fontes (Cormorant Garamond + Jost) vêm do Google Fonts
via `<link>` no `index.html`.

---

## ✅ ANTES DE DIVULGAR — edite estes 3 pontos

Tudo está em `index.html`.

1. **Link do checkout (obrigatório).** Procure por
   `COLE_AQUI_O_LINK_DO_CHECKOUT_KIRVANO` e troque pelo link real do seu checkout
   da Kirvano. Ele está no botão da seção **Oferta**:

   ```html
   <a class="btn btn--primary btn--block" href="COLE_AQUI_O_LINK_DO_CHECKOUT_KIRVANO">
   ```

   > Os botões “Quero minha leitura” / “Começar minha leitura” do topo e do final
   > apontam para a seção de oferta (`#oferta`), de onde a pessoa segue para o
   > checkout. Você só precisa trocar **um** link.

2. **Termos de Uso.** No rodapé, troque o `href="#"` do link *Termos de Uso* pela
   URL da sua página de termos.

3. **Suporte.** No rodapé, troque o `href="#"` do link *Suporte* pelo seu canal
   de atendimento (ex.: `mailto:seu@email.com` ou link do WhatsApp).

---

## ✏️ Como editar

- **Textos:** edite direto no `index.html`. Cada seção está comentada
  (`<!-- 1. HERO -->`, `<!-- 5. OFERTA -->`, etc.).
- **Cores:** mude as variáveis no topo de `css/styles.css`, dentro de `:root`
  (`--bg`, `--gold`, `--ink`…). Toda a paleta deriva delas.
- **Imagens:** salve o arquivo em `assets/` e use
  `<img src="assets/nome.png" alt="...">` no HTML.
- **Comportamento:** o `js/main.js` cuida do scroll suave, do FAQ (abre uma
  resposta por vez) e da animação de entrada. Não usa `localStorage`.

### Pré-visualizar localmente

Abra o `index.html` no navegador, ou rode um servidor simples na pasta do projeto:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

---

## 🚀 Publicar / republicar na Vercel

A partir desta pasta (`pagina-ele-volta/`):

```bash
# 1. instale a CLI (uma vez só)
npm i -g vercel

# 2. faça login (uma vez só) — abre o navegador
vercel login

# 3. publique em produção
vercel --prod
```

A cada alteração, basta salvar os arquivos e rodar `vercel --prod` de novo para
republicar.

---

## ⚖️ Compliance (não remova)

Esta página foi escrita para **vender clareza e autoconhecimento**, nunca para
prometer reconciliação ou controle sobre a decisão de outra pessoa. Mantenha:

- O **disclaimer** no rodapé (leitura interpretativa de autoconhecimento e
  entretenimento, não é previsão garantida, não substitui aconselhamento
  profissional, resultados variam).
- A resposta do FAQ **“Isso garante que ele vai voltar?” → NÃO** (e que quem
  promete isso está enganando).

Ao editar os textos, **não** insira promessas de que “ele volta”, reconciliação
garantida ou qualquer garantia de resultado — isso reprova a página na Kirvano.
