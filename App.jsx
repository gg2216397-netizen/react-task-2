import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("counter");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  const [text, setText] = useState("");

  const inputRef = useRef(null);
  const focusInput = () => inputRef.current.focus();

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: darkMode ? "#333" : "#fff", 
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh"
    }}>
      <h1>Beginner React Example</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <hr />

      <h2>Live Preview</h2>
      <input
        ref={inputRef}
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>Preview: {text}</p>

      <hr />

      <h2>Dark/Light Mode</h2>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        Toggle Dark Mode
      </label>
    </div>
  );
}