'use strict'

const http = require('./app')
const options = require('./config')
var cron = require('node-cron');


function obtenerPais(options,cb){

	http.request(options,(res)=>{
		var body = '';

		res.on('data',(chunck)=>{
			body+= chunck;
		});

		res.on('end',()=>{
			var obj = JSON.parse(body);
			cb(null,obj);
		});

		res.on('error',cb);

	})
	.on('error',cb)
	.end();
}

cron.schedule('* * * * *', function(){
	obtenerPais(options,(err,obj)=>{
		if(err){
			return console.log('Error durante la llamada al servicio',err);
		}
		console.log(obj);
	});
  console.log('running a task every minute');
});
