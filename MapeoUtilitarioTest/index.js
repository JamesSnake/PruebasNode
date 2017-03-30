'use strict'

const config = require("./config")
const mapper = require("json2json-transform")
const utils = require("./utilitario")
const rp = require('request-promise');


function NumetricMixPanelFormat(inputData){
	var conf = new config();
 var result = mapper.transform(inputData, conf.plantillaJsonDestino, conf.operations);
 return result[""];
}

function NumetricShopifyFormat(inputData){
	return utils.GenerateDataSetsNumetricFromShopify(inputData);
}

function getDataSetNumetric(){
	var conf = new config();
	rp(conf.optionsGetDataSet).then(response =>{
     console.log(response);
	});
}

function getDataSetNumetricById(datasetId){
	var conf = new config();
	conf.optionsGetDataSetById.uri = conf.optionsGetDataSetById.uri.replace("{datasetId}",datasetId); 
	rp(conf.optionsGetDataSetById).then(response =>{
     console.log(response);
	});
}

function generateDataSetNumetric(data){
	var conf = new config();
	conf.optionsCreateDataSet.body = data;
	rp(conf.optionsCreateDataSet).then(response =>{
     console.log(response);
	});
}

function updateRowsDataSetNumetric(datasetId,data){
	var conf = new config();
	conf.optionsUpdateRowsDataSet.uri = conf.optionsUpdateRowsDataSet.uri.replace("{datasetId}",datasetId)
	conf.optionsUpdateRowsDataSet.body = data;
	rp(conf.optionsUpdateRowsDataSet).then(response =>{
     console.log(response);
	});
}

function getRowsDataSetNumetric(datasetId){
	var conf = new config();
	conf.optionsGetRowsDataSet.uri = conf.optionsGetRowsDataSet.uri.replace("{datasetId}",datasetId)
	rp(conf.optionsGetRowsDataSet).then(response =>{
     console.log(response);
	});
}



function updateRowsMixPanel(inputMixPanel){
	var JsonResult = {};
	JsonResult["rows"] = [];
	for (var i = 0; i < inputMixPanel.length; i++ ){
		var row = NumetricMixPanelFormat(inputMixPanel[i]);
		utils.GenerateRowsFromMixPanel(row,JsonResult["rows"]);
	}
	updateRowsDataSetNumetric("1783de12-d4ba-41f9-a0f2-8d6ce9b9bdf4",JsonResult);
}

var datamp = [
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486793881,
      "distinct_id": "094223fe-4009-42c7-aa10-e0e70de59aa2",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Draper",
      "$current_url": "https://cloud.numetric.com/documents",
      "$initial_referrer": "$direct",
      "$initial_referring_domain": "$direct",
      "$lib_version": "2.10.0",
      "$os": "Mac OS X",
      "$region": "Utah",
      "$screen_height": 900,
      "$screen_width": 1440,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Datasets App",
    "properties": {
      "time": 1486794011,
      "distinct_id": "094223fe-4009-42c7-aa10-e0e70de59aa2",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Draper",
      "$current_url": "https://cloud.numetric.com/datawarehouse",
      "$initial_referrer": "$direct",
      "$initial_referring_domain": "$direct",
      "$lib_version": "2.10.0",
      "$os": "Mac OS X",
      "$referrer": "https://cloud.numetric.com/documents",
      "$referring_domain": "cloud.numetric.com",
      "$region": "Utah",
      "$screen_height": 900,
      "$screen_width": 1440,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486795317,
      "distinct_id": "68a671f1-9d72-40da-89f3-89b530be8fe0",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Hurricane",
      "$current_url": "https://cloud.numetric.com/documents",
      "$initial_referrer": "$direct",
      "$initial_referring_domain": "$direct",
      "$lib_version": "2.10.0",
      "$os": "Mac OS X",
      "$referrer": "https://cloud.numetric.com/signin",
      "$referring_domain": "cloud.numetric.com",
      "$region": "Utah",
      "$screen_height": 900,
      "$screen_width": 1440,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486810955,
      "distinct_id": "7260c156-07b0-4c9f-8be2-49bf2a85ca32",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Randolph Township",
      "$current_url": "https://cloud.numetric.com/documents#/",
      "$initial_referrer": "https://cloud.numetric.com/datawarehouse",
      "$initial_referring_domain": "cloud.numetric.com",
      "$lib_version": "2.10.0",
      "$os": "Windows",
      "$referrer": "https://cloud.numetric.com/signin?%27returnUrl=%2Fsettings",
      "$referring_domain": "cloud.numetric.com",
      "$region": "New Jersey",
      "$screen_height": 864,
      "$screen_width": 1536,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486816702,
      "distinct_id": "7260c156-07b0-4c9f-8be2-49bf2a85ca32",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Randolph Township",
      "$current_url": "https://cloud.numetric.com/documents#/",
      "$initial_referrer": "https://cloud.numetric.com/datawarehouse",
      "$initial_referring_domain": "cloud.numetric.com",
      "$lib_version": "2.10.0",
      "$os": "Windows",
      "$referrer": "https://cloud.numetric.com/signin?%27returnUrl=%2Fsettings",
      "$referring_domain": "cloud.numetric.com",
      "$region": "New Jersey",
      "$screen_height": 864,
      "$screen_width": 1536,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486819421,
      "distinct_id": "1c3868e4-5867-45d3-a11f-8c26aa74fd5c",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Saratoga Springs",
      "$current_url": "https://dni.numetric.com/documents#/report/92a112c9-5d42-44ab-8f69-aec9b7acbba5/entity/B-2 A",
      "$initial_referrer": "https://test.firegauge.com/firegauge/operations/tour/",
      "$initial_referring_domain": "test.firegauge.com",
      "$lib_version": "2.10.0",
      "$os": "Mac OS X",
      "$referrer": "https://test.firegauge.com/firegauge/operations/tour/",
      "$referring_domain": "test.firegauge.com",
      "$region": "Utah",
      "$screen_height": 900,
      "$screen_width": 1440,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  },
  {
    "event": "Load Documents App",
    "properties": {
      "time": 1486819666,
      "distinct_id": "1c3868e4-5867-45d3-a11f-8c26aa74fd5c",
      "$browser": "Chrome",
      "$browser_version": 56,
      "$city": "Saratoga Springs",
      "$current_url": "https://dni.numetric.com/documents#/report/92a112c9-5d42-44ab-8f69-aec9b7acbba5/entity/B-2 A",
      "$initial_referrer": "https://test.firegauge.com/firegauge/operations/tour/",
      "$initial_referring_domain": "test.firegauge.com",
      "$lib_version": "2.10.0",
      "$os": "Mac OS X",
      "$referrer": "https://test.firegauge.com/firegauge/operations/tour/",
      "$referring_domain": "test.firegauge.com",
      "$region": "Utah",
      "$screen_height": 900,
      "$screen_width": 1440,
      "mp_country_code": "US",
      "mp_lib": "web"
    }
  }
];

//updateRowsMixPanel(datamp);

getRowsDataSetNumetric("1783de12-d4ba-41f9-a0f2-8d6ce9b9bdf4");

/*
//generar data set
var conf = new config();
var finalFormatMixPanel = NumetricMixPanelFormat(conf.inputMixPanel)
var datasetmixpanel = utils.GenerateDataSetsNumetricFromMixPanel(finalFormatMixPanel);
generateDataSetNumetric(datasetmixpanel.DataSetList[0]);*/

//getDataSetNumetricById("c764608f-a08c-49a8-8051-b5f6a4f3e087");

//console.log(NumetricShopifyFormat(config.inputShopify));
 // console.log(result[""]);
//  console.log(JSON.stringify(result[""]));
//var baseJson = {};
//var fieldsName = "fields";
//var count =0;
/*var BodyJson = {};
baseJson[fieldsName] = [];
BodyJson = utils.CreateProp(BodyJson,"prope","valueprop");
baseJson[fieldsName].push(BodyJson);*/
//console.log(config.inputShopify.customers[0]);
//utils.GenerarFieldListDataSetNumetric(config.inputShopify.customers[0], fieldsName, baseJson,count);
//console.log(JSON.stringify(baseJson));
//console.log(baseJson);