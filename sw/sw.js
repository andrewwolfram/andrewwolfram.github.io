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
    //console.log('Attempting to open window');
    console.log('clients!', clients);
    console.log('client!', client);
    console.log('WindowClient!', WindowClient);
        //Clients.openWindow('//www.cnn.com');
});
