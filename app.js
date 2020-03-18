const request = require('request');
const url = 'https://api.darksky.net/forecast/f26f4382a74961fd525730e0ab74ec9b/37.8267,-122.4233';

request.({url: url}, (error,response)=>{
    const data = JSON.parse(response.body);
    console.log(data);

})