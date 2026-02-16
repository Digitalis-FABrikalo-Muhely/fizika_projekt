const CACHE_NAME = 'digifab-v2.16';
// Ide sorold fel az összes HTML fájlodat, ami a mappában van!
const ASSETS = [
  './',
  './index.html',
  './icon.png',
  './manifest.json'
];

// Telepítéskor elmentjük a fájlokat a gyorsítótárba
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Offline módban a gyorsítótárból szolgáljuk ki a fájlokat
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});