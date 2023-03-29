const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const fs = require('fs');

// Replace YOUR_API_TOKEN_HERE with your own API token
const token = 'TOKEN_TELE';
const bot = new TelegramBot(token, { polling: true });

// Create an empty array to store the monitoring URLs
let urls = [];

// Load the monitoring URLs from the JSON file if it exists
if (fs.existsSync('urls.json')) {
  const data = fs.readFileSync('urls.json');
  urls = JSON.parse(data);
}

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send the welcome message to the user
  bot.sendMessage(chatId, 'Welcome to the Server Monitoring Bot! This bot allows you to monitor your servers and websites and receive notifications when they go down. To get started, use the /add command to add a server or website to be monitored.\n\nBuilt by Mozfire');
});

bot.onText(/\/add (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  let url = match[1];

  // Add the http:// prefix if it is missing
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'http://' + url;
  }

  try {
    // Check if the server or website is up
    const response = await axios.get(url);
    if (response.status === 200) {
      // Add the URL to the array
      urls.push(url);
      // Save the array to the JSON file
      fs.writeFileSync('urls.json', JSON.stringify(urls));
      // Send a success message to the user
      bot.sendMessage(chatId, `Successfully added ${url} for monitoring.`);
    }
  } catch (error) {
    // Send an error message to the user
    bot.sendMessage(chatId, `Error adding ${url} for monitoring. Make sure the URL is correct and the server is up.`);
  }
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;

  // Send the help message to the user
  bot.sendMessage(chatId, 'Available commands:\n/add <url> - Add a server or website to be monitored.\n/list - Show all the monitoring links and IPs.\n/help - Show this help message.');
});

bot.onText(/\/list/, (msg) => {
  const chatId = msg.chat.id;

  if (urls.length === 0) {
    bot.sendMessage(chatId, 'No URLs are currently being monitored.');
  } else {
    let message = 'Currently monitoring the following URLs:\n';
    for (const url of urls) {
      message += `- ${url}\n`;
    }
    bot.sendMessage(chatId, message);
  }
});

setInterval(async () => {
  for (const url of urls) {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) {
        // Send a notification to the user if the server or website is down
        // TODO: Retrieve the user ID from the database
        const chatId = 123456789; // Replace with the user ID
        bot.sendMessage(chatId, `The server or website ${url} is down.`);
      }
    } catch (error) {
      // Send a notification to the user if there is an error
      // TODO: Retrieve the user ID from the database
      const chatId = 123456789; // Replace with the user ID
      bot.sendMessage(chatId, `There was an error checking the server or website ${url}.`);
    }
  }
}, 60000); // Check every 1 minute

// Send a message to the developer when the bot is ready
bot.on('polling_error', (error) => {
  console.log(error);
});
console.log('Server Monitoring Bot is running!');
console.log('Built by Mozfire'); // Replace with your own name or company name
