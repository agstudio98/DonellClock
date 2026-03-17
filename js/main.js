/* ========================================
   DONELLCLOCK — main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Navbar Scroll ===== */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ===== Mobile Menu ===== */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===== Reveal on Scroll ===== */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  }

  /* ===== Product Carousel ===== */
  const carousel = document.querySelector('.carousel-track');
  if (carousel) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    let current = 0;
    let autoPlayTimer;

    function getSlidesPerView() {
      if (window.innerWidth <= 600) return 1;
      if (window.innerWidth <= 900) return 2;
      return 3;
    }

    function getTotal() {
      return Math.max(1, slides.length - getSlidesPerView() + 1);
    }

    function buildDots() {
      if (!dotsContainer) return;
      const total = getTotal();
      dotsContainer.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Slide ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    }

    function goTo(idx) {
      const total = getTotal();
      current = Math.max(0, Math.min(idx, total - 1));
      const slideWidth = 100 / getSlidesPerView();
      carousel.style.transform = 'translateX(-' + (current * slideWidth) + '%)';
      document.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    function startAuto() {
      autoPlayTimer = setInterval(() => {
        goTo((current + 1) >= getTotal() ? 0 : current + 1);
      }, 4000);
    }

    function stopAuto() { clearInterval(autoPlayTimer); }

    buildDots();
    startAuto();

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);

    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { stopAuto(); goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
    });

    window.addEventListener('resize', () => { buildDots(); goTo(0); });
  }

  /* ===== Fade Carousel ===== */
  const fadeSlides = document.querySelectorAll('.fade-slide');
  const fadeDots = document.querySelectorAll('.fade-dot');
  if (fadeSlides.length) {
    let activeFade = 0;
    function goFade(idx) {
      fadeSlides[activeFade].classList.remove('active');
      if (fadeDots[activeFade]) fadeDots[activeFade].classList.remove('active');
      activeFade = ((idx % fadeSlides.length) + fadeSlides.length) % fadeSlides.length;
      fadeSlides[activeFade].classList.add('active');
      if (fadeDots[activeFade]) fadeDots[activeFade].classList.add('active');
    }
    fadeDots.forEach((dot, i) => dot.addEventListener('click', () => goFade(i)));
    setInterval(() => goFade(activeFade + 1), 5000);
  }

  /* ===== Marcas clone for infinite loop ===== */
  const marcasTrack = document.querySelector('.marcas-track');
  if (marcasTrack) {
    marcasTrack.innerHTML = marcasTrack.innerHTML + marcasTrack.innerHTML;
  }

});
