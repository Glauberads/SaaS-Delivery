# Contexto do Projeto: VIP Delivery - SaaS White Label

## Visão Geral
Este projeto é uma Landing Page premium e de alta conversão para o **VIP Delivery**, um sistema SaaS White Label voltado para entrega de tecnologia a negócios locais (restaurantes, pizzarias, etc.). O objetivo principal da página é atrair infoprodutores, agências e profissionais digitais que desejam vender licenças de software e criar uma renda recorrente.

## Identidade Visual e Posicionamento
- **Estilo:** SaaS premium, Dark mode, Dashboard futurista, Tecnológico.
- **Paleta de Cores:**
  - Preto profundo: `#0B0B0F` (Background principal)
  - Vermelho premium: `#EA1D2C` (Cor primária/Destaques)
  - Branco: `#FFFFFF` (Texto principal)
  - Cinza premium: `#A1A1AA` (Textos secundários/Muted)
- **Promessa:** "Venda tecnologia todos os meses e construa uma receita previsível com um software pronto para revenda."

## Tecnologias Utilizadas
- **Vite:** Bundler super rápido e servidor de desenvolvimento.
- **React + TypeScript:** Biblioteca de interface estruturada e tipada.
- **Tailwind CSS (v3):** Framework utilitário para estilização rápida e responsiva.
- **Framer Motion:** Biblioteca de animações para React (usada nas entradas de scroll e interatividade).
- **Lucide React:** Biblioteca de ícones (clean e moderna).
- **Shadcn UI (Inspiração):** Componentes montados com foco em reaproveitamento (utilizando `clsx` e `tailwind-merge` no arquivo `src/lib/utils.ts`).

## Estrutura do Projeto

A lógica de interface foi modularizada em vários componentes dentro de `src/components/`, montados de forma sequencial no `App.tsx`:

- **`Hero.tsx`**: A primeira dobra da página, destacando a promessa, CTAs principais e mockups animados do dashboard.
- **`Pain.tsx`**: Seção de conscientização abordando as dores de quem presta serviços (imprevisibilidade, etc).
- **`Opportunity.tsx`**: Explicação dos benefícios de se ter uma marca própria no modelo SaaS.
- **`Features.tsx`**: Demonstração do que o cliente final (restaurantes) recebe (Cardápio Digital, PDV, Gestão).
- **`BusinessModel.tsx`**: Projeção de ganhos financeiros para os revendedores baseado no número de clientes.
- **`SocialProof.tsx`**: Depoimentos voltados à transformação dos clientes atuais (MRR alcançado).
- **`Pricing.tsx`**: Tabela de preços estratégica com o plano "PRO" destacado.
- **`CTA.tsx`**: Última chamada para ação antes do rodapé.
- **`Navbar.tsx` & `Footer.tsx`**: Navegação flutuante e rodapé institucional.

## Integrações
- **Meta Pixel:** Adicionado no `<head>` do arquivo `index.html` (Pixel ID: 953901930601486) com o evento padrão de `PageView`.

## Como Executar Localmente

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Navegue até a pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para gerar o build de produção:
   ```bash
   npm run build
   ```

## Deploy
O projeto está integrado ao repositório GitHub (`https://github.com/Glauberads/SaaS-Delivery`) na branch `main`. Pode ser facilmente conectado a plataformas como **Vercel** ou **Netlify** para deploy automático sempre que houver um push na branch principal.
