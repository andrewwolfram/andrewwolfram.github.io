setTimeout(function(){
    IntentMedia.ExitUnitOpener.options.is_frequency_capped = function() { return false; };
    IntentMedia.ExitUnitOpener.is_cross_site_eu_frequency_capped = function() { return false; };
    IntentMedia.ExitUnitOpener.opener_is_deactivated = function() { return false; };
}, 1000);
