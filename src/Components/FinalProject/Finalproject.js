import React, { useState } from "react";
import './Finalproject.css'; 

function FinalProject() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = ({ length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars }) => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

    let characters = "";
    if (includeUppercase) characters += uppercase;
    if (includeLowercase) characters += lowercase;
    if (includeNumbers) characters += numbers;
    if (includeSpecialChars) characters += specialChars;

    if (characters === "") {
      alert("Please select at least one character set.");
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  const handleGenerate = () => {
    const password = generatePassword({
      length,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSpecialChars,
    });
    setGeneratedPassword(password);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className="password-container">
      <h2>Random Password Generator</h2>
      <div className="password-display">
        <input
          type="text"
          value={generatedPassword}
          readOnly
          placeholder="Click to Generate"
        />
        <button className="copy-button" onClick={handleCopy}>Copy</button>
      </div>
      <div className="slider-container">
        <label>Password Length:</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <span>{length}</span>
      </div>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Special Characters
        </label>
      </div>
      <button className="generate-button" onClick={handleGenerate}>Generate Password</button>
    </div>
  );
}

export default FinalProject;
