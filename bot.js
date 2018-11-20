const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', msg => {
var prefix = "H";//البرفكس
  var args = msg.content.split(' ').slice(1);
  var argresult = args.join(' ');
if (msg.author.bot) return;
if(msg.content.startsWith(prefix + "setstream")) {
      if(msg.author.id != "485917652120764429") return msg.reply("هذا الامر لصحاب الحساب");
      client.user.setGame(${argresult},"http://twitch.tv/S-F%22")
      var Die = new Discord.RichEmbed()
      .setTitle(":white_check_mark:تم تغير الستريمنق الخاص بك")
     .addField("New Stream",${argresult}, true)
     msg.channel.sendEmbed(Die);
}
});






client.login(process.env.BOT_TOKEN);
