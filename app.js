const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const yargs = require('yargs')
const chalk = require('chalk')

const address = process.argv[2]

geocode(address, (error, { latitude, longitude, location} = {}) => {
    if (!address) {
        return console.log("Error: Undefined location. Please enter location data.")
    } 
    if (error) {
        return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log("Weather report for: " + location)
        console.log(forecastData)
      })  
})