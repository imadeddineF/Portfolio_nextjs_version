import { React, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriterText = ({ name, className = "" }) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi! This is 3imad />",
      "Frontend Web Developer />",
      "Full-stack Web Developer />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Add event listener to detect color scheme change
  useEffect(() => {
    const handleColorSchemeChange = (e) => {
      const prefersDarkMode = e.matches;
      const cursor = document.getElementById("custom-cursor");
      if (cursor) {
        cursor.style.backgroundColor = prefersDarkMode ? "white" : "black";
      }
    };
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    colorSchemeQuery.addEventListener("change", handleColorSchemeChange);
    return () => {
      colorSchemeQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return (
    <div className={`text-4xl font-bold text-left  ${className}`}>
      <span>
        {name}
        {text}
      </span>
      <Cursor cursorColor="var(--cursor-color)" id="custom-cursor" />
    </div>
  );
};

export default TypeWriterText;
