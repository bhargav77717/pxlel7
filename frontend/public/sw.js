const CACHE_NAME = 'lot7-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache essential files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request)
          .then((fetchResponse) => {
            // Don't cache non-GET requests or external resources
            if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
              return fetchResponse;
            }

            // Clone the response and cache it
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          })
          .catch(() => {
            // Fallback for offline - could return a custom offline page
            console.log('Service Worker: Fetch failed, serving offline fallback');
          });
      })
  );
});