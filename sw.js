/* Service worker mínimo de qué facha: permite instalar la web como app.
   No guarda copias: las páginas siempre se piden actualizadas a internet. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request));
});
