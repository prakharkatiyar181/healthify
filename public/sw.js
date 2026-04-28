self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
});

self.addEventListener('push', (event) => {
  let data = { title: 'Healthify', content: 'New notification', icon: '/favicon.ico' };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.content = event.data.text();
    }
  }

  const options = {
    body: data.content,
    icon: data.icon,
    vibrate: [100, 50, 100],
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
