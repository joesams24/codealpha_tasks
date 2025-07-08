import React, { useState } from "react";
import './SimpleTranslatorUI.css';

const Translator = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("fr");

  const translateText = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("from", sourceLang);
    encodedParams.append("to", targetLang);
    encodedParams.append("text", text);

    try {
      const response = await fetch("https://google-translate113.p.rapidapi.com/api/v1/translator/text", {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key": "7020abf660msh38f5824894e181cp18377bjsn92621895f03b",
          "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
        },
        body: encodedParams,
      });

      const result = await response.json();

      if (result.trans) {
        setTranslatedText(result.trans);
      } else {
        setTranslatedText("⚠️ Translation failed. Try different text or language.");
      }
    } catch (error) {
      console.error("Translation failed", error);
      setTranslatedText("❌ API error occurred. Please try again.");
    }
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(translatedText);
      alert("✅ Translated text copied!");
    } catch (err) {
      alert("❌ Failed to copy.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🌐 Language Translator</h2>

      <textarea
        rows="5"
        cols="80"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
      />
      <br />

      <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="fr">French</option>
      </select>

      <span style={{ margin: "0 10px" }}>→</span>

      <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
        <option value="fr">French</option>
      </select>

      <br /><br />
      <button onClick={translateText}>Translate</button>

      {translatedText && (
        <div style={{ marginTop: "20px" }}>
          <h4>Translated Text:</h4>
          <div style={{ padding: "10px", border: "1px solid #ccc", background: "#f0f0f0" }}>
            {translatedText}
          </div>
          <br />
          <button onClick={copyText}>📋 Copy</button>
        </div>
      )}
    </div>
  );
};

export default Translator;
