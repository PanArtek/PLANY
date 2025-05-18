// Service Worker for PLANY
const CACHE_NAME = 'plany-cache-v1';

// Assets to cache
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/images/logo.svg',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/icon-maskable.png',
  '/images/og-image.jpg',
];

// Install event - Cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - Serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip browser-sync and socket.io requests
  if (event.request.url.includes('browser-sync') || 
      event.request.url.includes('socket.io')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Fallback for image requests
            if (event.request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
              return caches.match('/images/placeholder.png');
            }
            
            // Fallback for HTML requests - serve the offline page
            if (event.request.headers.get('Accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            
            return new Response('Network error', { status: 408, headers: { 'Content-Type': 'text/plain' } });
          });
      })
  );
});