# MOZ MEGA KIT DESIGNER PRO — Landing Page Oficial

Landing page de vendas desenvolvida em **React + TypeScript + Vite + Tailwind CSS**, preparada para integração contínua via **GitHub** e publicação em produção na **Hostinger**.

## Informações Comerciais Configuradas

Todas as constantes comerciais estão centralizadas em `src/config/product.ts`:

- **Produto**: `MOZ MEGA KIT DESIGNER PRO`
- **Subtítulo**: `+12.000 ARTES EDITÁVEIS + 14 SUPER BÓNUS!`
- **Preço**: `997 MT`
- **Plataforma de Checkout**: `TUTORA — Moçambique`
- **Checkout Oficial**: `https://pay.tutora.co.mz/b8e0e602ba454f839ed90c3e250ac081`
- **Entrega**: Ficheiro PDF disponibilizado após confirmação do pagamento na Tutora, contendo o link de acesso aos componentes do Mega Kit.

---

## Tecnologias Utilizadas

- **React 19** e **TypeScript**
- **Vite 8** (bundling e servidor de desenvolvimento/preview)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Motion** (`motion/react`) para animações de entrada com suporte a `prefers-reduced-motion`
- **Lucide React** para iconografia

---

## Estrutura do Projecto

```text
.
├── public/
│   ├── .htaccess                 # Regras de SPA fallback e cache para Apache/LiteSpeed (Hostinger)
│   ├── favicon.svg               # Ícone do separador do navegador
│   ├── og-preview.jpg            # Imagem de pré-visualização para Open Graph / redes sociais
│   └── robots.txt                # Directivas para motores de busca
├── src/
│   ├── assets/
│   │   └── images/               # Imagens optimizadas importadas pelo Vite para o bundle final
│   ├── components/
│   │   ├── AudienceSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── BonusesSection.tsx
│   │   ├── CheckoutButton.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LegalModal.tsx
│   │   ├── LifetimeAccessSection.tsx
│   │   ├── MobilePurchaseBar.tsx
│   │   ├── OrganizationSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── PurchaseStepsSection.tsx
│   │   ├── ResilientImage.tsx
│   │   ├── ResourcesSection.tsx
│   │   └── Reveal.tsx
│   ├── config/
│   │   └── product.ts            # Constantes comerciais centralizadas
│   ├── data/
│   │   └── landingContent.ts     # Textos, listas, pastas ilustrativas, galeria e FAQ
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── .node-version
├── .nvmrc
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## Pré-requisitos

- **Node.js** `>= 22.12.0` (ou `>= 20.19.0`; obrigatório para `vite@8` / `rolldown`)
- **npm** `>= 10.0.0`

---

## Como Executar Localmente

1. Instalar as dependências:

```bash
npm install
```

2. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

3. Verificar tipos TypeScript (opcional, recomendado antes de commits):

```bash
npm run lint
```

4. Gerar a versão de produção:

```bash
npm run build
```

5. Pré-visualizar localmente o build final da pasta `dist/`:

```bash
npm run preview
```

---

## Como Enviar para o GitHub

No directório raiz do projecto, executa:

```bash
git init
git add .
git commit -m "chore: prepara landing page MOZ MEGA KIT DESIGNER PRO para GitHub e Hostinger"
git branch -M main
git remote add origin https://github.com/SEU_UTILIZADOR/SEU_REPOSITORIO.git
git push -u origin main
```

> **Nota**: A pasta `node_modules/` e a pasta `dist/` estão excluídas no `.gitignore` para manter o repositório limpo.

---

## Como Publicar na Hostinger

### Opção 1 — Deploy Automático ligando o GitHub à Hostinger (Web Hosting / Hostinger Horizons / Node / Static Sites)

1. No painel da **Hostinger (hPanel)**, acede a **Websites** → selecciona o teu domínio → **Git** (ou **Deploy via GitHub**).
2. Liga a tua conta GitHub e escolhe o repositório e a branch `main`.
3. Define as configurações de compilação:
   - **Framework / Preset**: `Vite` (ou `React`)
   - **Comando de instalação**: `npm install`
   - **Comando de build**: `npm run build`
   - **Directório de publicação (Output Directory)**: `dist`
   - **Versão do Node.js**: `22` (obrigatório usar Node `22.12+` ou `20.19+`; o Node `18` falha no bundler Rolldown do Vite 8)
4. Guarda e inicia o deploy. A cada `git push` na branch `main`, a Hostinger compila e actualiza o site automaticamente.

### Opção 2 — Upload Manual da Pasta `dist` (Shared Hosting / Gestor de Ficheiros)

1. No teu computador, executa:

```bash
npm install
npm run build
```

2. Abre o **Gestor de Ficheiros** do hPanel na Hostinger e navega até à pasta `public_html/` do domínio.
3. Envia **todo o conteúdo** gerado dentro da pasta `dist/` (incluindo `index.html`, `assets/`, `favicon.svg`, `og-preview.jpg`, `robots.txt` e `.htaccess`).
4. Acede ao teu domínio para confirmar o carregamento completo da página e dos botões de checkout para a Tutora.
