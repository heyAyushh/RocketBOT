var mqtt = require('mqtt')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

var client = mqtt.connect({
  host: process.env.MQTThost,
  port: process.env.MQTTport,
  username: process.env.MQTTusername,
  password: process.env.MQTTpassword
})

client.on('connect', function () {
  client.subscribe(process.env.MQTTtopic)
  client.publish(process.env.MQTTtopic, 'Hello from the BOT side :p')
})

module.exports = {
  ON: function () {
    client.publish(process.env.MQTTtopic, '1')
  },
  OFF: function () {
    client.publish(process.env.MQTTtopic, '0')
  }
}
