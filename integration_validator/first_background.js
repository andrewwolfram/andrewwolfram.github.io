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

    //Change below line
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

function validate(req, im_params) {
    if(req == "config") {
        Object.keys(validator.config).forEach(function(a) {
            if(a in im_params) {
                if(!im_params[a].match(validator.config[a].format)) {
                    pushLog({"type": "Incorrect Parameter", "name": validator.config[a].impName, "value": im_params[a], "msg": validator.config[a].errorMsg}); 
                   }
            } else {
              pushLog({"type":  "Missing Parameter", "name": validator.config[a].impName, "value": "", "msg": validator.config[a].errorMsg}); 
            }
        });
        return;
    } 

    var product = im_params['product_category'];
    
    if(req == "user_classification" || req == "impressions") {
        if(product == "hotels") {
            validateHotels(im_params);
        } else if (product == "flights") {
            validateFlights(im_params);
        } else if (product == "cars") {
            validateCars(im_params);
        }
    } else if(req == "conversions") {

    }
}

function validateHotels(im_params) {
    Object.keys(validator.hotels).forEach(function(a) {
        if(a in im_params) {
            if(!im_params[a].match(validator.hotels[a].format)) {
                pushLog({"type": "Incorrect Parameter", "name": validator.hotels[a].impName, "value": im_params[a], "msg": validator.hotels[a].errorMsg}); 
               }
        } else {
          pushLog({"type":  "Missing Parameter", "name": validator.hotels[a].impName, "value": "", "msg": validator.hotels[a].errorMsg}); 
        }
    });
}

function validateFlights(im_params) {
    Object.keys(validator.flights).forEach(function(a) {
        if(a in im_params) {
            if(!im_params[a].match(validator.flights[a].format)) {
                pushLog({"type": "Incorrect Parameter", "name": validator.flights[a].impName, "value": im_params[a], "msg": validator.flights[a].errorMsg}); 
               }
        } else {
          pushLog({"type":  "Missing Parameter", "name": validator.flights[a].impName, "value": "", "msg": validator.flights[a].errorMsg}); 
        }
    });
}

function validateCars(im_params) {
    Object.keys(validator.cars).forEach(function(a) {
        if(a in im_params) {
            if(!im_params[a].match(validator.cars[a].format)) {
                pushLog({"type": "Incorrect Parameter", "name": validator.cars[a].impName, "value": im_params[a], "msg": validator.cars[a].errorMsg}); 
               }
        } else {
          pushLog({"type":  "Missing Parameter", "name": validator.cars[a].impName, "value": "", "msg": validator.cars[a].errorMsg}); 
        }
    });
}

function pushLog(item) {
    var add = true;
    log.forEach(function(a) {
        if(a.name == item.name && a.type == item.type) add = false;
    });
    if(add) log.push(item);
} 

var validator = {
    "config": {
        "site_name": {"format": /^([A-Z]+[_]?)*[A-Z]+$/g,
                      "errorMsg": "Unique ID for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US",
                      "required": "Y",
                      "impName": "site_name"
        },
        "page_id": {"format": /^([a-z]+[.]?)*[a-z]+$/gi,
                      "errorMsg": "Unique ID for each page where the tag is firing E.G. hotel.list",
                      "required": "Y",
                      "impName": "page_id"
        }
    },
    "hotels": {
        "hotel_city_name": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                      "errorMsg": "City of searched, selected or booked hotel property (in English language)",
                      "required": "Y",
                      "impName": "hotel_city"
        },
        "hotel_state": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
                      "required": "Y",
                      "impName": "hotel_state"
        },
        "hotel_state_code": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
                      "required": "Y",
                      "impName": "hotel_state"
        },
        "hotel_country": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                      "errorMsg": "2 letter ISO country code of searched, selected or booked hotel property",
                      "required": "Y",
                      "impName": "hotel_country"
        },
        "hotel_country_code": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of searched, selected or booked hotel property",
                      "required": "Y",
                      "impName": "hotel_country"
        },
        "hotel_airport_code": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter airport code - Hotel location (if applicable)",
                      "required": "Y",
                      "impName": "hotel_airport_code"
        },
        "rooms": {"format": /^[1-9]{1}$/g,
                      "errorMsg": "Number of hotel rooms booked. Integer value greater than 0",
                      "required": "Y",
                      "impName": "hotel_rooms"
        },
        "site_country": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of the website version that was loaded",
                      "required": "Y",
                      "impName": "site_country"
        },
        "site_language": {"format": /^[a-zA-Z]{2}$/g,
                      "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                      "required": "Y",
                      "impName": "site_language"
        },
        "site_currency": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter ISO currency code for the transaction",
                      "required": "Y",
                      "impName": "site_currency"
        },
        "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                      "errorMsg": "Travel start date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_start"
        },
        "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                      "errorMsg": "Travel end date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_end"
        },
        "travelers": {"format": /^[1-9]{1}$/g,
                      "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                      "required": "Y",
                      "impName": "travelers"
        }
    },
    "flights": {
        "flight_origin": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter airport code",
                      "required": "Y",
                      "impName": "flight_origin"
        },
        "flight_destination": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter airport code",
                      "required": "Y",
                      "impName": "flight_destination"
        },
        "trip_type": {"format": /^roundtrip$|^oneway$/gi,
                      "errorMsg": "oneway or roundtrip",
                      "required": "Y",
                      "impName": "trip_type"
        },
        "travelers": {"format": /^[1-9]{1}$/g,
                      "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                      "required": "Y",
                      "impName": "travelers"
        },
        "site_country": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of the website version that was loaded",
                      "required": "Y",
                      "impName": "site_country"
        },
        "site_language": {"format": /^[a-zA-Z]{2}$/g,
                      "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                      "required": "Y",
                      "impName": "site_language"
        },
        "site_currency": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter ISO currency code for the transaction",
                      "required": "Y",
                      "impName": "site_currency"
        },
        "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                      "errorMsg": "Travel start date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_start"
        },
        "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                      "errorMsg": "Travel end date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_end"
        }
    },
    "cars": {
        "trip_type": {"format": /^roundtrip$|^oneway$/gi,
                      "errorMsg": "oneway or roundtrip",
                      "required": "Y",
                      "impName": "car_trip_type"
        },
        "car_pickup_location_type": {"format": /^airport$|^city$/gi,
                      "errorMsg": "airport or city",
                      "required": "Y",
                      "impName": "car_pickup_location_type"
        },
        "car_pickup_airport_code": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter airport code",
                      "required": "Y",
                      "impName": "car_pickup_airport_code"
        },
        "car_pickup_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                      "errorMsg": "City name of pickup location",
                      "required": "Y",
                      "impName": "car_pickup_city"
        },
        "car_pickup_state": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO state code for state of pickup location - US & Canada only",
                      "required": "Y",
                      "impName": "car_pickup_state"
        },
        "car_pickup_country": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of pickup location",
                      "required": "Y",
                      "impName": "car_pickup_country"
        },
        "car_pickup_time": {"format": /^[0-2]\d[0-5]\d$/g,
                      "errorMsg": "Pickup time per pickup timezone - 0000-2359",
                      "required": "Y",
                      "impName": "car_pickup_time"
        },
        "car_dropoff_location_type": {"format": /^airport$|^city$/gi,
                      "errorMsg": "airport or city",
                      "required": "Y",
                      "impName": "car_dropoff_location_type"
        },
        "car_dropoff_airport_code": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter airport code",
                      "required": "Y",
                      "impName": "car_dropoff_airport_code"
        },
        "car_dropoff_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                      "errorMsg": "City name of dropoff location",
                      "required": "Y",
                      "impName": "car_dropoff_city"
        },
        "car_dropoff_state": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO state code for state of dropoff location - US & Canada only",
                      "required": "Y",
                      "impName": "car_dropoff_state"
        },
        "car_dropoff_country": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of dropoff location",
                      "required": "Y",
                      "impName": "car_dropoff_country"
        },
        "car_dropoff_time": {"format": /^[0-2]\d[0-5]\d$/g,
                      "errorMsg": "Dropoff time per dropoff timezone - 0000-2359",
                      "required": "Y",
                      "impName": "car_dropoff_time"
        },
        "site_country": {"format": /^[A-Z]{2}$/g,
                      "errorMsg": "2 letter ISO country code of the website version that was loaded",
                      "required": "Y",
                      "impName": "site_country"
        },
        "site_language": {"format": /^[a-zA-Z]{2}$/g,
                      "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                      "required": "Y",
                      "impName": "site_language"
        },
        "site_currency": {"format": /^[A-Z]{3}$/g,
                      "errorMsg": "3 letter ISO currency code for the transaction",
                      "required": "Y",
                      "impName": "site_currency"
        },
        "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                      "errorMsg": "Travel start date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_start"
        },
        "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                      "errorMsg": "Travel end date - required format YYYYMMDD",
                      "required": "Y",
                      "impName": "travel_date_end"
        },
        "travelers": {"format": /^[1-9]{1}$/g,
                      "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                      "required": "Y",
                      "impName": "travelers"
        }
    }
};
