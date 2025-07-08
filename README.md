# Task 1 – Language Translator Web App

### 💼 Internship Project by: **JOEL SAMUEL. J**
📅 Date: 14/06/2025  
📧 Contact: joelad043@rmkcet.ac.in

---

## 📌 Project Overview

This project is a simple React-based **Language Translator Web App** that allows users to:

- Enter custom text.
- Select source and target languages.
- Get the translated output using an API (Google Translate API via RapidAPI).

---

## 🚀 Features

- 🌐 Translation between English, Hindi, and Spanish.
- ✍️ Input box for typing custom text.
- 🔁 Language selectors with direction arrow.
- 📤 "Translate" button to fetch and display translated text.
- 🎨 Neat, responsive UI styled with CSS.

---

## 🧪 Technologies Used

- **React.js** (Frontend)
- **Google Translate API (via RapidAPI)**
- **HTML/CSS**
- **Fetch API**

---

## 🛠️ Installation & Setup

1. **Clone the repository or create a new React app**:
   ```bash
   npx create-react-app translate-app
   cd translate-app
Add the required files:

SimpleTranslatorUI.jsx (component)

SimpleTranslatorUI.css (style file)

Import the component inside App.js

Install dependencies (if needed):

bash
Copy
Edit
npm install
Start the app:

bash
Copy
Edit
npm start
🔐 API Setup
Visit: Google Translate API on RapidAPI

Subscribe to the API and get your X-RapidAPI-Key

Replace the key in SimpleTranslatorUI.jsx:

js
Copy
Edit
'X-RapidAPI-Key': 'YOUR_API_KEY_HERE'
📸 UI Preview
The UI is designed to look clean and mobile-friendly with a centered container and card-like layout.

📄 License
This project is created as part of internship work and is intended for educational use only.


#Task2- 💬 Laptop FAQ ChatBot (React + Cosine Similarity)

This is a simple React-based chatbot that answers frequently asked questions about laptop purchases using **cosine similarity** for text matching — all running in the browser without any backend or external APIs.

---

## 🚀 Features

- ✅ 100% frontend-only chatbot
- 🧠 Text preprocessing and cosine similarity for matching questions
- 💡 Preloaded FAQ database (you can expand it to 100+)
- 🧼 Clean and responsive UI using CSS
- ⚡ Fast and lightweight (no heavy dependencies)

---

## 📁 Project Structure

ChatBotFAQ-app/
├── src/
│ ├── App.js # Entry point
│ ├── ChatBot.js # Chat logic & UI
│ ├── ChatBot.css # UI styling
│ └── faqData.js # FAQ data (add up to 100 Q&As)
├── public/
│ └── index.html
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🛠️ Installation


# Step 1: Create the React app (if not already)
npx create-react-app chatbotfaq-app
cd chatbotfaq-app

# Step 2: Replace src/ with the provided files (App.js, ChatBot.js, ChatBot.css, faqData.js)

# Step 3: Start the development server
npm start
💬 How It Works
User inputs a question

The app preprocesses the text (removing punctuation, lowercasing, removing short words)

It converts all FAQ questions and the user's query into term-frequency (TF) vectors

It uses cosine similarity to find the most similar question from the FAQ list

Returns the best-matched answer (if similarity > 0.2) or a fallback message

📌 Sample Questions
Try asking things like:

"Is 8GB RAM enough?"

"What's the difference between SSD and HDD?"

"Should I get a Windows or Mac?"

"Do I need antivirus?"

"Which is the best laptop for students?"

🖼️ Preview


🧩 To Do
 Add voice input

 Group questions by category

 Dark mode toggle

 Add search suggestions

👨‍💻 Developed by
JOEL SAMUEL. J
📧 Email: joelad043@rmkcet.ac.in
📅 Date: 14/06/2025
🔬 Task 2 — Internship Project: Laptop FAQ ChatBot

📄 License
This project is for educational and internship purposes. Feel free to modify and expand it for your own learning or university submissions.
