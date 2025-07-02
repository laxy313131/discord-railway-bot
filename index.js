const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// Tokeni buraya yapıştır
const BOT_TOKEN = "NjkzNjQ4MTgxOTY3NDU0MzU1.GeFYFN.K6VXEu8pBvuV55TW0lvdTz-a0dt2zaI3G-nWvI";

client.once('ready', () => {
  console.log(`🤖 Bot aktif: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login(BOT_TOKEN);
