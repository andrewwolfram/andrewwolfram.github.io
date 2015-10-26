var loadIntentMedia = function(data) {

    var im_event = data[$im_event];
    if(im_event)) {
        if(IntentMedia && IntentMedia.trigger) {
            IntentMedia.trigger(im_event);
        }
    }
}

$gtmExport(loadIntentMedia);
