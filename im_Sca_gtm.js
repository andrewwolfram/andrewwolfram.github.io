var loadIntentMedia = function(data) {

var memberVariables = ["site_name", "page_id", "site_country", "site_language", "site_currency", "display_format_type", "user_member_id", "visitor_id", "referrer_source", "referrer_channel", "active_member_profile", "tag_path", "show_onpage_ads", "show_exit_units", "is_hv", "is_lv", "travel_date_start", "travel_date_end", "travelers", "adults", "children", "seniors", "trip_type", "flight_class_of_service", "flight_origin", "flight_destination", "hotel_city", "hotel_country", "hotel_state", "hotel_rooms", "number_of_opaque_listings", "car_trip_type", "car_pickup_location_type", "car_pickup_airport", "car_pickup_city", "car_pickup_state", "car_pickup_country", "car_pickup_time", "car_dropoff_location_type", "car_dropoff_airport", "car_dropoff_city", "car_dropoff_state", "car_dropoff_country", "car_dropoff_time", "package_type", "total_conversion_value", "order_id", "conversion_type", "promo_code", "flight_carrier_code", "hotel_property_code", "hotel_market_id", "hotel_brand_code", "hotel_value_in_package", "car_class", "car_rental_agency", "site_reporting_value_01", "site_reporting_value_02", "site_reporting_value_03", "site_reporting_value_04", "site_reporting_value_05", "site_reporting_value_06", "site_reporting_value_07", "custom_01", "custom_02", "custom_03", "custom_04", "custom_05", "custom_06", "custom_07", "custom_08", "custom_09", "custom_10"]; 

for(var i = 0; i < memberVariables.length; i++) {
	var member = memberVariables[i];
	if(eval("data[$" + member + "]")) {
		window.IntentMediaProperties[member] = eval("data[$" + member + "]");
	}
} 
    
var divArray = ["IntentMediaRail", "IntentMediaIntercard", "IntentMediaFooter"];
for(var i = 0; i < divArray.length; i++) {
	var member = divArray[i];
	if(eval("data[$" + member + "]")) {
		var imDiv = document.createElement('div');
		imDiv.id = divArray[i];
		document.getElementById(eval("data[$" + member + "]")).appendChild(imDiv);
	}
}
    
(function() {
	var script = document.createElement("script");
	var url = window.IntentMediaProperties.tag_path; 
	script.src = url;
	script.async = true;
	document.getElementsByTagName("head")[0].appendChild(script);
}());

}

$gtmExport(loadIntentMedia);
