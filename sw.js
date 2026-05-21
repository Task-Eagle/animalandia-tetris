const CACHE_NAME = 'cosmic-tetris-v2';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Deploy and cache essential tactical assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Intercept network requests for instant offline execution
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
