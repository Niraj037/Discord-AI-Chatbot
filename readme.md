#  Discord AI Chatbot (LLaMA 3.3 70B)

A **multi-personality, multi-language** Discord chatbot powered by **Groq's LLaMA 3.3 70B** model. It mimics human-like conversations, remembers interactions, and switches personalities randomly (Gen-Z slang, roaster, Shakespearean, dark humor, philosopher).

---

## 🚀 Features
✅ **Groq AI-Powered Responses** 🤖 (LLaMA 3.3 70B Versatile Model)  
✅ **Memory System** 🧠 (Remembers last 5 messages per user)  
✅ **Random Personalities** 🎭 (Switches between different personas dynamically)  
✅ **Simple Setup** ⏳ (Just add API keys and run the bot)  

---

## 📦 Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/discord-ai-chatbot.git
cd discord-ai-chatbot
```

### 2️⃣ **Install Dependencies**
```sh
npm init -y
npm install discord.js dotenv groq-sdk
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file and add your API keys:
```
DISCORD_TOKEN=your-discord-bot-token
GROQ_API_KEY=your-groq-api-key
```

---

## 📝 Usage

### **Run the Bot**
```sh
node bot.js
```

### **Interact with the Bot**
- **Mention the bot** (`@BotName What do you think of AI?`)
- **Bot replies with a randomly chosen personality**

---

## 🎭 Personality Modes
The bot randomly picks one of the following personalities for each conversation:
1. **Gen-Z Slang Expert**  (Uses internet slang, memes, and sarcasm)
2. **Roaster & Dark Humor Comedian**  (Savage, witty, and edgy)
3. **Shakespearean Poet**  (Elegant old English responses)
4. **Street Gangster**  (Tough talk, slang-heavy style)
5. **Philosopher**  (Deep and intellectual responses)

---

## 🔧 Configuration
- **Modify personalities**: Edit the `personas` array in `bot.js` to add custom personalities.
- **Adjust memory size**: Change `memory[userId].slice(-10)` to a higher or lower value for longer/shorter memory.

---

## ❓ Troubleshooting
- **Bot is not responding?** Check if it's online and has the correct Discord permissions.
- **Invalid API key?** Make sure your `GROQ_API_KEY` is correct.
- **Message too long?** Discord has a 2000-character limit. The bot automatically truncates long responses.

---

## 📜 License
This project is open-source. Feel free to modify and enhance it!

---



