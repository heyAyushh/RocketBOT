var mqtt = require('mqtt')

var client = mqtt.connect({
  host: process.env.MQTThost,
  port: process.env.MQTTport,
  username: process.env.MQTTusername,
  password: process.env.MQTTpassword
})

let topic = process.env.MQTTtopic

client.on('connect', function () {
  client.subscribe(topic)
  client.publish(topic, 'Hello from the BOT side :p')
})

/* client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
}) */

require('dotenv').config()
