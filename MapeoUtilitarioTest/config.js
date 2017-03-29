module.exports={
	operations:[], //aqui se puede configurar valores por defecto en este caso no aplica dont apply
	plantillaJsonDestino: 
	{
	"event":"$.event",
	"distinct_id":"$.properties.distinct_id",
	"time":"$.properties.time",
	"origin":"$.properties.origin",
	"origin_referrer":"$.properties.origin_referrer",
	"initial_referring_domain":"$.properties.$initial_referring_domain",
	"referrer":"$.properties.$referrer",
	"initial_referrer":"$.properties.$initial_referrer",
	"referring_domain":"$.properties.$referring_domain",
	"os":"$.properties.$os",
	"origin_domain":"$.properties.origin_domain",
	"tab":"$.properties.tab",
	"browser":"$.properties.$browser",
	"Project ID":"$.properties.Project ID",
	"mp_country_code":"$.properties.mp_country_code"
	},
	inputMixPanel : {
	"event":"Viewed report",
		"properties":{
		"distinct_id":"foo",
		"time":1329263748,
		"origin":"invite",
		"origin_referrer":"http://mixpanel.com/projects/",
		"$initial_referring_domain":"mixpanel.com",
		"$referrer":"https://mixpanel.com/report/3/stream/",
		"$initial_referrer":"http://mixpanel.com/",
		"$referring_domain":"mixpanel.com",
		"$os":"Linux",
		"origin_domain":"mixpanel.com",
		"tab":"stream",
		"$browser":"Chrome",
		"Project ID":"3",
		"mp_country_code":"US"
		}
	},
	inputShopify: {
		"customers": [
				    {
				      "id": 207119551,
				      "email": "bob.norman@hostmail.com",
				      "accepts_marketing": false,
				      "created_at": "2017-01-16T17:03:18-05:00",
				      "updated_at": "2017-01-16T17:03:18-05:00",
				      "first_name": "Bob",
				      "last_name": "Norman",
				      "orders_count": 1,
				      "state": "disabled",
				      "total_spent": "41.94",
				      "last_order_id": 450789469,
				      "note": null,
				      "verified_email": true,
				      "multipass_identifier": null,
				      "tax_exempt": false,
				      "phone": null,
				      "tags": "",
				      "last_order_name": "#1001",
				      "default_address": {
				        "id": 207119551,
				        "first_name": null,
				        "last_name": null,
				        "company": null,
				        "address1": "Chestnut Street 92",
				        "address2": "",
				        "city": "Louisville",
				        "province": "Kentucky",
				        "country": "United States",
				        "zip": "40202",
				        "phone": "555-625-1199",
				        "name": "",
				        "province_code": "KY",
				        "country_code": "US",
				        "country_name": "United States",
				        "default": true
				      },
				      "addresses": [
				        {
				          "id": 207119551,
				          "first_name": null,
				          "last_name": null,
				          "company": null,
				          "address1": "Chestnut Street 92",
				          "address2": "",
				          "city": "Louisville",
				          "province": "Kentucky",
				          "country": "United States",
				          "zip": "40202",
				          "phone": "555-625-1199",
				          "name": "",
				          "province_code": "KY",
				          "country_code": "US",
				          "country_name": "United States",
				          "default": true
				        }
				      ]
				    }
				  ]
				}
}