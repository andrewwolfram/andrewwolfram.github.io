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
    try {
        console.log('Clients!', Clients);
    } catch (e) {
        // nothing
    }
    try {
        console.log('clients!', clients);
    } catch (e) {
        // nothing
    }
    try {
        console.log('Client!', Client);
    } catch (e) {
        // nothing
    }
    try {
        console.log('client!', client);
    } catch (e) {
        // nothing
    }
    try {
        console.log('WindowClient!', WindowClient);
    } catch (e) {
        // nothing
    }
    console.log('Attempt window open');
    clients.openWindow('//cnn.com');
});
