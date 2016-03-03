window.onload = function(){showMenu();};

function showMenu() {
    
    document.getElementById("inject_button").addEventListener("click", function(){injectScript();});
    document.getElementById("site_name").focus();
    window.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
            document.getElementById("inject_button").click();
        }
    });

    chrome.storage.sync.get('myForm', function(myObject) {
        if(myObject.myForm != undefined) {
            document.getElementById("site_name").value = myObject.myForm.site_name;
        }
    });

}

function injectScript() {
    
   var codeObject = {code: 
        '(function() {' + 
                       'var script = document.createElement("script");' + 
                       'script.src="//andrewwolfram.github.io/selfservechromeextension/content-script.js";' + 
                       'document.getElementsByTagName("head")[0].appendChild(script);' +
                    '}());' 
   };

    chrome.tabs.executeScript(codeObject);

    saveInputs();
    window.close();

}

function saveInputs() {

    var myForm = 
    {
        site_name: document.getElementById("site_name").value,
    }

    chrome.storage.sync.set({'myForm': myForm});

}

var callback = function(details) {details.url};
var filter = {urls: ["*://a*.intentmedia.net/*"]};
var opt_extraInfoSpec = ["requestBody"];

chrome.webRequest.onBeforeRequest.addListener(
    callback,
    filter,
    opt_extraInfoSpec);

chrome.tabs.executeScript(tabID, codeObject);
