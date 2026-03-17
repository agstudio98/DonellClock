/* ========================================
   DONELLCLOCK — catalogo.js
   ======================================== */

const PRODUCTS = [
  {
    id: 1,
    name: 'Longines Heritage 1832',
    category: 'Relojes Antiguos',
    categoryKey: 'antiguos',
    price: '$4.200',
    desc: 'Pieza de coleccion con cuerda manual, caja de acero inoxidable y esfera de porcelana blanca. Ejemplo de refinamiento suizo.',
    specs: { Origen: 'Suiza', Movimiento: 'Cuerda Manual', Material: 'Acero Inox.', Garantia: '2 anos' },
    badge: 'Coleccion',
    img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80'
  },
  {
    id: 2,
    name: 'Casio G-Shock Pro',
    category: 'Relojes Digitales',
    categoryKey: 'digitales',
    price: '$380',
    desc: 'Resistencia extrema con tecnologia solar y conectividad Bluetooth. Ideal para uso profesional y aventura.',
    specs: { Resistencia: '200m', Energia: 'Solar', Conectividad: 'Bluetooth', Bateria: '7 años' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80'
  },
  {
    id: 3,
    name: 'Auriculares Vintage Bronze',
    category: 'Productos Electronicos',
    categoryKey: 'electronicos',
    price: '$220',
    desc: 'Auriculares over-ear con acabado bronce, driver de 40mm y cancelacion activa de ruido. Estetica retro con sonido moderno.',
    specs: { Driver: '40mm', ANC: 'Si', Bateria: '30h', Conexion: 'BT 5.2' },
    badge: 'Nuevo',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80'
  },
  {
    id: 4,
    name: 'Correa de Cuero Genuino',
    category: 'Accesorios',
    categoryKey: 'accesorios',
    price: '$85',
    desc: 'Correa artesanal de cuero vacuno curtido al vegetal. Compatible con la mayoria de relojes de 20mm y 22mm.',
    specs: { Material: 'Cuero Vegetal', Ancho: '20 / 22mm', Color: 'Marron Oscuro', Cierre: 'Hebilla acero' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?w=600&q=80'
  },
  {
    id: 5,
    name: 'Omega Constellation 1960',
    category: 'Relojes Antiguos',
    categoryKey: 'antiguos',
    price: '$8.900',
    desc: 'Reloj de precision historico, restaurado en nuestro taller. Movimiento cal.551 original, esfera pie de poule caracteristica.',
    specs: { Año: '1960', Cal: 'Omega 551', Restaurado: 'Si', Cert: 'Autenticidad' },
    badge: 'Restaurado',
    img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80'
  },
  {
    id: 6,
    name: 'Mouse Retro Ergonomico',
    category: 'Productos Electronicos',
    categoryKey: 'electronicos',
    price: '$95',
    desc: 'Mouse inalambrico con diseno clasico de madera y cuero. Ergonomico, 3200 DPI ajustable y receptor USB-A.',
    specs: { DPI: '800-3200', Conexion: 'Inalambrico', Material: 'Madera/Cuero', Bateria: 'AA x2' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80'
  },
  {
    id: 7,
    name: 'Repuesto Corona Rolex Cal.3135',
    category: 'Repuestos',
    categoryKey: 'repuestos',
    price: '$120',
    desc: 'Corona original de recambio para calibre Rolex 3135. Acero 316L con sello triple de hermeticidad.',
    specs: { Compatibilidad: 'Cal. 3135', Material: 'Acero 316L', Sello: 'Triple', Condicion: 'Nuevo' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80'
  },
  {
    id: 8,
    name: 'Seiko Presage Automatico',
    category: 'Relojes Digitales',
    categoryKey: 'digitales',
    price: '$1.150',
    desc: 'Movimiento automatico 4R36 con reserva de marcha de 41h. Esfera esmaltada artesanal con acabado sunray.',
    specs: { Movimiento: 'Automatico 4R36', Reserva: '41 horas', Cristal: 'Zafiro', Resistencia: '50m' },
    badge: 'Destacado',
    img: 'https://images.unsplash.com/photo-1619134778706-7015533a6150?w=600&q=80'
  },
  {
    id: 9,
    name: 'Pilas Maxell Pro Set x10',
    category: 'Productos Electronicos',
    categoryKey: 'electronicos',
    price: '$18',
    desc: 'Set de 10 pilas de litio Maxell SR626SW de alta duracion. Compatibles con la mayoria de movimientos de cuarzo.',
    specs: { Tipo: 'SR626SW / 377', Marca: 'Maxell', Cantidad: 'x10', Voltaje: '1.55V' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1609695001919-81b7fd3b1c0c?w=600&q=80'
  },
  {
    id: 10,
    name: 'Funda iPhone Cuero Clasico',
    category: 'Accesorios',
    categoryKey: 'accesorios',
    price: '$65',
    desc: 'Funda de cuero genuino, costura manual y cierre magnetico. Disponible para iPhone 13, 14 y 15.',
    specs: { Material: 'Cuero Genuino', Cierre: 'Magnetico', Compatibilidad: 'iPhone 13-15', Color: 'Tan / Negro' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80'
  },
  {
    id: 11,
    name: 'Guarnicion Completa ETA 2824',
    category: 'Repuestos',
    categoryKey: 'repuestos',
    price: '$200',
    desc: 'Kit completo de juntas y guarnicion para calibre ETA 2824-2. Ideal para revision y mantenimiento preventivo.',
    specs: { Calibre: 'ETA 2824-2', Piezas: '18 piezas', Material: 'Nitrilo/Viton', Uso: 'Revision completa' },
    badge: null,
    img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80'
  },
  {
    id: 12,
    name: 'Bulova Accutron Spaceview',
    category: 'Relojes Antiguos',
    categoryKey: 'antiguos',
    price: '$3.600',
    desc: 'Icono de la era espacial. Movimiento de diapason electronico, esfera abierta que exhibe el mecanismo.',
    specs: { Año: '1965', Movimiento: 'Accutron 214', Esfera: 'Spaceview', Estado: 'Coleccion' },
    badge: 'Unico',
    img: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=600&q=80'
  }
];

let filteredProducts = [...PRODUCTS];
let currentFilter = 'todos';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Mobile Menu ===== */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileClose = document.querySelector('.mobile-close');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; });
  }

  /* ===== Build Grid ===== */
  renderProducts();

  /* ===== Filter Chips ===== */
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      applyFilters();
    });
  });

  /* ===== Search ===== */
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      currentSearch = searchInput.value.toLowerCase().trim();
      applyFilters();
    });
  }

  /* ===== Sort ===== */
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applyFilters();
    });
  }

  /* ===== Modal Close ===== */
  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
});

function applyFilters() {
  const sortSelect = document.getElementById('sortSelect');
  const sortVal = sortSelect ? sortSelect.value : 'default';

  filteredProducts = PRODUCTS.filter(p => {
    const matchCat = currentFilter === 'todos' || p.categoryKey === currentFilter;
    const matchSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch) || p.category.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });

  if (sortVal === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortVal === 'name-desc') {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortVal === 'price-asc') {
    filteredProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sortVal === 'price-desc') {
    filteredProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  renderProducts();
}

function parsePrice(str) {
  return parseFloat(str.replace(/[^\d.]/g, '')) || 0;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const resultsInfo = document.getElementById('resultsInfo');
  const emptyState = document.getElementById('emptyState');
  if (!grid) return;

  if (filteredProducts.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.add('visible');
    if (resultsInfo) resultsInfo.textContent = 'Sin resultados';
    return;
  }

  if (emptyState) emptyState.classList.remove('visible');
  if (resultsInfo) resultsInfo.textContent = filteredProducts.length + ' producto' + (filteredProducts.length !== 1 ? 's' : '') + ' encontrado' + (filteredProducts.length !== 1 ? 's' : '');

  grid.innerHTML = filteredProducts.map(p => `
    <article class="product-card" data-id="${p.id}" onclick="openModal(${p.id})">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-overlay">
          <button class="product-overlay-btn">Ver Detalle</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <p class="product-name">${p.name}</p>
        <p class="product-desc-short">${p.desc.substring(0, 70)}...</p>
        <div class="product-footer">
          <span class="product-price">${p.price}</span>
          <button class="product-quick-btn" title="Ver detalle" onclick="event.stopPropagation(); openModal(${p.id})">+</button>
        </div>
      </div>
    </article>
  `).join('');
}

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  const modal = document.getElementById('productModal');
  document.getElementById('modalImg').src = p.img;
  document.getElementById('modalImg').alt = p.name;
  document.getElementById('modalCategory').textContent = p.category;
  document.getElementById('modalTitle').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = p.price;

  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = Object.entries(p.specs).map(([k, v]) => `
    <div class="spec-row">
      <span class="spec-key">${k}</span>
      <span class="spec-val">${v}</span>
    </div>
  `).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function requestProduct() {
  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalTitle')?.textContent || '';
  modal.classList.remove('open');
  document.body.style.overflow = '';
  window.location.href = 'soporte.html?producto=' + encodeURIComponent(title);
}
