"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false);

  function toggle() {
    const next = !dark;

    // Suppress all transitions during the switch so links/text don't
    // flash by animating their color change at different speeds.
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode("*{transition:none !important}")
    );
    document.head.appendChild(style);

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // Force a reflow so the color change applies while transitions are
    // off, then restore transitions on the next frame.
    window.getComputedStyle(document.body).getPropertyValue("opacity");
    requestAnimationFrame(() => {
      document.head.removeChild(style);
    });
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed top-4 right-6 text-lg opacity-60 hover:opacity-100 transition-opacity"
    >
      {dark ? "☀︎" : "☽"}
    </button>
  );
}
