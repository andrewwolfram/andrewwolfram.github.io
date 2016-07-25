console.log('Started', self);
self.addEventListener('install', function(event) { 
    self.skipWaiting();
    console.log('Installed', event);
});
self.addEventListener('activate', function(event) { 
    console.log('Activated', event);
});
self.addEventListener('fetch', function(event) {
    console.log('Fetch event received', event);
});
self.addEventListener('notificationclick', function(event) { 
    console.log('Notification click event received', event);
    clients.openWindow('//cnn.com');
});
var me = new Event('notificationclick');
self.dispatchEvent(me);
