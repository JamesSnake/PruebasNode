'use strict'

const config = require("./config")
const mapper = require("json2json-transform")
const utils = require("./utilitario")
const rp = require('request-promise')
const inputsMixPanel = require("./exampleDataMixPanel")
const inputsShopify = require("./exampleDataShopify")
const datasetsShopify = require("./datasetsShopify")

function NumetricMixPanelFormat(inputData){
	var conf = new config();
 var result = mapper.transform(inputData, conf.parameters().plantillaJsonDestino, conf.operations);
 return result[""];
}

function NumetricShopifyFormat(inputData){
	return utils.GenerateDataSetsNumetricFromShopify(inputData);
}

function getDataSetNumetric(){
	var conf = new config();
	rp(conf.parameters().optionsGetDataSet).then(response =>{
     console.log(response);
	});
}

function getDataSetNumetricById(datasetId){
	var conf = new config(datasetId);
	rp(conf.parameters().optionsGetDataSetById).then(response =>{
     console.log(response);
	});
}

function generateDataSetNumetric(data){
	var conf = new config();
	rp(conf.parameters(data).optionsCreateDataSet).then(response =>{
     console.log(response);
	});
}

function updateRowsDataSetNumetric(datasetId,data){
	var conf = new config(datasetId);
	rp(conf.parameters(data).optionsUpdateRowsDataSet).then(response =>{
     console.log(response);
	});
}

function getRowsDataSetNumetric(datasetId){
	var conf = new config(datasetId);
	rp(conf.parameters().optionsGetRowsDataSet).then(response =>{
     console.log(response);
	});
}

function updateRowsMixPanel(inputMixPanel){
	var JsonResult = {};
	JsonResult["rows"] = [];
	if(utils.isArray(inputMixPanel)){
		for (var i = 0; i < inputMixPanel.length; i++ ){
			var row = NumetricMixPanelFormat(inputMixPanel[i]);
			utils.GenerateRowsFromMixPanel(row,JsonResult["rows"]);
		}
	} else {
			var row = NumetricMixPanelFormat(inputMixPanel);
			utils.GenerateRowsFromMixPanel(row,JsonResult["rows"]);
	}
	updateRowsDataSetNumetric("374bdb59-c2ce-49c6-b181-bfd8f6a36c8c",JsonResult);
}

function getRowsShopify(inputShopify,jsonListRows,namePrincipalList,namesSecondaryList){
	if(utils.isArray(inputShopify)){
			for (var i = 0; i < inputShopify.length; i++ ){
				utils.GenerateRowsListFromShopify(inputShopify[i],jsonListRows,namePrincipalList,namesSecondaryList);
			}
		} else {
				utils.GenerateRowsListFromShopify(inputShopify,jsonListRows,namePrincipalList,namesSecondaryList);
		}
}

function getRowsShopifyEvent(inputsShopify){
	var datasetId = "";
	var JsonResult = {};
	var namesDatasetChild =  ["hola","chau"];
	JsonResult["events"] = {};
	JsonResult["events"]["rows"]=[];
	getRowsShopify(inputsShopify,JsonResult,"events",namesDatasetChild);
	for(var property in JsonResult){
		switch (property) {
			case 'events'   : datasetId = datasetsShopify.datasetEventId.id; 
		}
		updateRowsDataSetNumetric(datasetId,JsonResult[property]);
	}
}

function getRowsShopifyCustomCollection(inputsShopify){
	var datasetId = "";
	var JsonResult = {};
	var namesDatasetChild =  ["hola","chau"];
	JsonResult["custom_collections"] = {};
	JsonResult["custom_collections"]["rows"]=[];
	getRowsShopify(inputsShopify,JsonResult,"custom_collections",namesDatasetChild);
	for(var property in JsonResult){
		switch (property) {
			case 'custom_collections'   : datasetId = datasetsShopify.datasetCustomCollectionId.id; 
		}
		updateRowsDataSetNumetric(datasetId,JsonResult[property]);
	}
}

function getRowsShopifyComment(inputsShopify){
	var datasetId = "";
	var JsonResult = {};
	var namesDatasetChild =  ["hola","chau"];
	JsonResult["comments"] = {};
	JsonResult["comments"]["rows"]=[];
	getRowsShopify(inputsShopify,JsonResult,"comments",namesDatasetChild);
	for(var property in JsonResult){
		switch (property) {
			case 'comments'   : datasetId = datasetsShopify.datasetCommentId.id; 
		}
		updateRowsDataSetNumetric(datasetId,JsonResult[property]);
	}
}

function getRowsShopifyProduct(inputsShopify){
	var datasetId = "";
	var JsonResult = {};
	var namesDatasetChild =  ["variants","options","images"];
	JsonResult["products"] = {};
	JsonResult["products"]["rows"]=[];
	JsonResult["variants"] = {};
	JsonResult["variants"]["rows"]=[];
	JsonResult["options"] = {};
	JsonResult["options"]["rows"]=[];
	JsonResult["images"] = {};
	JsonResult["images"]["rows"]=[];
	getRowsShopify(inputsShopify,JsonResult,"products",namesDatasetChild);
	for(var property in JsonResult){
		switch (property) {
			case 'products'   : datasetId = datasetsShopify.datasetProductId.id; break;
			case 'variants' : datasetId = datasetsShopify.datasetProductVariantId.id; break;
			case 'options' : datasetId = datasetsShopify.datasetProductOptionId.id; break;
			case 'images' : datasetId = datasetsShopify.datasetProductImagesId.id; break;
		}
		console.log(property);
		updateRowsDataSetNumetric(datasetId,JsonResult[property]);
	}
}

//var iMp = new inputsMixPanel();
//grabar datos en dataset mix panel
//updateRowsMixPanel(iMp.datamp);
//updateRowsMixPanel(iMp.inputMixPanel);

var iS = new inputsShopify(); 
//Grabar datos en datasetEvent
//getRowsShopifyEvent(iS.inputEvent.events);
//Grabar datos en datasetCustomCollection
//getRowsShopifyCustomCollection(iS.inputCustomCollection.custom_collections);
//Grabar datos en datasetComment
//getRowsShopifyComment(iS.inputComment.comments);
//Grabar datos en datasetProduct
//getRowsShopifyProduct(iS.inputProduct.products);

//generar data set
//MixPanel
/*
var conf = new config();
var finalFormatMixPanel = NumetricMixPanelFormat(inputsMixPanel.inputMixPanel)
var datasetmixpanel = utils.GenerateDataSetsNumetricFromMixPanel(finalFormatMixPanel);
//console.log(datasetmixpanel.DataSetList[0])
generateDataSetNumetric(datasetmixpanel.DataSetList[0]);
*/
//Shopify
var datasetshopify = utils.GenerateDataSetsNumetricFromShopify(iS.inputTransaction.transactions[0],"id");
utils.WriteFileTxt(JSON.stringify(datasetshopify));
console.log(datasetshopify);
//generateDataSetNumetric(datasetsShopify.datasetProductImages);



