self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('barochak-v7-final').then(cache => {
      return cache.addAll([
        './',
        'index.html',
        'manifest.json',
        'products.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
