
'use strict'

var ObtenerTipoDatoJsonObject = function (jsonObject){
var classNameOfThing = typeof jsonObject;
switch (classNameOfThing) {
        case 'boolean'   : return classNameOfThing;
        case 'function'  : return function () {};
        case 'null'      : return null;
        case 'number'    : return "integer";
        case 'object'    : return {};
        case 'string'    : return classNameOfThing;
        case 'symbol'    : return Symbol();
        case 'undefined' : return void 0;
    }
}

var isArray = function (jsonProperty) {
	//return (!!jsonProperty) && (jsonProperty.constructor === Array);
    return Object.prototype.toString.call(jsonProperty) === '[object Array]';
}

var CreateProp = function (objectBody, propertyName, propertyValue)
  {
      objectBody[propertyName] = propertyValue;
      return objectBody;  
  };

var GetDefaultValue = function (type) {
    if (typeof type !== 'string') throw new TypeError('Type must be a string.');

    // Handle simple types (primitives and plain function/object)
    switch (type) {
        case 'boolean'   : return false;
        case 'function'  : return function () {};
        case 'null'      : return null;
        case 'integer'    : return 0;
        case 'object'    : return {};
        case 'string'    : return "";
        case 'symbol'    : return Symbol();
        case 'undefined' : return void 0;
    }

    try {
        // Look for constructor in this or current scope
        var ctor = typeof this[type] === 'function'
                   ? this[type]
                   : eval(type);

        return new ctor;

    // Constructor not found, return new object
    } catch (e) { return {}; }
}

var GenerarFieldListDataSetNumetric = function (inputJson, fieldsName, baseJson,count){

count++;
var fieldsNameActual = fieldsName + count;
baseJson[fieldsNameActual] = []; // empty Array, which you can push() values into

	for ( var prop in inputJson ) {

	    if(isArray(inputJson[prop])) {
	    	//se usuara para cuando se obtenga los rows
	    	//for (var i = 0; i < inputJson[prop].length; i++ ){GenerarFieldListDataSetNumetric(inputJson[prop][i],fieldsName,baseJson,count);}
	    	GenerarFieldListDataSetNumetric(inputJson[prop][0],fieldsName,baseJson,count);
	    }
	    else {
	    	var BodyJson = {};
	    	var dataType = ObtenerTipoDatoJsonObject(inputJson[prop]);
	    	var defaultValue = GetDefaultValue(dataType);
	    	BodyJson = CreateProp(BodyJson,"field",prop);
	    	BodyJson = CreateProp(BodyJson,"displayName",prop);
	    	BodyJson = CreateProp(BodyJson,"autocomplete",false);
	    	BodyJson = CreateProp(BodyJson,"type",dataType);
	    	if(dataType !=='string'){BodyJson = CreateProp(BodyJson,"default",defaultValue)};
	    	baseJson[fieldsNameActual].push(BodyJson);
	    }
	}
}

var GenerateDataSetsNumetricFromShopify = function(inputDataShopify){

var JsonResult = {};
JsonResult["DataSetList"] = [];
var JsonFieldsList = {};
var fieldsName = "fields";
var count =0;

GenerarFieldListDataSetNumetric(inputDataShopify.customers[0], fieldsName, JsonFieldsList,count);
count =0;

	for(var element in JsonFieldsList){
		var DataSet = {};
		count++;
		DataSet = CreateProp(DataSet,"name","DataSet"+count);
		DataSet = CreateProp(DataSet,"fields",JsonFieldsList[element]);
		DataSet = CreateProp(DataSet,"primaryKey","id");
	    DataSet = CreateProp(DataSet,"description","DataSet Shopify Generate Automatic");
	    JsonResult["DataSetList"].push(DataSet);
	}
return JsonResult;
}

var GenerateDataSetsNumetricFromMixPanel = function(inputDataMixPanel){

var JsonResult = {};
JsonResult["DataSetList"] = [];
var JsonFieldsList = {};
var fieldsName = "fields";
var count =0;

GenerarFieldListDataSetNumetric(inputDataMixPanel, fieldsName, JsonFieldsList,count);
count =0;

	for(var element in JsonFieldsList){
		var DataSet = {};
		count++;
		DataSet = CreateProp(DataSet,"name","DataSet"+count);
		DataSet = CreateProp(DataSet,"fields",JsonFieldsList[element]);
		DataSet = CreateProp(DataSet,"primaryKey","distinct_id");
	    DataSet = CreateProp(DataSet,"description","DataSet Mix Panel Generate Automatic");
	    JsonResult["DataSetList"].push(DataSet);
	}
return JsonResult;
}

function GenerateRowsFromMixPanel(inputDataMixPanel,JsonRows){	
	var Row = {};
		for(var element in inputDataMixPanel){
			Row = CreateProp(Row,element,inputDataMixPanel[element]);
		}
		JsonRows.push(Row);
}

module.exports = {
 GenerateDataSetsNumetricFromShopify : GenerateDataSetsNumetricFromShopify,
 GenerateDataSetsNumetricFromMixPanel : GenerateDataSetsNumetricFromMixPanel,
 GenerateRowsFromMixPanel : GenerateRowsFromMixPanel
}