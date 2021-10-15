const request = require('postman-request')


const forecast = ((longitude, latitude, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key=4ce643d044ce94b4ab1d5c0a53d27f2f&query=' + encodeURIComponent(longitude) + ','+ encodeURIComponent(latitude))
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect with weather service" + url)
        } else if (response.body.error) {
            callback("Unable to find location")
        } else {
            callback(undefined, 'It is currently ' + response.body.current.weather_descriptions[0] + '. The temperature is currently ' + response.body.current.temperature + ' degrees outside. There is currently a ' + response.body.current.precip + '% chance of rain.')
        }
})
})


module.exports = forecast