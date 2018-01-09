// hella

var restify = require('restify')
var builder = require('botbuilder')

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

global.bot = new builder.UniversalBot(connector, session => {
  session.beginDialog(' start ')
})

bot.dialog(' start ', [

  function (session, next) {
    builder.Prompts.choice(session, ' Wanna toggle me ?', ' Yeah | Nah ')
  },
    /* builder.Prompts.confirm(session, 'Are you sure you wish to cancel your order?') */

  function (session, results, next) {
    if (session.results.response === ' Yeah ') {
      session.sendTyping()
      builder.Prompts.choice(session, ' You wanna turn me ? ', ' ON | OFF ')
    } else {
      session.sendTyping()
      session.send(' Never Mind 😅 ')
      session.endDialogWithResult(results)
    }
  },

  function (session, results) {
    if (session.results.response === ' ON ') {
      bot.beginDialog('ON')
    } else {
      if (session.results.response === ' OFF ') {
        bot.beginDialog('OFF')
      }
      session.endDialogWithResult(results)
    }
  }
])

bot.dialog('ON', [
  {
    function (session) {
    }
  }
])

bot.dialog('OFF', [
  {
    function (session) {}
  }
])

bot.dialog('CHOICE', [{
  function (session) {
    builder.Prompts.choice(session, ' You wanna turn me ? ', ' ON | OFF ')
  }
}
])
