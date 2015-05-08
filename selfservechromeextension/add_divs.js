var myInterval = setInterval(function(){if(IntentMedia != undefined && IntentMedia.Config != undefined){addDivs(); clearInterval(myInterval);}}, 500);

var adArray = [];
var prev;

function addDivs() {

    if(!IntentMedia.Config.on_page)
        return;

    for(var i = 0; i<IntentMedia.Config.on_page.placements.length; i++) 
        adArray.push(IntentMedia.Config.on_page.placements[i].target.substring(1));

    if(adArray.length == 0)
        return;

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
    myPar.innerText = "Please click the highlighted DOM element you would like to insert the following div after: ";

    var mySpan = document.createElement("span");
    mySpan.id = "targetName";
    mySpan.innerText = adArray[length-1];
    myPar.appendChild(mySpan);

    myDiv.appendChild(myPar);

    var myButton = document.createElement("button");
    myButton.id = "myButton";
    myButton.innerText = "Close";
    myDiv.appendChild(myButton);
    
    myButton.addEventListener("click", removeMyDiv);
    
    if (document.body.addEventListener) {
        document.body.addEventListener('mouseover', handler, false);
    } else if (document.body.attachEvent) {
        document.body.attachEvent('mouseover', function(e) {
            return handler(e || window.event);
        });
    } else {
        document.body.onmouseover = handler;
    }
}

function stopFlash(e) {
    e.stopPropagation();
}

function insertDiv(e) {
    var imDiv = document.createElement("div");
    imDiv.id = adArray[adArray.length-1];
    imDiv.className = imDiv.id;
    e.target.appendChild(imDiv);
    adArray.pop();
    if(adArray.length == 0){
        e.target.className = prev.className.replace(/\bhighlight\b/, '');
        e.target.removeEventListener("click", insertDiv, false);
        e.stopPropagation();
        e.preventDefault();
        removeMyDiv();
        return;
    }
    document.getElementById("targetName").innerText = adArray[adArray.length-1];
    e.stopPropagation();
    e.preventDefault();
}

function handler(event) {
    if (event.target === document.body || (prev && prev === event.target)) {
        return;
    }
   
    if (prev) {
        prev.className = prev.className.replace(/\bhighlight\b/, '');
        prev.removeEventListener("click", insertDiv, false);
        prev = undefined;
    }
     
    if (event.target) {
        prev = event.target;
        prev.className += " highlight";
        prev.addEventListener("click", insertDiv, false);
    }
}

function removeMyDiv(e) { 
    document.body.removeEventListener('mouseover', handler, false); 
    document.body.removeChild(document.getElementById("addDivs"));
    if(e) {
        e.stopPropagation();
        e.preventDefault();
    window.removeEventListener("mousedown", stopFlash, true);
}
