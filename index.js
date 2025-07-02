const { Client, GatewayIntentBits } = require("discord.js");

// BOT_TOKEN'u doğrudan buraya yapıştır
const BOT_TOKEN = "NjkzNjQ4MTgxOTY3NDU0MzU1.GeFYFN.K6VXEu8pBvuV55TW0lvdTz-a0dt2zaI3G-nWvI";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once("ready", () => {
  console.log(`🤖 Bot aktif: ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login(BOT_TOKEN);
