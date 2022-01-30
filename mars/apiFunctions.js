const axios = require('axios')
API_KEY = process.env.API_KEY;

function parseMarsData(json){

}

function get_mars_weather(){
    axios
        .get("https://api.maas2.apollorion.com/")
        .then((res) => {
            console.log(res, 'heres the response')
            return res
        })
        .catch((err) => {
            console.log('there was an issue getting response from nasa website', err)
            return err
        })
}


get_mars_weather();



