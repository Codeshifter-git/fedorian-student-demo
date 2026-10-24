/* Fedorian Student Planner — interactive demo service worker.
   Installability only: every request passes straight through to the
   network and nothing is ever cached, so the demo can never serve a
   stale copy of the page. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
