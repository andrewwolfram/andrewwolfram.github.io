window.IntentMediaDesign = window.IntentMediaDesign || {
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
                                    primary_button_color:'',
                                    primary_button_hover_color:'',
                                    primary_button_text_color:'',
                                    primary_button_border_color:'',
                                    secondary_button_color:'',
                                    secondary_button_hover_color:'',
                                    secondary_button_text_color:'',
                                    secondary_button_border_color:''
                                },
                           ribbon:{
                                    background_color:'',
                                    border_color:'',
                                    border_radius:'',
                                    text_color:'',
                                    text_accent_color:'',
                                    cell_border_color:'',
                                    cell_border_hover_color:'',
                                    primary_button_color:'',
                                    primary_button_hover_color:'',
                                    primary_button_text_color:'',
                                    primary_button_border_color:'',
                                    secondary_button_color:'',
                                    secondary_button_hover_color:'',
                                    secondary_button_text_color:'',
                                    secondary_button_border_color:''
                                },
                           slimcard:{
                                    background_color:'',
                                    border_color:'',
                                    border_radius:'',
                                    text_color:'',
                                    primary_button_color:'',
                                    primary_button_hover_color:'',
                                    primary_button_text_color:'',
                                    primary_button_border_color:'',
                                    secondary_button_color:'',
                                    secondary_button_text_color:'',
                                }
                       }
};

var designArray = []; 
var im_design_pos = 0;
var intercardDesign = window.IntentMediaDesign.search_compare_ads.intercard;
var railDesign = window.IntentMediaDesign.search_compare_ads.rail;
var ribbonDesign = window.IntentMediaDesign.search_compare_ads.ribbon;
var slimcardDesign = window.IntentMediaDesign.search_compare_ads.slimcard;

function openDesigner() {

    designArray = Object.keys(window.IntentMediaDesign.search_compare_ads.intercard);

    if (document.body.children[0].id !== 'designDivs') {
        createDesigner();
    } else if (document.getElementById('designDivs').style.display === 'none') {
        document.getElementById('designDivs').style.display = '';
    } else { 
        closeDesigner();
        return;
    }
}

function createDesigner() {

    var myDiv = document.createElement("div");
    myDiv.id = "designDivs";
    myDiv.className = "im_designer";
    myDiv.style.left = '0px'
    myDiv.addEventListener("click", function(e) { e.stopPropagation();});
    myDiv.addEventListener("dblclick", function(e) {
        if(e.target.style.left === '') {
            e.currentTarget.style.right = '';
            e.currentTarget.style.left = '0px';
        } else {
            e.currentTarget.style.left = '';
            e.currentTarget.style.right = '0px';
        }
    });
    document.body.insertBefore(myDiv, document.body.children[0]);

    for(var i = 0; i < designArray.length; i++) {
    var myPar = document.createElement("p");
    myPar.className = "myText";
    myPar.innerText = designArray[i];
    myDiv.appendChild(myPar);
   
    var mySpan = document.createElement("span");
 
    var cssInput = document.createElement("input");
    cssInput.size = "8";
    if(designArray[i] !== 'border_radius') {
        cssInput.className = "color";
    }
    cssInput.type = "text";
    cssInput.value = intercardDesign[designArray[i]];
    cssInput.name = designArray[i];
    cssInput.addEventListener("input", inputChange);
    cssInput.addEventListener("change", inputChange);
    mySpan.appendChild(cssInput);
    myDiv.appendChild(mySpan);
    }
    var toggle_container = document.createElement("p");
    toggle_container.className = "myText";
    toggle_container.innerText = "Reverse click type? ";
    var toggle_span = document.createElement("span"); 
    var multi_single_toggle = document.createElement("input");
    multi_single_toggle.type = "checkbox";
    multi_single_toggle.addEventListener("click", 
	function(){
	    for(i in im_op_targets){
		    var multi_single_targets = document.querySelectorAll(im_op_targets[i].target);
		    for(var j = 0; j < multi_single_targets.length; j++) {
			    var im_child = multi_single_targets[j].firstElementChild; 
			    if(im_child.className.match(/IM_single/) != null) {
				    im_child.className = im_child.className.replace("IM_single", "IM_multi");
			    } else if(im_child.className.match(/IM_multi/) != null) {
				    im_child.className = im_child.className.replace("IM_multi", "IM_single");
			    }
		    }
	    }
	}
    );
    toggle_span.appendChild(multi_single_toggle);
    toggle_container.appendChild(toggle_span);
    myDiv.appendChild(toggle_container);
			
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
    if (typeof intercardDesign[e.target.name] !== 'undefined') { intercardDesign[e.target.name] = e.target.value; }
    if (typeof railDesign[e.target.name] !== 'undefined') { railDesign[e.target.name] = e.target.value; }
    if (typeof ribbonDesign[e.target.name] !== 'undefined') { ribbonDesign[e.target.name] = e.target.value; }
    if (typeof slimcardDesign[e.target.name] !== 'undefined') { slimcardDesign[e.target.name] = e.target.value; }
    e.target.style.background = e.target.value;
    IntentMedia.trigger("onpage_ads_redraw");
}
