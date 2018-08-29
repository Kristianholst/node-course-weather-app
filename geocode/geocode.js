// Geocode js


const request = require('request');

var geocode=(address,callback)=>{
    var encodedadress=encodeURIComponent(address);
request({
    url:`http://maps.google.com/maps/api/geocode/json?address=${address}&keyAIzaSyDeF2-kykAFR0h8OkN_xXZA3KQ6MtQ1OwE`,
    json:true
},function(error,response,body){
    if(error){
            callback('unable to connect');
    }else if(body.status ==='ZERO_RESULTS'){
        callback('Invalid adress or adress not found');
    }else if(body.status==='OK'){
        callback(undefined,{
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
})
}
;

module.exports={
    geocode
};