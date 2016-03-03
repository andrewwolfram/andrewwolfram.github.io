var code;
var filter = {urls: ["*://*.intentmedia.net/*"]};
var opt_extraInfoSpec = ["requestBody"];
var callback = function(details) {
    var im_params = queryParams(details.url);
    code = {code: "console.info('" + details.url + "');" + "window.im_params=" + JSON.stringify(im_params) + ";" + "console.info(JSON.stringify(window.im_params,null,'\t'));"};
    //code = {code: 'console.info("' + details.url +'");'};
    chrome.tabs.executeScript(details.tabId, code);
    
}

chrome.webRequest.onBeforeRequest.addListener(
    callback,
    filter,
    opt_extraInfoSpec);

function queryParams(url) {
    var data = {};
    var params = url.split(/\?|&/);
    for(var i = 1; i < params.length; i++) {
       var pair = params[i].split('=');
       data[pair[0]] = pair[1];
    } 

    return data;
}
