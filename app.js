const request = require('postman-request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


forecast(37.8267, -122.4233, (error, data) => {
    console.log(data)
  })






// geocode("Tallahassee", (error, data) => {
//     console.log("The place is " + data.name + " Latitude: " + data.latitude + " Longitude: " + data.longitude)
// })
  