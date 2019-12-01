const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'https://api.darksky.net/forecast/c46a55ae8dde2d5df2b7aa326bd485e1/' + longitude + ',' + latitude + '?units=si'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      const msg = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. The high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is ' + body.currently.precipProbability + '%' + ' chance of rain.'
      callback(undefined, msg)
    }
  })
}

module.exports = forecast