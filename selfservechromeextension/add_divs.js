var myInterval = setInterval(function(){if(typeof IntentMedia !== 'undefined' && typeof IntentMedia.Config !==  'undefined'){addDivs(); clearInterval(myInterval);}}, 500);

var adArray = [];
var im_op_targets;
var prev;

var awInt;
var imDiv;

function addDivs() {

    if(!IntentMedia.Config.on_page)
        return;

    for(var i = 0; i<IntentMedia.Config.on_page.placements.length; i++) {
            adArray.push(IntentMedia.Config.on_page.placements[i]);
            console.log("On-page ad placement detected: " + adArray[i].target.substring(1));
    }
    im_op_targets = adArray.slice(0);

    if(IntentMedia.Config.exit_unit) {
        if(IntentMedia.Config.exit_unit.source.indexOf('home') != -1) {
            if(IntentMedia.Config.exit_unit.remote_polling) {
                window.addEventListener("click", function(){IntentMedia.trigger("fill_exit_unit");});
            }
            else {
                IntentMedia.Config.exit_unit.opens_remote = false;
                window.addEventListener("click", function(){IntentMedia.trigger("open_exit_unit");});
            }
        } else {
            IntentMedia.Config.exit_unit.opens_remote = false;
        }
    }

    if(adArray.length == 0)
        return;

    //Drag and drop functionality
    window.addEventListener('dragstart', function(e){e.dataTransfer.setData('text', e.target.id)});
    window.addEventListener('dragover', function(e){
        e.preventDefault();
    }, true);
    window.addEventListener('dragenter', function(e){
        e.preventDefault();
        e.target.className += " highlightmylife";
    }, true);
    window.addEventListener('dragleave', function(e){
        e.preventDefault();
        e.target.className = e.target.className.replace(/\bhighlightmylife\b/, '');
    }, true);
    window.addEventListener('drop', function(e) {
        e.preventDefault(); 
        var data = document.getElementById(e.dataTransfer.getData('text')); 
        e.target.parentElement.insertBefore(data, e.target);
        e.target.className = e.target.className.replace(/\bhighlightmylife\b/, '');
    });

    window.addEventListener("mousedown", stopFlash, true);

    var myCSS = document.createElement("link");
    myCSS.href = '//andrewwolfram.github.io/selfservechromeextension/on_page.css';
    myCSS.rel = 'stylesheet';
    myCSS.type = 'text/css';
    document.head.appendChild(myCSS);

    var myDiv = document.createElement("div");
    myDiv.id = "addDivs";
    document.body.insertBefore(myDiv, document.body.children[0]);

    var myPar = document.createElement("p");
    myPar.id = "myText";
    myPar.innerText = "Please click the highlighted DOM element at which you would like to insert the following div: ";

    var mySpan = document.createElement("span");
    mySpan.id = "targetName";
    mySpan.innerText = adArray[adArray.length-1].target.substring(1);
    myPar.appendChild(mySpan);

    myDiv.appendChild(myPar);

    var myButton = document.createElement("button");
    myButton.id = "closeButton";
    myButton.innerText = "Close";
    myPar.appendChild(myButton);
    
    myButton.addEventListener("click", removeMyDiv);
    
    if (window.addEventListener) {
        window.addEventListener('mouseover', handler, true);
    } else if (window.attachEvent) {
        window.attachEvent('mouseover', function(e) {
            return handler(e || window.event);
        });
    } else {
        window.onmouseover = handler;
    }
}

function stopFlash(e) {
    e.stopPropagation();
}

function insertDiv(e) {
    imDiv = document.createElement("div");
    imDiv.id = adArray[adArray.length-1].target.substring(1);
    imDiv.className = imDiv.id;
    imDiv.draggable = "true";
    imDiv.addEventListener("dblclick", openDesigner);
    if(adArray[adArray.length-1].type.indexOf("rail") != -1) {
        e.target.appendChild(imDiv);
    } else {
        e.target.parentElement.insertBefore(imDiv, e.target);
    }
    adArray.pop();
    awInt = setInterval(function(){
        if(imDiv.firstElementChild) {
            clearInterval(awInt);
            //imDiv.firstElementChild.className = imDiv.firstElementChild.className.replace(/\bIM\_single\b/, 'IM_multi');
        }
    });
    if(adArray.length == 0){
        e.target.className = prev.className.replace(/\bhighlightmylife\b/, '');
        e.target.removeEventListener("click", insertDiv, false);
        e.stopPropagation();
        e.preventDefault();
        removeMyDiv();
        IntentMedia.trigger("onpage_ads_redraw");
        return;
    }
    document.getElementById("targetName").innerText = adArray[adArray.length-1].target.substring(1);
    e.stopPropagation();
    e.preventDefault();
}

function handler(event) {
    if (event.target === document.body || (prev && prev === event.target)) {
        return;
    }
   
    if (prev) {
        prev.className = prev.className.replace(/\bhighlightmylife\b/, '');
        prev.removeEventListener("click", insertDiv, false);
        prev = undefined;
    }

    if (event.target.id == "addDivs" || event.target.id == "targetName" || event.target.id == "closeButton" || event.target.id == "myText") {
        return;
    }
     
    if (event.target) {
        prev = event.target;
        prev.className += " highlightmylife";
        prev.addEventListener("click", insertDiv, false);
    }
}

function removeMyDiv(e) { 
    window.removeEventListener('mouseover', handler, true); 
    document.body.removeChild(document.getElementById("addDivs"));
    if(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    window.removeEventListener("mousedown", stopFlash, true);
}
