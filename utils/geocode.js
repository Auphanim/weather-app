const request = require('postman-request')

const geocode = (address, callback) => {
    const url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidmFqcmFib2x0IiwiYSI6ImNrdXB1amhkeDNlOG8yd3Q5Y3ZzdXQxbTcifQ.1SmxSWd35QwVKDsJbfTHHg')
    
    request({url: url, json: true}, (error, response) => {
            if (error) {
                callback("Unable to connect to location services")
            } else if (response.body.features.length === 0) {
                callback("Location not found. Try another search.")
            } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                name: response.body.features[0].place_name
            })
            }
    })

}


module.exports = geocode