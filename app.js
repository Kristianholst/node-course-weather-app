
const yargs=require('yargs');

const geocode=require('./geocode/geocode.js');
const api =require('./weatherapi/api.js');

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



geocode.geocode(argv.address,(errormessage,results)=>{
 if(errormessage){
     console.log(errormessage);
 }else{
     console.log(results.address);
     api.api(40,-50, (errormessage,weatherresults)=>{
         if(errormessage){
             console.log(errormessage);
         }else{
          console.log(JSON.stringify(weatherresults,undefined,2));   
         }
    });
 }
 });

 debugger;
