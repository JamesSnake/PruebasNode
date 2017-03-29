'use strict'

const config = require("./config")
const mapper = require("json2json-transform")
const utils = require("./utilitario")


function NumetricMixPanelFormat(inputData){
 var result = mapper.transform(inputData, config.plantillaJsonDestino, config.operations);
 return result[""];
}

function NumetricShopifyFormat(inputData){
	return utils.GenerateDataSetsNumetricFromShopify(inputData);
}

console.log(NumetricShopifyFormat(config.inputShopify));

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