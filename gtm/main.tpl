___INFO___

{
	"type": "TAG",
	"id": "im_sca_event",
	"version": 1,
	"displayName": "Intent Media - Events",
        "brand": {"id": "intent_media",
                  "displayName": "Intent Media",
                  "logo": "intent_media_logo.png"
                 },
        "description": "Fires Intent Media events in conjunction with Search Compare Ads tag",
        "help": "Please contact PIE@intentmedia.com for assistance" 
}

___JS_TEMPLATE___ im_sca_event_gtm.js

___NOTES___
Please whitelist the account AW_IM under andrew.wolfram@intentmedia.com
Please contact andrew.wolfram@intentmedia.com with any questions

___TEMPLATE_PARAMETERS___

[
{
	"name": "im_event",
	"displayName": "Intent Media Event",
	"displayStyles": ["PARAM_NAME_IS_INLINE"],
	"type": "SELECT",
	"notSetText": "not set",
	"macrosInSelect": true,,
	"valueValidators": ["NON_EMPTY"],
	"defaultValue": "",
	"help": "Intent Media event to be fired on page (e.g., open_exit_unit)"
}
]
