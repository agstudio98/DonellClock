/* ========================================
   DONELLCLOCK — soporte.js (Chatbot)
   ======================================== */

const BOT_RESPONSES = {
  saludo: {
    triggers: ['hola', 'buenos', 'buenas', 'buen dia', 'buen tarde', 'saludos', 'holi', 'hey'],
    response: 'Buen dia. Bienvenido al servicio de asistencia de DonellClock. Soy el asistente virtual de la casa. Puedo orientarle sobre nuestros servicios de reparacion, productos disponibles, metodos de envio y mas. Como puedo ayudarle hoy?'
  },
  horarios: {
    triggers: ['horario', 'atienden', 'abierto', 'cerrado', 'cuando abren', 'hora'],
    response: 'Nuestro local atiende de lunes a viernes de 9:00 a 18:30, y sabados de 9:00 a 13:00. El soporte virtual esta disponible las 24 horas para consultas generales. Para consultas urgentes sobre reparaciones en curso, le recomendamos llamar en horario de atencion.'
  },
  reparacion: {
    triggers: ['arreglo', 'arreglar', 'reparar', 'reparacion', 'servicio tecnico', 'componer', 'roto', 'falla', 'fallo', 'no funciona', 'no anda'],
    response: 'Contamos con los siguientes servicios de reparacion:\n\n• Arreglo de relojes antiguos: revision completa, limpieza y lubricacion de movimientos mecanicos.\n• Reparacion de productos electronicos: auriculares, mouses, accesorios para moviles.\n• Cambio de baterias y coronas.\n• Ajuste de brazaletes y correas.\n\nPara solicitar un presupuesto, puede acercarse al local o enviarnos el producto junto con una descripcion del problema. El tiempo estimado de reparacion varia entre 5 y 21 dias habiles segun la complejidad.'
  },
  envio: {
    triggers: ['envio', 'enviar', 'despacho', 'mandarlo', 'transporte', 'correo', 'sendbox', 'oca', 'llega', 'domicilio', 'entrega'],
    response: 'Trabajamos con dos servicios de logistica:\n\n• SendBox: entregas en 24 a 72 hs habiles en zonas urbanas.\n• OCA: cobertura provincial con seguimiento en linea.\n\nOperamos en las provincias de Buenos Aires, Tucuman, La Rioja, Mendoza y Cordoba. El costo de envio se calcula al momento de la compra segun destino y peso. Todos los envios cuentan con seguro y numero de seguimiento.'
  },
  provincias: {
    triggers: ['provincias', 'donde', 'llega', 'cordoba', 'mendoza', 'tucuman', 'buenos aires', 'la rioja', 'zona', 'cobertura'],
    response: 'Actualmente realizamos envios a las siguientes provincias:\n\n• Buenos Aires\n• Cordoba\n• Mendoza\n• Tucuman\n• La Rioja\n\nSi su destino se encuentra fuera de estas provincias, puede consultar disponibilidad especial comunicandose directamente con nosotros.'
  },
  productos: {
    triggers: ['producto', 'venden', 'tienen', 'catalogo', 'stock', 'que ofrecen', 'precio', 'cuanto', 'costo'],
    response: 'En DonellClock encontrara:\n\n• Relojes Antiguos: piezas de coleccion, algunas restauradas por nuestros maestros relojeros.\n• Relojes Digitales: modelos modernos de marcas reconocidas.\n• Accesorios: correas de cuero, fundas para moviles y mas.\n• Electronica: auriculares, mouses, pilas, cables.\n• Repuestos: coronas, juntas, kits de calibres reconocidos.\n\nPuede explorar el catalogo completo con precios en nuestra seccion Catalogo. Si desea informacion sobre un articulo especifico, indique el nombre o referencia.'
  },
  marcas: {
    triggers: ['marca', 'marcas', 'rolex', 'omega', 'seiko', 'casio', 'longines', 'bulova', 'tissot', 'hamilton'],
    response: 'Trabajamos con las siguientes marcas, entre otras:\n\nRelojes: Rolex, Omega, Seiko, Longines, Casio, Bulova, Tissot, Hamilton, Orient y Citizen.\n\nElectronica: Maxell, Sony, JBL y Philips.\n\nRepuestos: ETA, Miyota, Ronda y NH.\n\nNuestros tecnicos estan certificados para trabajar sobre movimientos de la mayoria de estas marcas.'
  },
  fundadores: {
    triggers: ['fundador', 'fundaron', 'historia', 'origen', 'quienes son', 'empresa', 'hermanos', 'gacigalupo', 'manuel', 'enrique'],
    response: 'DonellClock fue fundada en 1997 por los hermanos Manuel y Enrique Gacigalupo, con la vision de unir la tradicion relojera europea con el rigor de la alta relojeria contemporanea. Desde sus origenes como taller de reparacion, la empresa crecio hasta convertirse en una sucursal de referencia en relojeria de alta gama y electronica de calidad en Argentina.'
  },
  gracias: {
    triggers: ['gracias', 'muchas gracias', 'perfecto', 'genial', 'excelente', 'ok gracias', 'listo'],
    response: 'Fue un placer asistirle. Si necesita algo mas, aqui estamos. Que tenga un excelente dia.'
  },
  despedida: {
    triggers: ['adios', 'hasta luego', 'chau', 'bye', 'hasta pronto', 'nos vemos'],
    response: 'Hasta luego. En DonellClock siempre es un placer atenderle. No dude en contactarnos cuando lo necesite.'
  }
};

const DEFAULT_RESPONSE = 'Gracias por su consulta. No encontre una respuesta especifica para su pregunta. Le sugiero consultar sobre: horarios de atencion, servicios de reparacion, envios, catalogo de productos o marcas con las que trabajamos. Tambien puede comunicarse directamente al local para asistencia personalizada.';

const SUGGESTIONS = [
  'Servicios de reparacion',
  'Informacion de envios',
  'Productos disponibles',
  'Horarios de atencion',
  'Marcas que trabajan'
];

let conversationHistory = [];

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

  /* ===== Init suggestions ===== */
  const suggestionsContainer = document.getElementById('chatSuggestions');
  if (suggestionsContainer) {
    suggestionsContainer.innerHTML = SUGGESTIONS.map(s =>
      `<button class="suggestion-chip" onclick="sendSuggestion('${s}')">${s}</button>`
    ).join('');
  }

  /* ===== Topic buttons ===== */
  document.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = btn.dataset.topic;
      sendSuggestion(topic);
    });
  });

  /* ===== Send button ===== */
  const sendBtn = document.getElementById('sendBtn');
  const textarea = document.getElementById('chatInput');
  if (sendBtn && textarea) {
    sendBtn.addEventListener('click', () => sendMessage());
    textarea.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    });
  }

  /* ===== Clear ===== */
  const clearBtn = document.getElementById('clearChat');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      conversationHistory = [];
      const messages = document.getElementById('chatMessages');
      if (messages) {
        messages.innerHTML = '';
        addBotMessage('Chat reiniciado. Como puedo ayudarle?');
      }
    });
  }

  /* ===== Check for URL param ===== */
  const params = new URLSearchParams(window.location.search);
  const producto = params.get('producto');
  if (producto) {
    setTimeout(() => {
      addBotMessage('Bienvenido. Noto que proviene del catalogo consultando por: "' + producto + '". Podria contarme mas sobre lo que necesita? Compra, disponibilidad de stock, o alguna consulta tecnica?');
    }, 600);
  } else {
    setTimeout(() => {
      addBotMessage('Buen dia. Bienvenido al soporte de DonellClock. Soy el asistente virtual de la casa relojera. En que puedo orientarle hoy?');
    }, 600);
  }
});

function sendSuggestion(text) {
  const textarea = document.getElementById('chatInput');
  if (textarea) textarea.value = text;
  sendMessage();
}

function sendMessage() {
  const textarea = document.getElementById('chatInput');
  if (!textarea) return;
  const text = textarea.value.trim();
  if (!text) return;

  textarea.value = '';
  textarea.style.height = 'auto';

  addUserMessage(text);

  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.disabled = true;

  const typingId = showTyping();

  const delay = 900 + Math.random() * 600;
  setTimeout(() => {
    removeTyping(typingId);
    const response = getBotResponse(text);
    addBotMessage(response);
    if (sendBtn) sendBtn.disabled = false;
  }, delay);
}

function getBotResponse(text) {
  const lower = text.toLowerCase();
  for (const key in BOT_RESPONSES) {
    const entry = BOT_RESPONSES[key];
    if (entry.triggers.some(trigger => lower.includes(trigger))) {
      return entry.response;
    }
  }
  return DEFAULT_RESPONSE;
}

function addUserMessage(text) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const time = getTime();
  const div = document.createElement('div');
  div.className = 'message user';
  div.innerHTML = `
    <div class="msg-avatar">U</div>
    <div class="msg-content">
      <div class="msg-bubble">${escapeHTML(text)}</div>
      <div class="msg-time">${time}</div>
    </div>
  `;
  container.appendChild(div);
  scrollToBottom();
}

function addBotMessage(text) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const time = getTime();
  const div = document.createElement('div');
  div.className = 'message bot';
  const formattedText = formatBotText(text);
  div.innerHTML = `
    <div class="msg-avatar">&#9651;</div>
    <div class="msg-content">
      <div class="msg-bubble">${formattedText}</div>
      <div class="msg-time">${time}</div>
    </div>
  `;
  container.appendChild(div);
  scrollToBottom();
}

function formatBotText(text) {
  return escapeHTML(text)
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>')
    .replace(/• /g, '<br>&bull; ')
    .replace(/^<br>/, '');
}

function showTyping() {
  const container = document.getElementById('chatMessages');
  if (!container) return null;
  const id = 'typing-' + Date.now();
  const div = document.createElement('div');
  div.className = 'message bot';
  div.id = id;
  div.innerHTML = `
    <div class="msg-avatar">&#9651;</div>
    <div class="msg-content">
      <div class="typing-bubble">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  container.appendChild(div);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.remove();
}

function scrollToBottom() {
  const container = document.getElementById('chatMessages');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

function getTime() {
  return new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

function escapeHTML(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}
