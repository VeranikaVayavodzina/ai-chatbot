import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

export function renderChatBot(container: HTMLElement) {
  const root = createRoot(container);
  root.render(React.createElement(App));
  return root;
}

export default App;
