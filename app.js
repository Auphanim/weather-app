const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=4ce643d044ce94b4ab1d5c0a53d27f2f&query=37.8267,-122.4233&units=f'

request({url: url, json: true}, (error, response) => {
    console.log('It is currently ' + response.body.current.weather_descriptions[0] + '. The temperature is currently ' + response.body.current.temperature + ' degrees outside. There is currently a ' + response.body.current.precip + '% chance of rain.')
})