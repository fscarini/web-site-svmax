import './style.css'

// ========================================
// Mobile Menu Toggle
// ========================================
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
  });

  // Fechar menu ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove('active');
      mobileMenuToggle.classList.remove('active');
    }
  });
}

// ========================================
// Carousel Functionality
// ========================================
class Carousel {
  constructor(element) {
    this.carousel = element;
    this.track = this.carousel.querySelector('.carousel-track');
    this.slides = Array.from(this.track.children);
    this.nextButton = this.carousel.querySelector('.carousel-btn-next');
    this.prevButton = this.carousel.querySelector('.carousel-btn-prev');
    this.indicatorsContainer = this.carousel.querySelector('.carousel-indicators');
    
    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5 segundos
    
    this.init();
  }
  
  init() {
    // Criar slides adicionais se houver apenas um
    if (this.slideCount === 1) {
      this.createAdditionalSlides();
    }
    
    this.createIndicators();
    this.setupEventListeners();
    this.startAutoPlay();
  }
  
  createAdditionalSlides() {
    // Adicionar mais 2 slides com conteúdo variado
    const slide2 = document.createElement('div');
    slide2.className = 'carousel-slide';
    slide2.innerHTML = `
      <div class="hero-content">
        <h1>Desconto Especial no Pix</h1>
        <p>2% de desconto em todas as compras</p>
      </div>
    `;
    
    const slide3 = document.createElement('div');
    slide3.className = 'carousel-slide';
    slide3.innerHTML = `
      <div class="hero-content">
        <h1>Entrega Grátis</h1>
        <p>Para compras acima de R$ 200,00</p>
      </div>
    `;
    
    this.track.appendChild(slide2);
    this.track.appendChild(slide3);
    
    this.slides = Array.from(this.track.children);
    this.slideCount = this.slides.length;
  }
  
  createIndicators() {
    this.slides.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.className = 'carousel-indicator';
      if (index === 0) indicator.classList.add('active');
      indicator.addEventListener('click', () => this.goToSlide(index));
      this.indicatorsContainer.appendChild(indicator);
    });
    this.indicators = Array.from(this.indicatorsContainer.children);
  }
  
  setupEventListeners() {
    this.nextButton.addEventListener('click', () => this.nextSlide());
    this.prevButton.addEventListener('click', () => this.prevSlide());
    
    // Touch events para mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
    
    this.carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    });
    
    // Pausar autoplay ao hover
    this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
    this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
  }
  
  handleSwipe(startX, endX) {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slideCount;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
    this.updateCarousel();
    this.resetAutoPlay();
  }
  
  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${offset}%)`;
    
    // Atualizar indicadores
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }
  
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }
  
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}

// Inicializar carousel
const heroCarousel = document.getElementById('hero-carousel');
if (heroCarousel) {
  new Carousel(heroCarousel);
}

// ========================================
// Smooth Scroll
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignorar links vazios ou apenas #
    if (href === '#' || href === '') {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// Scroll Animations
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Adicionar animação aos elementos
const animateElements = document.querySelectorAll('.benefit-card, .category-card, .area-card, .product-placeholder');
animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ========================================
// Header Scroll Effect
// ========================================
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  }
  
  lastScroll = currentScroll;
});

// ========================================
// WhatsApp Float Visibility
// ========================================
const whatsappFloat = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    whatsappFloat.style.opacity = '1';
    whatsappFloat.style.visibility = 'visible';
  } else {
    whatsappFloat.style.opacity = '0';
    whatsappFloat.style.visibility = 'hidden';
  }
});

// Inicializar visibilidade
if (window.pageYOffset <= 300) {
  whatsappFloat.style.opacity = '0';
  whatsappFloat.style.visibility = 'hidden';
}
whatsappFloat.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';

// ========================================
// Lazy Loading Images
// ========================================
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
});

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});

// ========================================
// Console Info
// ========================================
console.log('%c🧹 SVE Clean Website ', 'background: #0066CC; color: white; font-size: 16px; padding: 10px;');
console.log('%cDesenvolvido com Vite + Vanilla JS', 'color: #666; font-size: 12px;');
