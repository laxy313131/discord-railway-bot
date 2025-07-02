const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const BOT_TOKEN = "MTM4OTgyMDEwOTEwNjg0MzcxOQ.GiDYb1.95hXJNEiVC58yWiL5vZqcsCV1cH3uHpnt_4kEs";

client.once('ready', () => {
  console.log(`🤖 Bot aktif: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login(BOT_TOKEN);
