var config = function(Id) { this.datasetId=Id;};

config.prototype.parameters = function(data){ return {
	optionsGetDataSet:{
		uri: 'https://api-qa.numetric.com/v2/dataset',
		//port:80,
		//path: '',
		method: 'GET',
		headers:{'Authorization': 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'},
		json: true
	},
	optionsGetDataSetById:{
		uri: 'https://api-qa.numetric.com/v2/dataset/{datasetId}',
		//port:80,
		//path: '',
		method: 'GET',
		headers:{'Authorization': 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'},
		json: true
	},
	optionsCreateDataSet:{
		uri: 'https://api-qa.numetric.com/v2/dataset',
		//port:80,
		//path: '',
		method: 'POST',
		headers:{'Authorization': 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'},
		body:data,
		json: true
	},
	optionsUpdateRowsDataSet:{
		uri: 'https://api-qa.numetric.com/v2/dataset/'+this.datasetId+'/rows',
		//port:80,
		//path: '',
		method: 'POST',
		headers:{'Authorization': 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'},
		body:data,
		json: true
	},
	optionsGetRowsDataSet:{
		uri: 'https://api-qa.numetric.com/v2/dataset/{datasetId}/rows',
		//port:80,
		//path: '',
		method: 'GET',
		headers:{'Authorization': 'rJuUQBduBXsQGUN9AWmeUgC1SmYBKWISj8FTVrNzjZM%3D'},
		json: true
	},
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
	}
}
};

module.exports=config;