var freqInterval = setInterval(function(){
    if(IntentMedia != undefined && IntentMedia.ExitUnitOpener != undefined && IntentMedia.ExitUnitOpener.options != undefined) {
    IntentMedia.ExitUnitOpener.options.is_frequency_capped = function() { return false; };
    IntentMedia.ExitUnitOpener.is_cross_site_eu_frequency_capped = function() { return false; };
    IntentMedia.ExitUnitOpener.opener_is_deactivated = function() { return false; };
    clearInterval(freqInterval);
}}, 500);
