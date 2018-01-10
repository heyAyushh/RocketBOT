// hella

var restify = require('restify')
var builder = require('botbuilder')
var toggle = require('./toggle')

// Setup Restify Server
var server = restify.createServer()
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url)
})

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
})

// Listen for messages from users
server.post('/api/messages', connector.listen())
// Create our bot to listen in on the chat connector.

var bot = new builder.UniversalBot(connector, session => {
  session.beginDialog(' START ')
})

bot.dialog(' START ', [

  function (session) {
    builder.Prompts.choice(session, ' Wanna toggle me ?', ' Yeah | Nah ', { listStyle: builder.ListStyle.button })
  },

  function (session, results) {
    if (results.response.entity === ' Yeah ') {
      session.sendTyping()
      session.beginDialog('CHOICE')
    } else {
      session.sendTyping()
      session.send(' Never Mind 😅 ')
      session.endDialogWithResult(results)
    }
  }
])

bot.dialog('CHOICE', [
  function (session) {
    builder.Prompts.choice(session, ' You wanna turn me ? ', ' ON | OFF ', { listStyle: builder.ListStyle.button })
  },

  function (session, results) {
    if (results.response.entity === ' ON ') {
      session.beginDialog('ON')
    } else {
      session.beginDialog('OFF')
    }
  }
])

bot.dialog('ON', [
  function (session) {
    toggle.ON()
    session.send(' I turned it ON 💡')
    session.endDialogWithResult()
  }
])

bot.dialog('OFF', [
  function (session) {
    toggle.OFF()
    session.send(' I turned it OFF 💡')
    session.endDialogWithResult()
  }
])
