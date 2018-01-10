# Mqtt ChatBot Sample

![mqtt.js](https://raw.githubusercontent.com/mqttjs/MQTT.js/137ee0e3940c1f01049a30248c70f24dc6e6f829/MQTT.js.png)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

[![BOT Framework](https://docs.microsoft.com/en-us/azure/media/index/bot-service.svg)](https://docs.microsoft.com/en-us/bot-framework/)

[![HitCount](http://hits.dwyl.io/RocketBOT/https://github.com/heyAyushh/RocketBOT.svg)](http://hits.dwyl.io/RocketBOT/https://github.com/heyAyushh/RocketBOT)

This is a sample chatbot that can toggle a switch or relay ( MQTT Powered Device ).
IT first Subscribes to the same topic as the Relay/Switch
and Publishes as the Chatbot recieve Instructions.

## Installation

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/heyAyushh/RocketBOT)

### or install and run it Locally
>```git clone https://github.com/heyAyushh/RocketBOT ```
> ```cd RocketBOT && npm install```  
> ```node index.js```  

## Register the bot on Azure portal
>> https://dev.botframework.com/


## Set Environment Variables

> ```MQTThost```  // This is the IP of MQTT Broker   
> ```MQTTport```  // The port number of MQTT process  
> ```MQTTusername```  // The username of MQTT config, Leave it    empty if you don't have one  
> ```MQTTpassword```  // The password of MQTT config, Leave it empty if the above  
> ```MQTTtopic``` // MQTT topic on which the key is subscribed 
> ```MICROSOFT_APP_ID```  // Microsoft APP ID from Registration portal   
> ```MICROSOFT_APP_PASSWORD``` Microsoft APP secret from Registration Portal

<-----------------KUDOS-------------------------------------->