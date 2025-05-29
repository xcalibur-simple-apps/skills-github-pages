const CACHE_NAME = 'flight-entry-cache-v1';
const urlsToCache = ['index.html', 'manifest.json', 'icon.png'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
