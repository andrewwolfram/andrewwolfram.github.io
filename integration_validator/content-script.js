(function() {
    var script = document.createElement("script");
    var url = '//andrewwolfram.github.io/selfservechromeextension/add_divs.js';
    script.src = url;
    script.id = "im_script";
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);
}());
