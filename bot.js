const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "H";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`B3ACHWA2IYAT L9ADAR T7NA M3A WLAD L9HAB`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});





client.login(process.env.BOT_TOKEN);
