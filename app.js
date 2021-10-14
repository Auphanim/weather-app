const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=4ce643d044ce94b4ab1d5c0a53d27f2f&query=37.8267,-122.4233&units=f'

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Tallahassee.json?access_token=pk.eyJ1IjoidmFqcmFib2x0IiwiYSI6ImNrdXB1amhkeDNlOG8yd3Q5Y3ZzdXQxbTcifQ.1SmxSWd35QwVKDsJbfTHHg'

/* request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect with weather service")
    } else if (response.body.error) {
        console.log("Unable to find location")
    } else {
    console.log('It is currently ' + response.body.current.weather_descriptions[0] + '. The temperature is currently ' + response.body.current.temperature + ' degrees outside. There is currently a ' + response.body.current.precip + '% chance of rain.')
    }
}) */

request({url: geoUrl, json: true}, (error, response) => {
    if (error) {
        console.log(error)
    } else if (response.body.features.length === 0) {
        console.log("location not found")
    } else {
        console.log("Lattitude: " + response.body.features[0].center[1])
        console.log("Longitude: " + response.body.features[0].center[0])
    }
})