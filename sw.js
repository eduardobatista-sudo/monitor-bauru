// sw.js
self.addEventListener('message', (event) => {
    if (event.data.type === 'DISPARAR_ALERTA') {
        const options = {
            body: event.data.msg,
            icon: 'icon.png',
            vibrate: [200, 100, 200, 100, 200, 100, 400], // Vibração forte
            tag: 'alerta-urgente',
            renotify: true,
            data: { dateOfArrival: Date.now() }
        };

        self.registration.showNotification(event.data.titulo, options);
    }
});

// Isso mantém o service worker vivo
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
