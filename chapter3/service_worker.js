const sCacheName = 'hello-pwa-v1';

const aFileToCache = [
    './', './index.html', './manifest.json', './images/hello-pwa.png',
    './images/icons/favicon.ico'
]

self.addEventListener('install', pEvent => {
    console.log('service worker installed!');
    pEvent.waitUntil(
        caches.open(sCacheName)
        .then(pCache => {
            console.log('file saved on cache!');
            return pCache.addAll(aFileToCache);
        })
    );
});

self.addEventListener('activate', pEvent => {
    console.log('service worker activated!');
});

self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response => {
            if (!response) {
                console.log("data request from network", pEvent.request);
                return fetch(pEvent.request);
            }
            console.log('data request from cache', pEvent.request);
            return response;
        }).catch(err => console.log(err))
    );
});