var code;
var filter = {urls: ["*://*.intentmedia.net/*"]};
var opt_extraInfoSpec = ["requestBody"];
var callback = function(details) {
    var reqType = details.url.match(/.*javascripts\/v1\/(.*?)$/);
    if(reqType && reqType[1] == 'intent_media_core.js') { 
        code = {'code': '' +
        '(function() {' + 
                       'var script = document.createElement("script");' + 
                       'script.src="//andrewwolfram.github.io/integration_validator/content-script.js";' + 
                       'document.getElementsByTagName("head")[0].appendChild(script);' +
                    '}());' 
        };
        chrome.tabs.executeScript(details.tabId, code);
    }
}

chrome.webRequest.onBeforeRequest.addListener(
    callback,
    filter,
    opt_extraInfoSpec);
