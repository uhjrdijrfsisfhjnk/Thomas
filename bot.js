const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 console.log("welcome bot"); 
console.log("log");
});



client.login(process.env.BOT_TOKEN); 
