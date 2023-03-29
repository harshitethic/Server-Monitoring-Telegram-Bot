   <h1>Server Monitoring Telegram Bot by Harshit Sharma (HarshitEthic)</h1>
    <p>Hi, I am Harshit Sharma, also known as HarshitEthic. I have developed a Server Monitoring Telegram Bot to help users monitor their servers and websites. In this post, I will describe the code and how it works, and provide installation steps for setting up the bot on your own.</p>
    <h2>Description</h2>
<p>The Server Monitoring Telegram Bot is a useful tool to monitor the uptime of servers and websites. It periodically checks the status of added URLs and sends notifications to users if any server or website is down or encounters an error.</p>

<h3>Features</h3>
<ul>
    <li>Built using Node.js and node-telegram-bot-api library</li>
    <li>Easy to interact with the Telegram Bot API</li>
    <li>Allows adding, listing, and monitoring URLs</li>
    <li>Sends notifications to users if a server or website is down or encounters an error</li>
</ul>

<h3>Developer Information</h3>
<ul>
    <li>Name: Harshit Sharma</li>
    <li>Nickname: HarshitEthic</li>
    <li>Instagram: <a href="https://www.instagram.com/HarshitEthic/">https://www.instagram.com/HarshitEthic/</a></li>
    <li>GitHub: <a href="https://github.com/HarshitEthic">https://github.com/HarshitEthic</a></li>
    <li>Personal website: <a href="https://harshitethic.in/">https://harshitethic.in/</a></li>
</ul>

<h2>Installation Steps</h2>
<ol>
    <li>Install Node.js if you haven't already: <a href="https://nodejs.org/">https://nodejs.org/</a></li>
    <li>Clone the repository or download the code.</li>
    <li>Open a terminal/command prompt and navigate to the folder containing the bot code.</li>
    <li>Run <code>npm install</code> to install the required dependencies.</li>
</ol>

<h2>Configuration</h2>
<ol>
    <li>Replace <code>TOKEN_TELE</code> with your own Telegram Bot API token in the code.</li>
    <li>Replace the <code>chatId</code> variable in the <code>setInterval</code> function with the user ID.</li>
</ol>

<h2>Usage</h2>
<ol>
    <li>Run <code>node app.js</code> (or the name of the file containing the bot code) in the terminal/command prompt to start the bot.</li>
    <li>Open Telegram and start a chat with your bot.</li>
    <li>Use the following commands:
        <ul>
            <li><code>/start</code>: Sends a welcome message and introduces the bot.</li>
            <li><code>/add &lt;url&gt;</code>: Adds a server or website to be monitored.</li>
            <code>/help</code>: Shows a list of available commands and their descriptions.</li>
<li><code>/list</code>: Displays the list of currently monitored URLs.</li>
</ul>
</li>
<li>The bot will automatically check the status of the monitored URLs every minute and send notifications if any server or website is down or encounters an error.</li>
</ol>
<p>That's it! You have successfully set up and started using the Server Monitoring Telegram Bot by Harshit Sharma (HarshitEthic). Enjoy monitoring your servers and websites with ease!</p>
