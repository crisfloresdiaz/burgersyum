const app = new Framework7({
  el: '#app',
  name: 'Mi App',
  id: 'com.miempresa.miapp',
  theme: 'auto',
  routes: [
    { path: '/', url: './pages/home.html' },
    { path: '/ejemplo/', url: './pages/ejemplo.html' },
    { path: '/categorias/', url: './pages/categorias.html' },
  ],
});

$$(document).on('page:init', '.page[data-name="ejemplo"]', function () {
  const button = document.getElementById('demo-alert');
  if (button) button.addEventListener('click', () => app.dialog.alert('Framework7 está funcionando correctamente.', 'Página ejemplo'));
});

// Recommend Item swiper (home page)
$$(document).on('page:init', '.page[data-name="home"]', function () {
  app.swiper.create('.recommend-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode: true,
  });
});

// "+" button feedback on home and categories pages
$$(document).on('click', '.add-to-order', function (e) {
  e.preventDefault();
  const card = this.closest('[data-item]');
  const name = card ? card.dataset.item : 'Item';
  app.toast.create({
    text: name + ' agregado',
    position: 'bottom',
    closeTimeout: 1200,
  }).open();
});
