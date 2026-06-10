"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-accent"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.getAttribute("data-accent") === "blue"
    ? "blue"
    : "orange";
}

export default function AccentToggle() {
  const accent = useSyncExternalStore(subscribe, getSnapshot, () => "orange");
  const isBlue = accent === "blue";

  function toggle() {
    const next = isBlue ? "orange" : "blue";
    if (next === "blue") {
      document.documentElement.setAttribute("data-accent", "blue");
    } else {
      document.documentElement.removeAttribute("data-accent");
    }
    localStorage.setItem("accent", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={`Switch accent to ${isBlue ? "orange" : "blue"}`}
      title={`Switch accent to ${isBlue ? "orange" : "blue"}`}
      className="fixed top-4 right-14 opacity-60 hover:opacity-100 transition-opacity text-base leading-none"
    >
      <span style={{ color: isBlue ? "#E8924F" : "#5C7AB4" }}>◉</span>
    </button>
  );
}
