import axios from 'axios';

export const get_mars_weather = () => {
    axios
        .get("https://api.maas2.apollorion.com/")
        .then((res) => {
            console.log(res.data, 'heres the response')
            return res.data
        })
        .catch((err) => {
            console.log('there was an issue getting response from nasa website', err)
            return err
        })
}

