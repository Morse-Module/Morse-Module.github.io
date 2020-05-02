'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "71f6376c2266e89dc7933b662a594739",
"/": "71f6376c2266e89dc7933b662a594739",
"icons/Icon-512.png": "e254ad8d9ee79a446bcaa877ec0e8887",
"icons/Icon-192.png": "464ba02c4d23a0263bac073cac990eae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/LICENSE": "88dcebb25ae7fb5cdb999b354b7160ed",
"favicon.png": "a420010dca89e0b26a8647cca586362b",
"main.dart.js": "7ab3f7f6c34b7618ca8bf5de3ad850ac",
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
