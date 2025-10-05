# SVE Clean - Website

Website da SVE Clean - Distribuidora e Loja de Produtos de Limpeza, recriado em HTML, CSS e JavaScript utilizando Vite.

## 🚀 Tecnologias Utilizadas

- **Vite** - Build tool moderna e rápida
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com variáveis CSS, Flexbox e Grid
- **JavaScript (Vanilla)** - Funcionalidades interativas

## 📋 Funcionalidades

- ✅ Header fixo com navegação responsiva
- ✅ Menu mobile (hamburger)
- ✅ Carrossel automático no hero section
- ✅ Seção de benefícios (desconto e entrega)
- ✅ Sobre a empresa
- ✅ Categorias de produtos (Limpeza e Descartáveis)
- ✅ Áreas de atuação (10 segmentos)
- ✅ Seções de produtos
- ✅ Banner promocional
- ✅ Produtos para condomínios
- ✅ Footer completo com informações de contato
- ✅ Botão WhatsApp flutuante
- ✅ Smooth scroll
- ✅ Animações ao scroll
- ✅ Design responsivo (mobile, tablet, desktop)

## 🎨 Paleta de Cores

- **Azul Primário**: #0066CC
- **Amarelo**: #FFD700
- **Laranja**: #FF6600
- **Roxo**: #8B00FF
- **Teal**: #00B8D4
- **WhatsApp**: #25D366

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🌐 Servidor de Desenvolvimento

Após executar `npm run dev`, o site estará disponível em:
- Local: http://localhost:5173/
- Network: http://[seu-ip]:5173/

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Estrutura do Projeto

```
sveclean-website/
├── index.html              # HTML principal
├── package.json            # Dependências do projeto
├── src/
│   ├── main.js            # JavaScript principal
│   ├── style.css          # Estilos CSS
│   └── assets/
│       └── images/        # Imagens do projeto
└── public/                # Arquivos públicos
```

## 📝 Customização

### Alterar Cores

Edite as variáveis CSS no arquivo `src/style.css`:

```css
:root {
  --color-primary-blue: #0066CC;
  --color-primary-yellow: #FFD700;
  /* ... outras cores */
}
```

### Adicionar Slides ao Carrossel

O carrossel já possui 3 slides. Para adicionar mais, edite o arquivo `src/main.js` na classe `Carousel`.

### Modificar Conteúdo

Todo o conteúdo está no arquivo `index.html` e pode ser facilmente editado.

## 🎯 Funcionalidades JavaScript

### Carrossel
- Auto-play a cada 5 segundos
- Navegação por setas
- Indicadores clicáveis
- Suporte a touch/swipe em mobile
- Pausa ao hover

### Menu Mobile
- Toggle do menu hamburger
- Animação suave
- Fecha ao clicar em link
- Fecha ao clicar fora

### Scroll
- Smooth scroll para âncoras
- Animações de entrada
- Header com sombra dinâmica

### WhatsApp
- Botão flutuante
- Aparece após scroll de 300px
- Link direto para WhatsApp

## 📄 Licença

© 2024 Direitos Reservados a SVE Clean

## 👨‍💻 Desenvolvimento

Site desenvolvido com Vite + Vanilla JavaScript, recriando o design original em WordPress.

## 📞 Contato

- **Telefone**: 11 2366-5046
- **Email**: sveclean@sveclean.com.br
- **Endereço**: Rua Santa Eudóxia, 187 - Parque Peruche - São Paulo - SP

## 🌟 Features Adicionais

- Lazy loading de imagens
- Otimização de performance
- SEO-friendly
- Acessibilidade (ARIA labels)
- Cross-browser compatibility
