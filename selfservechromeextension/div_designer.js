if(typeof IntentMediaDesign  === 'undefined') {
window.IntentMediaDesign = {
search_compare_ads:{
intercard:{
background_color:'',
border_color:'',
border_radius:'',
text_color:'',
text_accent_color:'',
cell_border_color:'',
cell_border_hover_color:'',
cell_border_selected_color:'',
primary_button_color:'',
primary_button_hover_color:'',
primary_button_text_color:'',
primary_button_border_color:'',
secondary_button_color:'',
secondary_button_hover_color:'',
secondary_button_text_color:'',
secondary_button_border_color:''
},

rail:{
background_color:'',
border_color:'',
border_radius:'',
text_color:'',
text_accent_color:'',
cell_border_color:'',
cell_border_hover_color:'',
cell_border_selected_color:'',
primary_button_color:'',
primary_button_hover_color:'',
primary_button_text_color:'',
primary_button_border_color:'',
secondary_button_color:'',
secondary_button_hover_color:'',
secondary_button_text_color:'',
secondary_button_border_color:''
}
}
};
}

var designArray = Object.keys(IntentMediaDesign.search_compare_ads.intercard);
var im_design_pos = 0;
var intercardDesign = IntentMediaDesign.search_compare_ads.intercard;
var railDesign = IntentMediaDesign.search_compare_ads.rail;

function openDesigner() {

    if(document.body.children[0].id === 'addDivs') {
        closeDesigner();
        return;
    }

    var myDiv = document.createElement("div");
    myDiv.id = "addDivs";
    myDiv.class = "im_designer";
    document.body.insertBefore(myDiv, document.body.children[0]);

    var myPar = document.createElement("p");
    myPar.id = "myText";
    myPar.innerText = "Please enter a value for ";

    var mySpan = document.createElement("span");
    mySpan.id = "targetName";
    mySpan.innerText = designArray[im_design_pos];
    myPar.appendChild(mySpan);
    myDiv.appendChild(myPar);
    
    var cssInput = document.createElement("input");
    cssInput.id = "cssInput";
    cssInput.type = "text";
    cssInput.value = intercardDesign[designArray[im_design_pos]]; 
    cssInput.addEventListener("input", function() {
       intercardDesign[designArray[im_design_pos]] = document.getElementById('cssInput').value;
       IntentMedia.trigger("onpage_ads_redraw");
    });
    myPar.appendChild(cssInput);

    var nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", function(e) {
       intercardDesign[designArray[im_design_pos]] = document.getElementById('cssInput').value;
       railDesign[designArray[im_design_pos]] = document.getElementById('cssInput').value;
       IntentMedia.trigger("onpage_ads_redraw");
       im_design_pos++;
       if(im_design_pos == designArray.length) {
           closeDesigner();
           return;
       }
       document.getElementById('targetName').innerText = designArray[im_design_pos]; 
       document.getElementById('cssInput').value = intercardDesign[designArray[im_design_pos]]; 
       if(im_design_pos == (designArray.length - 1)) e.target.innerText = "Finish";
    });
    myPar.appendChild(nextButton);

    var closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerText = "Close";
    closeButton.addEventListener("click", function() {closeDesigner();});
    myPar.appendChild(closeButton);

    /*
    loop1:
    for (key in intercardDesign) {
       while(true){
       cssInput.value = intercardDesign[key];
       if(key !== 'border_radius') {
           var userCSS = getCSS(intercardDesign[key]);
       }
       intercardDesign[key] = userCSS;
       railDesign[key] = userCSS;
       IntentMedia.trigger("onpage_ads_redraw");
       }
    } 
    */
}

function closeDesigner() {
    document.body.removeChild(document.getElementById("addDivs"));
    im_design_pos = 0;
}
