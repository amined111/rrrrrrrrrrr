const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "H";


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "426033902319304705") return;
 
if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/taino118");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
}

});


client.login(process.env.BOT_TOKEN);
