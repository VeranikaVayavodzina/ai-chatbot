import React from 'react';

declare global {
  interface Window {
    AIChatBot: {
      renderChatBot: (container: HTMLElement) => any;
      default: React.ComponentType;
    };
  }
}

export interface ChatBotRoot {
  unmount(): void;
}

export function renderChatBot(container: HTMLElement): ChatBotRoot;

declare const App: React.ComponentType;
export default App;
