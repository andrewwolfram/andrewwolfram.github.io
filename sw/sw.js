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
    clients.matchAll({type: 'window'}).then(function (clientList) {
        console.log('Attempt focus');
        clientList[0].focus();
    });
    return fetch(event.request);
});
self.addEventListener('notificationclick', function(event) { 
    console.log('Notification click event received', event);
    clients.openWindow('//cnn.com');
});
//var me = new Event('notificationclick');
//self.dispatchEvent(me);
