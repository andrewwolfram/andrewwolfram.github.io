window._IntentMediaValidator = window._IntentMediaValidator || {}

_IntentMediaValidator = (function() {

    var imPropsCheck = {
        "hotels": {
            "hotel_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City of searched, selected or booked hotel property (in English language)",
                          "required": "Y",
                          "impName": "hotel_city"
            },
            "hotel_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
                          "required": "Y",
                          "impName": "hotel_state"
            },
            "hotel_country": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "2 letter ISO country code of searched, selected or booked hotel property",
                          "required": "Y",
                          "impName": "hotel_country"
            },
            "hotel_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code - Hotel location (if applicable)",
                          "required": "Y",
                          "impName": "hotel_airport_code"
            },
            "hotel_rooms": {"format": /^[1-9]{1}$/g,
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
            "car_trip_type": {"format": /^roundtrip$|^oneway$/gi,
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

    var log = [];

    function hasOnPageAds() {
        if(window.IntentMedia && IntentMedia.Config) {
            return IntentMedia.Config.on_page ? true : false;
        } else {
            return false; 
        }
    }

    function getTargets() {
        var targets = [];
        if(IntentMedia.Config.on_page.placements) {
            IntentMedia.Config.on_page.placements.forEach(function(plc) {
                if(plc.target) {
                    var tgts = plc.target.split(',');
                    tgts.forEach(function(tgt) {
                        targets.push(tgt.trim());
                    });
                }
            });
        }

        return targets;
    }

    function getMissingTargets() {
        var missing = [];
        var targets = getTargets();
        targets.forEach(function(a) {
            if(!targetExists(a)) {
                missing.push(a);
            }
        });
        return missing;
    }

    function targetExists(a) {
       return document.querySelectorAll(a).length != 0;
    }

    function opensRemote() {
        return IntentMedia.Config.exit_unit.opens_remote;
    }

    function getFinalExitUnitUrl() {
        var url = IntentMedia.ExitUnitOpener.get_exit_unit_url();
        if(url.match(/^(http|\/\/).*$/g)) {
            url = url.split('?')[0];
        } else if(url.match(/^\/[^\/].*$/g)) {
            url = '//' + window.location.host + url.split('?')[0];
        } else {
            url = '//' + window.location.host + '/' + url.split('?')[0];
        }
        return url;
    }

    function processBlankPage(e) {
        if(!e.target.response.match(/intent_media_exit_unit_redirector/)){
            log.push({"type": "Missing Exit Unit Blank Page", "name": e.responseURL, "value": "", "msg": "Please host this HTML file (http://shortcut.im/xu) at the above URL."});
        } 
    }

    function checkBlankPage() {
        if(opensRemote()) {
            var url = getFinalExitUnitUrl();
            var oReq = new XMLHttpRequest();
            oReq.addEventListener('loadend', processBlankPage);
            oReq.open("GET", url, true);
            oReq.send();
        }
    }

    function printLog() {
        if(log.length != 0) {
            console.group('Intent Media');
            for(var i = 0; i < log.length; i++) {
                console.groupCollapsed('['+ log[i].type + ' on page' + (IntentMediaProperties.page_id ? (' ' + IntentMediaProperties.page_id) : '') + '] ' + log[i].name);
                if(log[i].type == 'Incorrect Parameter') {
                    console.log('Your value: ' + log[i].value);
                    console.log('Expected: ' + log[i].msg);
                }else if(log[i].type == 'Missing Parameter') {
                    console.log('Expected: ' + log[i].msg);
                } else {
                    console.log('Message: ' + log[i].msg);
                }
                console.groupEnd();
            }
            console.groupEnd();
        }
    }

    function checkSite() {
        if(window.IntentMedia && window.IntentMediaProperties) {
            if(!IntentMediaProperties.site_name) {
                log.push({"type": "Missing Parameter", "name": 'site_name', "value": "", "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            } else if(!IntentMedia.Config && IntentMediaProperties.site_name) {
                log.push({"type": "Incorrect Parameter", "name": 'site_name', "value": IntentMediaProperties.site_name, "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            }
        }
    }
    
    function checkPage() {
        if(window.IntentMedia && window.IntentMediaProperties) {
            if(!IntentMediaProperties.page_id) {
                log.push({"type": "Missing Parameter", "name": 'page_id', "value": "", "msg": "Unique ID provided by your Intent Media representative for the site where the tag is firing - all CAPS, no spaces, no special characters E.G. MYSITE_US"});
            } else if(IntentMedia.Config && !IntentMedia.Config.page && IntentMediaProperties.page_id) {
                log.push({"type": "Incorrect Parameter", "name": 'page_id', "value": IntentMediaProperties.page_id, "msg": "Unique ID provided by your Intent Media representative for each page where the tag is firing E.G. hotel.list."});
            }
        }
    }

    function checkHotels(im_params) {
        Object.keys(imPropsCheck.hotels).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] == null) im_params[a] = "";
                if(!im_params[a].toString().match(imPropsCheck.hotels[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.hotels[a].impName, "value": im_params[a], "msg": imPropsCheck.hotels[a].errorMsg}); 
                   }
            } else {
              log.push({"type":  "Missing Parameter", "name": imPropsCheck.hotels[a].impName, "value": "", "msg": imPropsCheck.hotels[a].errorMsg}); 
            }
         });
    }

    function checkFlights(im_params) {
        Object.keys(imPropsCheck.flights).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] == null) im_params[a] = "";
                if(!im_params[a].toString().match(imPropsCheck.flights[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.flights[a].impName, "value": im_params[a], "msg": imPropsCheck.flights[a].errorMsg}); 
                   }
            } else {
              log.push({"type":  "Missing Parameter", "name": imPropsCheck.flights[a].impName, "value": "", "msg": imPropsCheck.flights[a].errorMsg}); 
            }
        });
    }

    function checkCars(im_params) {
        Object.keys(imPropsCheck.cars).forEach(function(a) {
            if(a in im_params) {
                if(im_params[a] == null) im_params[a] = "";
                if(!im_params[a].toString().match(imPropsCheck.cars[a].format)) {
                    log.push({"type": "Incorrect Parameter", "name": imPropsCheck.cars[a].impName, "value": im_params[a], "msg": imPropsCheck.cars[a].errorMsg}); 
                   }
            } else {
              log.push({"type":  "Missing Parameter", "name": imPropsCheck.cars[a].impName, "value": "", "msg": imPropsCheck.cars[a].errorMsg}); 
            }
        });
    }

    function verifySiteAndPage() {
        checkSite();
        checkPage();
    }

    function verifyIMProps() {
        if(window.IntentMedia && IntentMedia.Config && IntentMedia.Config.page && IntentMedia.Config.page.inferred_product_category && IntentMediaProperties) {
            var product = IntentMedia.Config.page.inferred_product_category;
            if(product == 'flights') {
                checkFlights(IntentMediaProperties);
            } else if(product == 'hotels') {
                checkHotels(IntentMediaProperties);
            } else if(product == 'cars') {
                checkCars(IntentMediaProperties);
            }
        }
    }

    function verifyExitUnits() {
        checkBlankPage();
    }

    function verifyOnPageAds() {
        if(hasOnPageAds()) {
            var missing = getMissingTargets();
            if(missing.length != 0) {
                missing.forEach(function(a) {
                    log.push({"type": "Missing Ad Target", "name": a, "value": "", "msg": "No DOM element(s) found using the above CSS selector. Element(s) must exist for ads to display."});
                });
            }
        }
    }

    function verifyHomePage() {
        verifyIMProps();
        verifyOnPageAds();
        verifyExitUnits();
        window.setTimeout(printLog, 1000);

        return "[Intent Media] Please click the option to stay on page and check the console for output";
    }

    function validate() {
        verifySiteAndPage();
        verifyIMProps();
        verifyOnPageAds();
        verifyExitUnits();
        window.setTimeout(printLog, 1000);
    }

    function validateHomePage() {
        console.info("[Intent Media] Please run a search and check console for output");
        verifySiteAndPage();
        window.onbeforeunload = verifyHomePage;
    }

    return {"validate": validate,
            "validateHomePage": validateHomePage};

})();
