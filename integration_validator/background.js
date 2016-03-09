var code;
var log = [];

var filter = {urls: ["*://*.intentmedia.net/*"]};
var opt_extraInfoSpec = ["requestBody"];
var callback = function(details) {
    var im_params = queryParams(unescape(details.url));
    code = {code: "console.info('" + details.url + "');"};
    if(Object.keys(im_params).length > 0) {
        code.code += "window.im_params=" + JSON.stringify(im_params) + ";" + "console.info(JSON.stringify(window.im_params,null,'\t'));";
        //code = {code: 'console.info("' + details.url +'");'};
    }
    chrome.tabs.executeScript(details.tabId, code);

    var requests = ['config', 'user_classification', 'impressions', 'conversions'];
    var reqType = details.url.match(/.*adServer\/(.*?)\?/);
    if(reqType == 'config') log = [];

    if(reqType && reqType.length > 1) {
        reqType = reqType[1];
        if(requests.includes(reqType)) {
            validate(reqType, im_params);
            if(log.length != 0) {
                code = {code: "window.imDebugLog=" + JSON.stringify(log) + ";"};
                code.code += "console.groupCollapsed('Intent Media');";
                for(var i = 0; i < log.length; i++) {
                    code.code += "console.groupCollapsed('[" + log[i].type + "] " + log[i].name + "');";
                    code.code += "console.log('Your value: " + log[i].value + "');";
                    code.code += "console.log('Expected: " + log[i].msg + "');";
                    code.code += "console.groupEnd();";
                }
                code.code += "console.groupEnd();";
                chrome.tabs.executeScript(details.tabId, code);
            }
        }
    }
}

chrome.webRequest.onCompleted.addListener(
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

function pushLog(item) {
    var add = true;
    log.forEach(function(a) {
        if(a.name == item.name && a.type == item.type) add = false;
    });
    if(add) log.push(item);
} 
