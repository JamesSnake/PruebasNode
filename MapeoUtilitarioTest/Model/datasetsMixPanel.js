module.exports={
	datasetMixPanelEvent:{ 
  name: 'MixPanelEvent',
  fields:
   [ { field: 'event',
       displayName: 'event',
       autocomplete: false,
       type: 'string' },
     { field: 'distinct_id',
       displayName: 'distinct_id',
       autocomplete: false,
       type: 'string' },
     { field: 'time',
       displayName: 'time',
       autocomplete: false,
       type: 'datetime'},
     { field: 'origin',
       displayName: 'origin',
       autocomplete: false,
       type: 'string' },
     { field: 'origin_referrer',
       displayName: 'origin_referrer',
       autocomplete: false,
       type: 'string' },
     { field: 'initial_referring_domain',
       displayName: 'initial_referring_domain',
       autocomplete: false,
       type: 'string' },
     { field: 'referrer',
       displayName: 'referrer',
       autocomplete: false,
       type: 'string' },
     { field: 'initial_referrer',
       displayName: 'initial_referrer',
       autocomplete: false,
       type: 'string' },
     { field: 'referring_domain',
       displayName: 'referring_domain',
       autocomplete: false,
       type: 'string' },
     { field: 'os',
       displayName: 'os',
       autocomplete: false,
       type: 'string' },
     { field: 'origin_domain',
       displayName: 'origin_domain',
       autocomplete: false,
       type: 'string' },
     { field: 'tab',
       displayName: 'tab',
       autocomplete: false,
       type: 'string' },
     { field: 'browser',
       displayName: 'browser',
       autocomplete: false,
       type: 'string' },
     { field: 'Project ID',
       displayName: 'Project ID',
       autocomplete: false,
       type: 'string' },
     { field: 'mp_country_code',
       displayName: 'mp_country_code',
       autocomplete: false,
       type: 'string' } ],
  primaryKey: 'distinct_id',
  categories : ["MixPanel"],
  description: 'MixPanel Event' },
  datasetMixPanelEventId:""
}