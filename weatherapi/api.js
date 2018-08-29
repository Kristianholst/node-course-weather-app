
const apkeydark= '9222c1ee78017bff873771be5147693b'
const request = require('request');


var api=(latitude,longitude,callback)=>{ 
  request({
    url:`https://api.darksky.net/forecast/${apkeydark}/${latitude},${longitude}`,
    json:true
},(error,response,body)=>{
    if(error){
            callback("Unable to connect!");
       }else if(response.statusCode===400){
            callback('Unable to fetch weather');
       }else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};
debugger;


 module.exports={
    api
};
