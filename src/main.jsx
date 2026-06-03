import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Fade out the boot splash once the app has rendered.
function hideBootSplash() {
  const el = document.getElementById("boot-splash");
  if (!el) return;
  el.classList.add("hide");
  setTimeout(() => el.remove(), 500);
}
// Give the first paint a beat so the transition is visible, then hide.
requestAnimationFrame(() => setTimeout(hideBootSplash, 350));
