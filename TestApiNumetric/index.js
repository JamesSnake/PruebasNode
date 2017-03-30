'use strict'

const http = require('./app')
const options = require('./config')
const rp = require('request-promise');

function obtenerDataSetNumetric(options){
	rp(options).then(response =>{
     console.log(response);
	});
}


obtenerDataSetNumetric(options);
