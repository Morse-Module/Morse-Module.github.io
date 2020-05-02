'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "71f6376c2266e89dc7933b662a594739",
"/": "71f6376c2266e89dc7933b662a594739",
"icons/Icon-512.png": "549ccc0c025e73fb6ea261143befe19e",
"icons/Icon-192.png": "db5c211cbdeb1928fc32a7b90dfcea45",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-300.ttf": "f7c1c836224816934b54e3c6e4a841b3",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-500.ttf": "fcfcf5eecd6feae5cf4ec2919e3694e9",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-300i.ttf": "25eef2fe8752c89a91c94549aa5cd82c",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-900.ttf": "e902693142338ebe8413dcb61da7589c",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-700i.ttf": "5588600c96411f9ccd567988bd8d1350",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-200.ttf": "d20f26275f319c52e171552c4d6d2f62",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-700.ttf": "4aecc831678e8d5a1d859e219f2d6746",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-600.ttf": "5f4f2ffc1f9adbb434bb780993add331",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-500i.ttf": "d1f5a6129bc4e9dd85d44601d55189d7",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-900i.ttf": "4528d26e0edfdf67e7bcdcff998f6f0c",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-400i.ttf": "28e5f7734d2a99ac8d6681c814bef6df",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-200i.ttf": "ed0331a5596b097038adf58611b1d590",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-400.ttf": "733c5f145b1b64e74e3925a527926f1a",
"assets/assets/fonts/googleFonts/Source-Code-Pro/Source-Code-Pro-600i.ttf": "4eae972e9b603c2142090ce01b6cae2b",
"assets/FontManifest.json": "234a9112cdd0640b90abedd2799be420",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/AssetManifest.json": "5011bbe40bffbfe71248dcbe82349466",
"assets/LICENSE": "2f5aa59e312827471ae6fea9860d7995",
"favicon.png": "5a634296cb9abfafa1170468e61046d8",
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
