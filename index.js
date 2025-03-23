require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const Groq = require('groq-sdk');

// Load API keys from .env
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

// Initialize Groq SDK
const groq = new Groq({ apiKey: GROQ_API_KEY });

// Personality presets (bot randomly selects one)
const personas = [
    { role: "system", content: "You're a sarcastic Gen-Z internet troll. Use slang, be edgy, and roast people but keep it funny." },
    { role: "system", content: "You're an old-school gangster who talks tough and disses people like a street rapper." },
    { role: "system", content: "You're an elegant Shakespearean poet, responding in dramatic old English." },
    { role: "system", content: "You're a dark humor comedian with a brutal, no-filter attitude." },
    { role: "system", content: "You're a super intellectual AI who speaks in complex, philosophical terms." }
];

// Function to get a random persona
function getRandomPersona() {
    return personas[Math.floor(Math.random() * personas.length)];
}

// Function to query Groq API with a personality
async function queryGroq(prompt) {
    try {
        const persona = getRandomPersona(); // Select a random personality
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                persona, // Apply the personality
                { role: "user", content: prompt }
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 1.5,
            max_completion_tokens: 1024,
            top_p: 1
        });

        let response = chatCompletion.choices[0].message.content;

        // Ensure the response is within Discord's 2000-character limit
        if (response.length > 2000) {
            response = response.slice(0, 1997) + "..."; // Truncate and add "..."
        }

        return response;
    } catch (error) {
        console.error("Error querying Groq API:", error);
        return "Bruh, I ain't feelin' it right now. Try again later.";
    }
}

// Initialize Discord bot
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

// Event: Bot ready
client.once("ready", () => {
    console.log(`🤖 Logged in as ${client.user.tag}`);
});

// Event: Handle messages
client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    // If the bot is mentioned, respond
    if (message.mentions.has(client.user)) {
        const prompt = message.content.replace(`<@${client.user.id}>`, "").trim();
        if (!prompt) {
            await message.reply("Yo, wassup? What you need?");
            return;
        }

        // Query Groq API with a random personality
        const response = await queryGroq(prompt);
        await message.reply(response);
    }
});

// Login bot
client.login(DISCORD_TOKEN);
