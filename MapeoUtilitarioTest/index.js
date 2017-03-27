'use strict'

const config = require("./config")
const mapper = require("json2json-transform")

var inputData = {"event":"Viewed report",
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
}}

var result = mapper.transform(inputData, config.plantillaJsonDestino, config.operations);
  console.log(result[""]);
//  console.log(JSON.stringify(result[""]));