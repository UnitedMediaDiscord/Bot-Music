const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const music = require('discord.js-musicbot-addon');

var express = require('express');
var app = express();

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

//console.log ping recieved from Uptimebot (used to keep project online even after 5 minutes of innactivity)
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

music.start(client, {
  youtubeKey: "AIzaSyADnAZOce6eDhwhcd5lCc0NpsLRdOpUQrk",
  botPrefix: "u!",
  help: {
    enabled: false
  }
});
    
client.on('ready', () => {
    console.log(`Bot Online!`);
});

client.on('message', message => {
    var args = message.content.split(/[ ]/);
    var command = args[0].slice(config.prefix.length).toLowerCase();
  
    if(!message.content.startsWith(config.prefix)) return;

if(command === "ping") {
   message.channel.send(`pong - music`)
}

});
client.login("NDczMDkyNzMyMDQzMjY0MDAx.DuPoQA.4yFZf6ia9HT4eP99iEcOREhxfEc");
