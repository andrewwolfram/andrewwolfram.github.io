var code;
var filter = {urls: ["*://*.intentmedia.net/*"]};
var opt_extraInfoSpec = ["requestBody"];
var callback = function(details) {
    var im_params = queryParams(unescape(details.url));
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

validator = {
    "config": {
        "site_name": {"format": /^([A-Z]+[_]?)*[A-Z]+$/g},
        "page_id": {"format": /^([a-z]+[.]?)*[a-z]+$/gi}
    },
    "hotel": {
        "hotel_city_name": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g},
        "hotel_state": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g},
        "hotel_state_code": {"format": /^[A-Z]{2}$/g},
        "hotel_country": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g},
        "hotel_country_code": {"format": /^[A-Z]{2}$/g},
        "site_country": {"format": /^[A-Z]{2}$/g},
        "site_language": {"format": /^[a-z]{2}$/g},
        "site_currency": {"format": /^[A-Z]{3}$/g},
        "travel_date_start": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g},
        "travel_date_end": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g}
    },
    "flight": {
        "flight_origin": {"format": /^[A-Z]{3}$/g},
        "flight_destination": {"format": /^[A-Z]{3}$/g},
        "trip_type": {"format": /^roundtrip$|^oneway$/gi},
        "travelers": {"format": /^[1-9]{1}$/g},
        "site_country": {"format": /^[A-Z]{2}$/g},
        "site_language": {"format": /^[a-z]{2}$/g},
        "site_currency": {"format": /^[A-Z]{3}$/g},
        "travel_date_start": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g},
        "travel_date_end": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g}
    },
    "car": {
        "car_trip_type": {"format": /^roundtrip$|^oneway$/gi},
        "car_pickup_location_type": {"format": /^airport$|^city$/gi},
        "car_pickup_airport_code": {"format": /^[A-Z]{3}$/g},
        "car_pickup_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g},
        "car_pickup_state": {"format": /^[A-Z]{2}$/g},
        "car_pickup_country": {"format": /^[A-Z]{2}$/g},
        "car_pickup_time": {"format": /^[0-2]\d[0-5]\d$/g},
        "car_dropoff_location_type": {"format": /^airport$|^city$/gi},
        "car_dropoff_airport_code": {"format": /^[A-Z]{3}$/g},
        "car_dropoff_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g},
        "car_dropoff_state": {"format": /^[A-Z]{2}$/g},
        "car_dropoff_country": {"format": /^[A-Z]{2}$/g},
        "car_dropoff_time": {"format": /^[0-2]\d[0-5]\d$/g},
        "site_country": {"format": /^[A-Z]{2}$/g},
        "site_language": {"format": /^[a-z]{2}$/g},
        "site_currency": {"format": /^[A-Z]{3}$/g},
        "travel_date_start": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g},
        "travel_date_end": {"format": /^20\d\d[-/]?[0-1][1-9][-/]?[0-3][1-9]$/g}
    }
};
