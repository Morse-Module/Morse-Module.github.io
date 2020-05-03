'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "71f6376c2266e89dc7933b662a594739",
"/": "71f6376c2266e89dc7933b662a594739",
"icons/Icon-512.png": "d1ed43a0b345ed8a694eaa8e29156616",
"icons/Icon-192.png": "b191279f64527e4f8dda63f695c5a0a0",
"favicon.png": "7fe1b6fe233981221d799bd0bb82a10b",
"main.dart.js": "ea5b4810ec31887d453a73594ed9c433",
"manifest.json": "6c79a9ff2c990fe4afe8ba3e1c2a88ea"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
