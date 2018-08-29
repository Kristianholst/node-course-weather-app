const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
    .options({
     a: {
        demand:true,
        alias:'address',
        describe:'Address to fetch weater for',
        string: true
     }   
    })
    .help()
    .alias('help','h')
    .argv;

console.log(argv);


var encodedaddress=encodeURIComponent(argv.address);
const apkeydark= '9222c1ee78017bff873771be5147693b'
var geocodeurl=`http://maps.google.com/maps/api/geocode/json?address=${encodedaddress}&keyAIzaSyDeF2-kykAFR0h8OkN_xXZA3KQ6MtQ1OwE`;

axios.get(geocodeurl).then((response)=>{
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
        console.log(response.data);
        var lat =response.data.results[0].geometry.location.lat;
        var lng =response.data.results[0].geometry.location.lng;
        var forecasturl=`https://api.darksky.net/forecast/${apkeydark}/${lat},${lng}?units=si`;
        return axios.get(forecasturl);

        

    }).then((response)=>{
    var temperature= response.data.currently.temperature;
    var actualtemp= response.data.currently.apparentTemperature;
    console.log(`Its ${temperature} but feels like ${actualtemp}`);
    }) .catch((error)=>{
    if(error.code === 'ENOTFOUND'){
        console.log('Unable to find apiservers');
    }
    else {
        console.log(error.message);
    }
});