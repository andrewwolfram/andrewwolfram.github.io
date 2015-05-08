setTimeout(function(){addDivs();}, 1000);

var adArray = [];
var prev;

function addDivs() {

    if(!IntentMedia.Config.on_page)
        return false;

    for(var i = 0; i<IntentMedia.Config.on_page.length; i++) 
        adArray.push(IntentMedia.Config.on_page[i].target);

    if(adArray.length == 0)
        return false;

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
    
    function removeMyDiv(e) { 
            document.body.removeEventListener('mouseover', handler, false); 
            document.body.removeChild(document.getElementById("myDiv"));
            e.stopPropogation();
    }

    if (document.body.addEventListener) {
        document.body.addEventListener('mouseover', handler, false);
    } else if (document.body.attachEvent) {
        document.body.attachEvent('mouseover', function(e) {
            return handler(e || window.event);
        });
    } else {
        document.body.onmouseover = handler;
    }

    function handler(event) {
        if (event.target === document.body || (prev && prev === event.target)) {
            return;
        }
        
        if (prev) {
            prev.className = prev.className.replace(/\bhighlight\b/, '');
            target.removeEventListener("click", insertDiv, false);
            prev = undefined;
        }
        
        if (event.target) {
            prev = event.target;
            prev.className += " highlight";
            prev.addEventListener("click", insertDiv, false);
        }
    }

    function insertDiv(e) {
        var imDiv = document.createElement("div");
        imDiv.id = adArray[adArray.length-1];
        e.target.appendChild(imDiv);
        adArray.pop();
        if(adArray.length == 0){
            removeMyDiv();
            e.target.className = prev.className.replace(/\bhighlight\b/, '');
            e.target.removeEventListener("click", insertDiv, false);
            e.stopPropogation();
            return;
        }
        document.getElementById("mySpan").innerText = adArray[length-1];
        e.stopPropogation();
    }
}
