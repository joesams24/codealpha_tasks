import React, { useState, useEffect } from "react";
import faqData from "./faqData";

const preprocess = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter((word) => word.length > 1)
    .join(" ");
};

const computeSimilarity = (vec1, vec2) => {
  const words = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
  let dot = 0, mag1 = 0, mag2 = 0;
  words.forEach((w) => {
    const v1 = vec1[w] || 0;
    const v2 = vec2[w] || 0;
    dot += v1 * v2;
    mag1 += v1 * v1;
    mag2 += v2 * v2;
  });
  return dot / (Math.sqrt(mag1) * Math.sqrt(mag2) || 1);
};

const toTF = (text) => {
  const words = text.split(" ");
  const tf = {};
  words.forEach((w) => (tf[w] = (tf[w] || 0) + 1));
  return tf;
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [processed, setProcessed] = useState([]);

  useEffect(() => {
    setProcessed(faqData.map((f) => toTF(preprocess(f.question))));
  }, []);

  const getBestMatch = (userInput) => {
    const userTF = toTF(preprocess(userInput));
    let bestIndex = -1;
    let bestScore = 0;

    processed.forEach((faqVec, i) => {
      const sim = computeSimilarity(userTF, faqVec);
      if (sim > bestScore) {
        bestScore = sim;
        bestIndex = i;
      }
    });

    return bestScore > 0.2
      ? faqData[bestIndex].answer
      : "Sorry, I couldn't find a relevant answer. Please rephrase.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input };
    const botMsg = { sender: "Bot", text: getBestMatch(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">💻 Laptop FAQ Chatbot</div>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender.toLowerCase()}`}>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Ask your laptop-related question..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
};

export default ChatBot;
