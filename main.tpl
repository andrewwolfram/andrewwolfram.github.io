___INFO___

{
	"type": "TAG",
	"id": "im_sca_ads",
	"version": 1,
	"displayName": "Intent Media - Search Compare Ads",
        "brand": {"id": "intent_media",
                  "displayName": "Intent Media",
                  "logo": "//andrewwolfram.github.io/intent_media_logo.png",
                  "thumbnail": "//andrewwolfram.github.io/square_logo.png"
                 },
        "description": "Collects user travel search data in order to serve and measure comparison travel ads across Flight, Hotel, and Car booking paths",
        "help": "Please contact PIE@intentmedia.com for assistance" 
}

___JS_TEMPLATE___ im_sca_gtm.js

___NOTES___
Please whitelist the account AW_IM under andrew.wolfram@intentmedia.com
Please contact andrew.wolfram@intentmedia.com with any questions

___TEMPLATE_PARAMETERS___

[
{
	"name": "site_name",
	"displayName": "Site Name",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "Unique site id provided by Intent Media; all caps, no spaces, no special characters e.g. 'MYSITE_US'"
},
{
	"name": "page_id",
	"displayName": "Page Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "Unique page id provided by Intent Media; e.g. 'flight.home'.  Must be combination of Product (flight, hotel, car or package) and Page (home, list, details or confirmation)"
},
{
	"name": "site_country",
	"displayName": "Site Country",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "2 letter ISO country code of the website version that was loaded; e.g. 'us'"
},
{
	"name": "site_language",
	"displayName": "Site Language",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "2 letter ISO code for the language the website page is rendered in; e.g. 'en'"
},
{
	"name": "site_currency",
	"displayName": "Site Currency",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "3 letter ISO currency code for the transaction"
},
{
	"name": "display_format_type",
	"displayName": "Display Format Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Device-specific version of the website that was loaded; e.g. DESKTOP or MOBILE"
},
{
	"name": "user_member_id",
	"displayName": "User Member Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Unique registered user id to identify logged-in users"
},
{
	"name": "visitor_id",
	"displayName": "Visitor Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Unique user id persistent at least across the entire booking transaction session"
},
{
	"name": "referrer_source",
	"displayName": "Referrer Source",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Specific site where the user came from - Google/Bing, etc."
},
{
	"name": "referrer_channel",
	"displayName": "Referrer Channel",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Which marketing channel acquired the user - (SEM/SEO/Meta, etc.)"
},
{
	"name": "active_member_profile",
	"displayName": "Active Member Profile",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Member profile contains data beyond initial account creation default (i.e. loyalty points, preferred airline, written reviews, etc.)"
},
{
	"name": "tag_path",
	"displayName": "Tag Path",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js",
	"help": "Mandatory value for the tag path - default value is '//a.cdn.intentmedia.net/javascripts/v1/intent_media_core.js"
},
{
	"name": "show_onpage_ads",
	"displayName": "Show Onpage Ads",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Controls whether the existing on-page ads (intercard and rail) are shown or not - Y/N"
},
{
	"name": "show_exit_units",
	"displayName": "Show Exit Units",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Controls whether the existing exit units are shown or not - Y/N"
},
{
	"name": "is_hv",
	"displayName": "Is Hv",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media system value"
},
{
	"name": "is_lv",
	"displayName": "Is Lv",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media system value"
},
{
	"name": "travel_date_start",
	"displayName": "Travel Date Start",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Required format YYYYMMDD"
},
{
	"name": "travel_date_end",
	"displayName": "Travel Date End",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Required format YYYYMMDD"
},
{
	"name": "travelers",
	"displayName": "Travelers",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Total number of travelers (adults+children+seniors)"
},
{
	"name": "adults",
	"displayName": "Adults",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Number of adult travelers"
},
{
	"name": "children",
	"displayName": "Children",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Number of children travelers"
},
{
	"name": "seniors",
	"displayName": "Seniors",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Number of senior travelers"
},
{
	"name": "trip_type",
	"displayName": "Trip Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Flights only - roundtrip/oneway (do not traffic tag on multicity searches)"
},
{
	"name": "flight_class_of_service",
	"displayName": "Flight Class Of Service",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Class of airline ticket - FirstClass/BusinessClass/EconomyClass/PremiumClass"
},
{
	"name": "flight_origin",
	"displayName": "Flight Origin",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "3 letter airport code - Origin"
},
{
	"name": "flight_destination",
	"displayName": "Flight Destination",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "3 letter airport code - Destination"
},
{
	"name": "hotel_city",
	"displayName": "Hotel City",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "City of searched, selected or booked hotel property (in English language)"
},
{
	"name": "hotel_country",
	"displayName": "Hotel Country",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO country code of searched, selected or booked hotel property"
},
{
	"name": "hotel_state",
	"displayName": "Hotel State",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO state code of searched, selected or booked hotel property - US & Canada only"
},
{
	"name": "hotel_rooms",
	"displayName": "Hotel Rooms",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Number of hotel rooms booked"
},
{
	"name": "number_of_opaque_listings",
	"displayName": "Number Of Opaque Listings",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Number of opaque listings in search results - list page only, set to 0 if all are retail"
},
{
	"name": "car_trip_type",
	"displayName": "Car Trip Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "roundtrip/oneway"
},
{
	"name": "car_pickup_location_type",
	"displayName": "Car Pickup Location Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Valid values: AIRPORT, CITY"
},
{
	"name": "car_pickup_airport",
	"displayName": "Car Pickup Airport",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "3 letter airport code if pickup location is airport"
},
{
	"name": "car_pickup_city",
	"displayName": "Car Pickup City",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "City name if pickup location is city"
},
{
	"name": "car_pickup_state",
	"displayName": "Car Pickup State",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO state code for state if pickup location is city - US & Canada only"
},
{
	"name": "car_pickup_country",
	"displayName": "Car Pickup Country",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO country code if pickup location is city"
},
{
	"name": "car_pickup_time",
	"displayName": "Car Pickup Time",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Pickup time per pickup timezone - 0000-2359"
},
{
	"name": "car_dropoff_location_type",
	"displayName": "Car Dropoff Location Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Valid values: AIRPORT, CITY"
},
{
	"name": "car_dropoff_airport",
	"displayName": "Car Dropoff Airport",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "3 letter airport code if dropoff location is airport"
},
{
	"name": "car_dropoff_city",
	"displayName": "Car Dropoff City",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "City name if dropoff location is city"
},
{
	"name": "car_dropoff_state",
	"displayName": "Car Dropoff State",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO state code for state if dropoff location is city - US & Canada only"
},
{
	"name": "car_dropoff_country",
	"displayName": "Car Dropoff Country",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "2 letter ISO country code if dropoff location is city"
},
{
	"name": "car_dropoff_time",
	"displayName": "Car Dropoff Time",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Dropoff time per dropoff timezone - 0000-2359"
},
{
	"name": "package_type",
	"displayName": "Package Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Indicate the combination of products included in the package - e.g. FLIGHT+HOTEL/HOTEL+CAR/FLIGHT+CRUISE/etc."
},
{
	"name": "total_conversion_value",
	"displayName": "Total Conversion Value",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Confirmation page only. Total conversion value of the hotel, car, flight or package booking - no currency symbol, 2 decimal places"
},
{
	"name": "order_id",
	"displayName": "Order Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Confirmation page only. Order ID of the booking"
},
{
	"name": "flight_carrier_code",
	"displayName": "Flight Carrier Code",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Confirmation page only. Airline code of booked flight"
},
{
	"name": "hotel_property_id",
	"displayName": "Hotel Property Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "ID of selected or booked hotel property"
},
{
	"name": "hotel_market_id",
	"displayName": "Hotel Market Id",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Market ID of searched, selected or booked hotel property"
},
{
	"name": "hotel_brand_code",
	"displayName": "Hotel Brand Code",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Chain code for hotel brand in user's search, or of selected/booked property"
},
{
	"name": "hotel_value_in_package",
	"displayName": "Hotel Value In Package",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Package Purchase amount of the hotel only - no currency symbol, 2 decimal places"
},
{
	"name": "conversion_type",
	"displayName": "Conversion Type",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Type of hotel product that was purchased (if applicable) - OPAQUE/RETAIL"
},
{
	"name": "promo_code",
	"displayName": "Promo Code",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Was there a promotion code applied? Y/N"
},
{
	"name": "car_class",
	"displayName": "Car Class",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Car class - ECONOMY/COMPACT/INTERMEDIATE/STANDARD/FULL-SIZE/PREMIUM/LUXURY/SUV/MINI-VAN/CONVERTIBLE/PICKUP-TRUCK"
},
{
	"name": "car_rental_agency",
	"displayName": "Car Rental Agency",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "The name of the car rental agency the user purchased with on the confirmation page - Enterprise/Avis/National/Budget/Hertz/Advantage/Dollar/Alamo/Fox/Ace/Thrifty/Alamo/Payless/E-Z"
},
{
	"name": "site_reporting_value_01",
	"displayName": "Site Reporting Value 01",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_02",
	"displayName": "Site Reporting Value 02",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_03",
	"displayName": "Site Reporting Value 03",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_04",
	"displayName": "Site Reporting Value 04",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_05",
	"displayName": "Site Reporting Value 05",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_06",
	"displayName": "Site Reporting Value 06",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "site_reporting_value_07",
	"displayName": "Site Reporting Value 07",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_01",
	"displayName": "Custom 01",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_02",
	"displayName": "Custom 02",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_03",
	"displayName": "Custom 03",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_04",
	"displayName": "Custom 04",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_05",
	"displayName": "Custom 05",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_06",
	"displayName": "Custom 06",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_07",
	"displayName": "Custom 07",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_08",
	"displayName": "Custom 08",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_09",
	"displayName": "Custom 09",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "custom_10",
	"displayName": "Custom 10",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "Intent Media System Value"
},
{
	"name": "IntentMediaRail",
	"displayName": "Intent Media Rail",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "The id of the div where the Intent Media Rail will be inserted"
},
{
	"name": "IntentMediaIntercard",
	"displayName": "Intent Media Intercard",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "The id of the div where the Intent Media Intercard will be inserted"
},
{
	"name": "IntentMediaFooter",
	"displayName": "Intent Media Footer",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"defaultValue": "",
	"help": "The id of the div where the Intent Media Footer will be inserted"
}
]
