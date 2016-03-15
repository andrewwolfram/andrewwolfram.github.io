window._IntentMediaValidator = window._IntentMediaValidator || {}

_IntentMediaValidator = (function() {

    var imPropsCheck = {
        "hotels": {
            "hotel_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City of searched, selected or booked hotel property (in English language)",
                          "required": true,
                          "impName": "hotel_city"
            },
            "hotel_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only",
                          "required": true,
                          "impName": "hotel_state"
            },
            "hotel_country": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "2 letter ISO country code of searched, selected or booked hotel property",
                          "required": true,
                          "impName": "hotel_country"
            },
            "hotel_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code - Hotel location (Not required if providing hotel city, state, and country)",
                          "required": true,
                          "impName": "hotel_airport_code"
            },
            "hotel_rooms": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of hotel rooms booked. Integer value greater than 0",
                          "required": true,
                          "impName": "hotel_rooms"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            },
            "adults": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value greater than 0",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value greater than 0",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value greater than 0",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            }   
        },
        "flights": {
            "flight_origin": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "flight_origin"
            },
            "flight_destination": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "flight_destination"
            },
            "trip_type": {"format": /^roundtrip$|^oneway$/gi,
                          "errorMsg": "oneway or roundtrip",
                          "required": true,
                          "impName": "trip_type"
            },
            "adults": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value greater than 0",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value greater than 0",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value greater than 0",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            } 
        },
        "cars": {
            "car_trip_type": {"format": /^roundtrip$|^oneway$/gi,
                          "errorMsg": "oneway or roundtrip",
                          "required": true,
                          "impName": "car_trip_type"
            },
            "car_pickup_location_type": {"format": /^airport$|^city$/gi,
                          "errorMsg": "airport or city",
                          "required": true,
                          "impName": "car_pickup_location_type"
            },
            "car_pickup_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "car_pickup_airport_code"
            },    
            "car_pickup_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City name of pickup location",
                          "required": true,
                          "impName": "car_pickup_city"
            },  
            "car_pickup_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code for state of pickup location - US & Canada only",
                          "required": true,
                          "impName": "car_pickup_state"
            },
            "car_pickup_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of pickup location",
                          "required": true,
                          "impName": "car_pickup_country"
            },
            "car_pickup_time": {"format": /^[0-2]\d[0-5]\d$/g,
                          "errorMsg": "Pickup time per pickup timezone - 0000-2359",
                          "required": true,
                          "impName": "car_pickup_time"
            },
            "car_dropoff_location_type": {"format": /^airport$|^city$/gi,
                          "errorMsg": "airport or city",
                          "required": true,
                          "impName": "car_dropoff_location_type"
            },
            "car_dropoff_airport_code": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter airport code",
                          "required": true,
                          "impName": "car_dropoff_airport_code"
            },
            "car_dropoff_city": {"format": /^([a-zA-Z]+\s?)*[a-zA-Z]+$/g,
                          "errorMsg": "City name of dropoff location",
                          "required": true,
                          "impName": "car_dropoff_city"
            },
            "car_dropoff_state": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO state code for state of dropoff location - US & Canada only",
                          "required": true,
                          "impName": "car_dropoff_state"
            },
            "car_dropoff_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of dropoff location",
                          "required": true,
                          "impName": "car_dropoff_country"
            },
            "car_dropoff_time": {"format": /^[0-2]\d[0-5]\d$/g,
                          "errorMsg": "Dropoff time per dropoff timezone - 0000-2359",
                          "required": true,
                          "impName": "car_dropoff_time"
            },
            "site_country": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "2 letter ISO country code of the website version that was loaded",
                          "required": true,
                          "impName": "site_country"
            },
            "site_language": {"format": /^[a-zA-Z]{2}$/g,
                          "errorMsg": "2 letter ISO code for the language the website page is rendered in",
                          "required": true,
                          "impName": "site_language"
            },
            "site_currency": {"format": /^[A-Z]{3}$/g,
                          "errorMsg": "3 letter ISO currency code for the transaction",
                          "required": true,
                          "impName": "site_currency"
            },
            "travel_date_start": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g,
                          "errorMsg": "Travel start date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_start"
            },
            "travel_date_end": {"format": /(^20\d\d[0-1][0-9][0-3][0-9]$)|(^20\d\d\/[0-1][0-9]\/[0-3][0-9]$)|(^20\d\d-[0-1][0-9]-[0-3][0-9]$)/g, 
                          "errorMsg": "Travel end date - required format YYYYMMDD",
                          "required": true,
                          "impName": "travel_date_end"
            },
            "adults": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of adults. Integer value greater than 0",
                          "required": false,
                          "impName": "adults"
            },   
            "children": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of children. Integer value greater than 0",
                          "required": false,
                          "impName": "children"
            },   
            "seniors": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Number of seniors. Integer value greater than 0",
                          "required": false,
                          "impName": "seniors"
            },   
            "travelers": {"format": /^[1-9]{1}$/g,
                          "errorMsg": "Total number of travelers (adults+children+seniors). Integer value greater than 0",
                          "required": true,
                          "impName": "travelers"
            }    
        },
        "hotel_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "conversion_type": {"format": /^opaque|retail$/gi,
                          "errorMsg": "Type of hotel product that was purchased (if applicable) - OPAQUE/RETAIL",
                          "required": true,
                          "impName": "conversion_type"
            },   
            "hotel_brand_code": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "Chain code for hotel brand in user's search, or of selected/booked property. E.G. HY",
                          "required": true,
                          "impName": "hotel_brand_code"
            }   
        },
        "flight_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "flight_carrier_code": {"format": /^[A-Z]{2}$/g,
                          "errorMsg": "Airline code of booked flight. E.G. DL",
                          "required": true,
                          "impName": "flight_carrier_code"
            }   
        },
        "car_conversion": {
            "total_conversion_value": {"format": /^\d+(\.\d{1,2})?$/g,
                          "errorMsg": "Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places",
                          "required": true,
                          "impName": "total_conversion_value"
            },   
            "order_id": {"format": /^.*$/g,
                          "errorMsg": "Order id of the booking",
                          "required": true,
                          "impName": "order_id"
            },   
            "promo_code": {"format": /^Y|N$/gi,
                          "errorMsg": "Was there a promotion code applied? Y/N",
                          "required": true,
                          "impName": "promo_code"
            },   
            "conversion_type": {"format": /^opaque|retail$/gi,
                          "errorMsg": "Type of car product that was purchased (if applicable) - OPAQUE/RETAIL",
                          "required": true,
                          "impName": "conversion_type"
            },   
            "car_class": {"format": /^.*$/gi,
                          "errorMsg": "Car class - ECONOMY/COMPACT/INTERMEDIATE/STANDARD/FULL-SIZE/PREMIUM/LUXURY/SUV/MINI-VAN/CONVERTIBLE/PICKUP-TRUCK ",
                          "required": true,
                          "impName": "car_class"
            },   
            "car_rental_agency": {"format": /^.*$/g,
                          "errorMsg": "The name of the car rental agency the user purchased with on the confirmation page - E.G. Enterprise/Avis/National",
                          "required": true,
                          "impName": "car_rental_agency"
            }   
        }
    };

    var log = [];
    var triggerMsg = "";

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
                console.groupCollapsed('['+ log[i].type + ' on Page' + (IntentMediaProperties.page_id ? (' ' + IntentMediaProperties.page_id) : '') + '] ' + log[i].name);
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
            } else if (imPropsCheck.hotels[a].required) {
                if(a == 'hotel_airport_code' && ('hotel_city' in im_params || 'hotel_state' in im_params || 'hotel_country' in im_params)) return;
                if((a == 'hotel_city' || a == 'hotel_state' || a == 'hotel_country') && 'hotel_airport_code' in im_params) return;
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
            } else if (imPropsCheck.flights[a].required) {
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
            } else if (imPropsCheck.cars[a].required) {
                if((a == 'car_dropoff_city' || a == 'car_dropoff_state' || a == 'car_dropoff_country') && 'car_dropoff_location_type' in im_params && im_params.car_dropoff_location_type.match(/^airport$/i)) return;
                if((a == 'car_pickup_city' || a == 'car_pickup_state' || a == 'car_pickup_country') && 'car_pickup_location_type' in im_params && im_params.car_pickup_location_type.match(/^airport$/i)) return;
                if(a == 'car_pickup_airport' && 'car_pickup_location_type' in im_params && im_params.car_pickup_location_type.match(/^city$/i)) return;
                if(a == 'car_dropoff_airport' && 'car_dropoff_location_type' in im_params && im_params.car_dropoff_location_type.match(/^city$/i)) return;
                log.push({"type":  "Missing Parameter", "name": imPropsCheck.cars[a].impName, "value": "", "msg": imPropsCheck.cars[a].errorMsg}); 
            }
        });
    }

    function checkConversion(im_params, cType) {
        if(isConfirmationPage()) {
            Object.keys(imPropsCheck[cType]).forEach(function(a) {
                if(a in im_params) {
                    if(im_params[a] == null) im_params[a] = "";
                    if(!im_params[a].toString().match(imPropsCheck[cType][a].format)) {
                        log.push({"type": "Incorrect Parameter", "name": imPropsCheck[cType][a].impName, "value": im_params[a], "msg": imPropsCheck[cType][a].errorMsg}); 
                    }
                } else if (imPropsCheck[cType][a].required) {
                    log.push({"type":  "Missing Parameter", "name": imPropsCheck[cType][a].impName, "value": "", "msg": imPropsCheck[cType][a].errorMsg}); 
                } 
            });
        }
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
                checkConversion(IntentMediaProperties, 'flight_conversion');
            } else if(product == 'hotels') {
                checkHotels(IntentMediaProperties);
                checkConversion(IntentMediaProperties, 'hotel_conversion');
            } else if(product == 'cars') {
                checkCars(IntentMediaProperties);
                checkConversion(IntentMediaProperties, 'car_conversion');
            }
        }
    }

    function getExitUnitEvent() {
        if(window.IntentMedia && IntentMedia.Config && IntentMedia.Config.exit_unit) {
            return IntentMedia.Config.exit_unit.remote_polling ? "IntentMedia.trigger('fill_exit_unit')" : "IntentMedia.trigger('open_exit_unit')"; 
        } else {
            return "";
        }
    }

    function primeTrigger() {
        if(window.IntentMedia && IntentMedia.trigger) {
            var tmp = IntentMedia.trigger;
            IntentMedia.trigger = function(msg) {
                triggerMsg = "IntentMedia.trigger('" + msg + "')";
                tmp(msg);
            };
        }
    }

    function verifyTrigger() {
        var evt = getExitUnitEvent();
        if(!triggerMsg) {
            log.push({"type": "Event Not Fired", "name": evt, "value": "", "msg": "Please ensure the above event is bound to the search button"});
        } else {
            if(evt != triggerMsg) {
                log.push({"type": "Incorrect Event Fired", "name": "IntentMedia.trigger", "value": triggerMsg, "msg": "Please use " + evt});
            }
            triggerMsg = "";
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

    function isConfirmationPage() {
        if(window.IntentMedia && IntentMedia.Config && IntentMedia.Config.page) {
            if(IntentMedia.Config.page.view == 'CONFIRMATION') return true;
        }
        return false;
    }

    function verifyHomePage(e) {
        verifyIMProps();
        verifyOnPageAds();
        verifyExitUnits();
        verifyTrigger();
        window.setTimeout(printLog, 1000);
        var msg = "[Intent Media] Please click the option to stay on page and check the console for output"; 

        e.returnValue = msg; 

        return msg;
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
        primeTrigger();
        window.addEventListener('beforeunload', verifyHomePage);
    }

    return {"validate": validate,
            "validateHomePage": validateHomePage};

})();
