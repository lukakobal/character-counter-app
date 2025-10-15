import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container">
      <h1>🧮 Character Counter</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Vpiši besedilo..."
      />
      <div className="stats">
        <p>
          🔤 Število znakov: <span>{charCount}</span>
        </p>
        <p>
          📝 Število besed: <span>{wordCount}</span>
        </p>
      </div>
    </div>
  );
}
