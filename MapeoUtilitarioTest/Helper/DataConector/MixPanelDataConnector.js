//   You put the mat down, and then you jump to conclusions
//module.exports = require('./lib/mixpanel');
const mixpanel = require('../../Component/mixpanel');
const config = require("../../Config/Config")



/*
lastUpdated = {
  from_date : '2017-03-11',
  to_date : '2017-03-12'
}
*/
var getEvents = function(lastUpdated,cb){

var conf = new config();
var mx = new mixpanel({
    api_secret: conf.parameters().apiSecretMixPanel //'447e92839ec3755e52b7c559ebe15d31'
});

console.log(conf.parameters().apiSecretMixPanel);
    var responseData=[];
    return mx.export_data({ from_date: lastUpdated.from_date, to_date: lastUpdated.to_date }, function(res) {
        res.on('data', function(event_object) {
            responseData.push(event_object);
        });
        res.on('end', function() {
            cb({error:false, response: responseData});
        });
        res.on('error', function(error) {
            console.log("Got error: " + e.message);
        });
    });
}

module.exports = {
    getEvents : getEvents
};