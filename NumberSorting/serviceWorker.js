const cacheName= "static_v2";
const files = [
    "css/style.css",
    "js/app.js"
]

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(files);
        })
    );
});


self.addEventListener('install', function(event)  {
    console.log("[Service Worker] installed", event);
});

self.addEventListener('activate', function(event)  {
    console.log("[Service Worker] activated", event);
});

self.addEventListener('fetch', event => {
    event.respondWith(async function() {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;
        return fetch(event.request);
    }());
});