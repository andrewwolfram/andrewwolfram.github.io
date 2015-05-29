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

    if (document.body.children[0].id !== 'designDivs') {
        var myDiv = document.createElement("div");
        myDiv.id = "designDivs";
        myDiv.className = "im_designer";
        myDiv.style.left = '0px'
        myDiv.addEventListener("dblclick", function(e) {
            if(e.target.style.left === '') {
                e.target.style.right = '';
                e.target.style.left = '0px';
            } else {
                e.target.style.left = '';
                e.target.style.right = '0px';
            }
        });
        document.body.insertBefore(myDiv, document.body.children[0]);
    } else if (document.getElementById('designDivs').style.display === 'none') {
        document.getElementById('designDivs').style.display = '';
    } else { 
        closeDesigner();
        return;
    }

    for(var i = 0; i < designArray.length; i++) {
    var myPar = document.createElement("p");
    myPar.className = "myText";
    myPar.innerText = designArray[i];
    myDiv.appendChild(myPar);
   
    var mySpan = document.createElement("span");
 
    var cssInput = document.createElement("input");
    cssInput.size = "9";
    if(designArray[i] !== 'border_color') {
        cssInput.className = "color";
    }
    cssInput.type = "text";
    cssInput.value = intercardDesign[designArray[im_design_pos]]; 
    cssInput.addEventListener("input", inputChange);
    cssInput.addEventListener("change", inputChange);
    mySpan.appendChild(cssInput);
    myPar.appendChild(mySpan);
    }

    jscolor.bind();

/*
    var nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.innerText = "Next";
    nextButton.addEventListener("click", function(e) {
       intercardDesign[designArray[im_design_pos]] = document.getElementById('cssInput').value;
       railDesign[designArray[im_design_pos]] = document.getElementById('cssInput').value;
       document.getElementById("cssInput").style.backgroundColor = '';
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
    document.getElementById("designDivs").style.display = 'none';
    im_design_pos = 0;
}

function inputChange(e) {
    intercardDesign[designArray[im_design_pos]] = e.target.value;
    railDesign[designArray[im_design_pos]] = e.target.value;
    IntentMedia.trigger("onpage_ads_redraw");
}
