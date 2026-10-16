/* Capa animada — NR 12 Máquina manipuladora a vácuo.
   Um ciclo de ~19 s, em loop, em duas partes:
   1) "Do risco à segurança": a foto abre com um tom de alerta (vermelho) que vira verde, e a frase do
      slide 30 do PDF aparece palavra por palavra;
   2) "Conheça a máquina": pontos verdes pulsam nas peças e um nome aparece de cada vez
      (nomes como no PDF). Também dá para passar o mouse / tocar em cada ponto.
   A camada fica exatamente sobre a foto (assets/fotos/capa.png, 1672×941), no mesmo enquadramento do
   CSS da foto (object-fit: cover; object-position: right center). Posições = % da foto.
   Para desfazer: remova o <link> do capa-animada.css e este <script> do sessao-aprender.html. */
(function () {
  var IW = 1672, IH = 941;
  var home = document.getElementById('home');
  var photo = document.querySelector('.qs-home-photo');
  var img = document.getElementById('homePhotoImg');
  if (!photo || !img || photo.querySelector('.qs-fx')) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* peças: [x%, y%, nome (como no PDF), lado do rótulo] */
  var PARTS = [
    [58.3, 46.0, 'Ventosa', 'down'],
    [61.7, 37.0, 'Alça de comando', 'right'],
    [57.4, 17.0, 'Tubo de levantamento', 'left'],
    [60.5, 55.5, 'Sacaria', 'right'],
    [88.0, 63.0, 'Proteção', 'left']
  ];
  var PHRASE = 'Sua vida vale mais do que qualquer atalho.';

  var layer = document.createElement('div');
  layer.className = 'qs-fx';
  layer.setAttribute('aria-hidden', 'false');

  var tint = document.createElement('div');
  tint.className = 'qs-tint';
  layer.appendChild(tint);

  var phrase = document.createElement('div');
  phrase.className = 'qs-phrase';
  PHRASE.split(' ').forEach(function (w, i, a) {
    var s = document.createElement('span');
    s.textContent = w;
    s.style.setProperty('--i', i);
    if (i === a.length - 1) s.className = 'is-key';
    phrase.appendChild(s);
    phrase.appendChild(document.createTextNode(' '));
  });
  phrase.setAttribute("aria-hidden","true");

  var hots = PARTS.map(function (p) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'qs-hot qs-hot-' + p[3];
    b.style.left = p[0] + '%';
    b.style.top = p[1] + '%';
    b.setAttribute('aria-label', p[2]);
    b.innerHTML = '<i class="qs-hot-dot"></i><i class="qs-hot-ring"></i><span class="qs-hot-label">' + p[2] + '</span>';
    layer.appendChild(b);
    return b;
  });

  /* balão de fala preso à cabeça da personagem (posição em % da foto, via CSS) */
  var bubble = document.createElement('div');
  bubble.className = 'qs-bubble';
  bubble.setAttribute('aria-hidden', 'true');
  var bt = document.createElement('span');
  bt.className = 'qs-bubble-t';
  bubble.appendChild(bt);
  layer.appendChild(bubble);
  function say(text) {
    bt.innerHTML = '';
    text.split(' ').forEach(function (w, i) {
      var s = document.createElement('span');
      s.textContent = w;
      s.style.setProperty('--i', i);
      bt.appendChild(s);
      bt.appendChild(document.createTextNode(' '));
    });
    bubble.classList.remove('is-on');
    void bubble.offsetWidth;
    bubble.classList.add('is-on');
  }
  function hush() { bubble.classList.remove('is-on'); }

  /* EPIs no corpo da personagem: [x%, y%, nome, lado do rótulo] (posição em % da foto) */
  var EPIS = [
    [81.0, 20.5, 'Capacete', 'left'],
    [81.4, 26.7, 'Óculos de segurança', 'left'],
    [91.0, 31.5, 'Luvas', 'left'],
    [82.2, 45.0, 'Colete refletivo', 'left'],
    [80.6, 91.5, 'Botina', 'left']
  ];
  var epis = EPIS.map(function (p) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'qs-hot qs-hot-epi qs-hot-' + p[3];
    b.style.left = p[0] + '%';
    b.style.top = p[1] + '%';
    b.setAttribute('aria-label', p[2]);
    b.innerHTML = '<i class="qs-hot-dot"></i><i class="qs-hot-ring"></i><span class="qs-hot-label">✓ ' + p[2] + '</span>';
    layer.appendChild(b);
    return b;
  });

  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));
  /* frase 'Sua vida vale mais...' removida da capa a pedido: o elemento não é mais inserido na tela */

  function place() {
    var w = photo.clientWidth, h = photo.clientHeight;
    if (!w || !h) return;
    var iw = img.naturalWidth || IW, ih = img.naturalHeight || IH;
    var s = Math.max(w / iw, h / ih);
    var rw = iw * s, rh = ih * s;
    layer.style.width = rw + 'px';
    layer.style.height = rh + 'px';
    layer.style.left = (w - rw) + 'px';
    layer.style.top = ((h - rh) / 2) + 'px';
  }
  place();
  img.addEventListener('load', place);
  window.addEventListener('resize', place);
  if (window.ResizeObserver) new ResizeObserver(place).observe(photo);

  if (reduce) { /* sem movimento: só os pontos e os nomes ao passar o mouse */
    hots.forEach(function (h) { h.classList.add('is-on'); });
    epis.forEach(function (h) { h.classList.add('is-on'); });
    say('Olá! Bem-vindo(a) ao treinamento!');
    return;
  }

  /* ── ciclo ── */
  var timers = [];
  function at(ms, fn) { timers.push(setTimeout(fn, ms)); }
  function clearAll() { timers.forEach(clearTimeout); timers = []; }
  function visible() { return !home || !home.hidden; }

  function cycle() {
    clearAll();
    if (!visible()) { at(1200, cycle); return; }
    tint.className = 'qs-tint is-risk';          /* alerta */
    phrase.classList.remove('is-on');
    hush();
    hots.forEach(function (h) { h.classList.remove('is-on', 'is-show'); });
    epis.forEach(function (h) { h.classList.remove('is-on', 'is-show'); });

    at(500,   function () { say('Olá! Bem-vindo(a) ao treinamento!'); });
    at(4300,  hush);
    at(5300,  function () { say('Aqui você aprende a operar a manipuladora com segurança.'); });
    at(9700,  hush);
    at(10300, function () { say('Toque nos pontos verdes para conhecer a máquina.'); });
    at(14300, hush);

    at(900,  function () { tint.className = 'qs-tint is-safe'; phrase.classList.add('is-on'); });
    at(4300, function () { tint.className = 'qs-tint'; phrase.classList.remove('is-on'); });

    at(5000, function () { hots.forEach(function (h, i) { setTimeout(function () { h.classList.add('is-on'); }, i * 150); }); });
    hots.forEach(function (h, i) {
      at(5800 + i * 2300, function () {
        hots.forEach(function (o) { o.classList.remove('is-show'); });
        h.classList.add('is-show');
      });
    });
    var end = 5800 + hots.length * 2300;
    at(end, function () { hush(); hots.forEach(function (h) { h.classList.remove('is-show', 'is-on'); }); });

    /* 3) EPIs: um a um no corpo dela, com um visto (✓) */
    var e0 = end + 700;
    at(e0, function () { say('E não esqueça dos EPIs!'); epis.forEach(function (h, i) { setTimeout(function () { h.classList.add('is-on'); }, i * 150); }); });
    epis.forEach(function (h, i) {
      at(e0 + 1700 + i * 1500, function () {
        epis.forEach(function (o) { o.classList.remove('is-show'); });
        h.classList.add('is-show');
      });
    });
    var e1 = e0 + 1700 + epis.length * 1500;
    at(e1 - 1500, function () { say('Vamos começar?'); });
    at(e1 + 700, function () { hush(); epis.forEach(function (h) { h.classList.remove('is-show', 'is-on'); }); });
    at(e1 + 1600, cycle);
  }
  cycle();
})();
