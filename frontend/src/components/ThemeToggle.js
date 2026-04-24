import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}

export default ThemeToggle;