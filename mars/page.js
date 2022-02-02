import axios from 'axios';
// import * as axios from './node_modules/axios/index.js';
//quick function to collect information about mars weather

const get_mars_weather = () => {
    axios
        .get("https://api.maas2.apollorion.com/")
        .then((res) => {
            console.log(res.data, 'heres the response')
            document.getElementById("marsWeatherSol").innerHTML = `Sol: ${res.data.sol}`;
            document.getElementById("marsWeatherMaxtemp").innerHTML = `Max Temperature: ${res.data.max_temp}c`
            document.getElementById("marsWeatherMintemp").innerHTML = `Min Temperature: ${res.data.min_temp}c`
            document.getElementById("marsWeatherPressure").innerHTML = `Pressure ${res.data.sol} Pa`
            document.getElementById("marsWeatherSunrise").innerHTML = `Sunrise: ${res.data.sunrise}`
            document.getElementById("marsWeatherSunset").innerHTML = `Sunset: ${res.data.sunset}`
            return res
        })
        .catch((err) => {
            console.log('there was an issue getting response from nasa website', err)
            return err
        })
}

get_mars_weather();



