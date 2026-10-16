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

  photo.insertBefore(layer, photo.querySelector('.qs-home-veil'));
  photo.appendChild(phrase); /* a frase fica ancorada na tela, não na foto: sempre dentro do enquadramento */

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
    hots.forEach(function (h) { h.classList.remove('is-on', 'is-show'); });

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
    at(end, function () { hots.forEach(function (h) { h.classList.remove('is-show', 'is-on'); }); });
    at(end + 900, cycle);
  }
  cycle();
})();
