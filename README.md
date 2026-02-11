# 🚚 Apolluz - Transportes e Mudanças

A Apolluz é uma empresa especializada em mudanças residenciais e comerciais, ativa principalmente na Zona Sul de São Paulo/SP. Este projeto é a landing page oficial da empresa, projetada para fornecer informações sobre serviços, avaliações de clientes e um canal direto para solicitação de orçamentos.

## 🚀 Funcionalidades

- **Design Responsivo**: Interface adaptada para desktop, tablets e dispositivos móveis.
- **Catálogo de Serviços**: Detalhamento de mudanças, vistorias, içamentos, guarda-móveis e personal organizer.
- **Depoimentos Dinâmicos**: Slider de avaliações que integra dados estáticos e dinâmicos (via Google Maps).
- **Formulário de Orçamento**: Envio direto de solicitações via e-mail utilizando a integração com EmailJS.
- **Contato Direto**: Links integrados para WhatsApp, telefone, e-mail e Instagram.
- **Políticas de Privacidade**: Página dedicada para conformidade com normas de tratamento de dados.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Integrações**:
  - [EmailJS](https://www.emailjs.com/): Para envio de formulários via cliente.
  - [SerpApi](https://serpapi.com/): Utilizado no backend para buscar avaliações reais do Google Maps.
  - [Google Analytics (Gtag)](https://analytics.google.com/): Monitoramento de tráfego e conversões.
- **Google Fonts**: Tipografia moderna utilizando a fonte 'Poppins'.

## 📁 Estrutura do Projeto

```text
Apolluz-Site/
├── api/                    # Funções de backend (Vercel/Node.js)
│   └── reviews.js          # Busca avaliações via SerpApi
├── src/                    # Recursos visuais (Imagens, Ícones)
├── index.html              # Página principal
├── style.css               # Estilização global
├── script.js               # Lógica de menu mobile e interações básicas
├── slider.js               # Lógica do carrossel de depoimentos
├── send-email.js           # Integração com EmailJS para o formulário
├── politica-de-privacidade.html # Termos e políticas
└── README.md               # Documentação do projeto
```

## ⚙️ Configuração e Instalação

Como o projeto é uma landing page estática com funções simples de backend, para rodar localmente:

1. Clone o repositório.
2. Abra o arquivo `index.html` em seu navegador ou utilize uma extensão como *Live Server*.
3. Para as funcionalidades de **Backend** (Avaliações):
   - Certifique-se de configurar a variável de ambiente `SERPAPI_KEY` se estiver implantando em um ambiente como Vercel.
4. Para o **Formulário de E-mail**:
   - As chaves do EmailJS já estão configuradas em `send-email.js` e `index.html`.
