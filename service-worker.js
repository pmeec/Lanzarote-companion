const CACHE='lanzarote-v2-luxe-real';
const ASSETS=['./','index.html','manifest.json','service-worker.js','sea-lanzarote.svg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
