# AI ChatBot Plugin

Standalone React chatbot plugin that can be embedded in any web application without requiring React dependencies.

## Features

- ✅ **Standalone** - No external React dependencies required
- ✅ **Framework agnostic** - Works with Angular, Vue, Vanilla JS, etc.
- ✅ **Optimized** - Production-ready with dead code elimination
- ✅ **TypeScript** - Full TypeScript support
- ✅ **Small bundle** - Only ~197KB (62KB gzipped)

## Installation

### From GitHub

```bash
npm install git+https://github.com/YOUR_USERNAME/ai-chatbot-plugin.git
```

### From npm (if published)

```bash
npm install ai-chatbot-plugin
```

## Usage

### Angular

1. Install the package:
```bash
npm install git+https://github.com/YOUR_USERNAME/ai-chatbot-plugin.git
```

2. Configure Angular to copy plugin assets in `angular.json`:
```json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "node_modules/ai-chatbot-plugin/dist",
      "output": "/assets/ai-chatbot-plugin"
    }
  ]
}
```

3. Use in your component:
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div id="ai-chatbot-root"></div>`
})
export class AppComponent implements OnInit {
  
  async ngOnInit() {
    await this.loadChatBot();
  }

  private async loadChatBot() {
    // Load the plugin script
    await this.loadScript('/assets/ai-chatbot-plugin/chatbot.umd.js');
    
    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/ai-chatbot-plugin/ai-chatbot-plugin.css';
    document.head.appendChild(link);

    // Render the chatbot
    const container = document.getElementById('ai-chatbot-root');
    if (container && (window as any).AIChatBot) {
      (window as any).AIChatBot.renderChatBot(container);
    }
  }

  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.head.appendChild(script);
    });
  }
}
```

### Vue.js

```vue
<template>
  <div id="ai-chatbot-root"></div>
</template>

<script>
export default {
  async mounted() {
    await this.loadChatBot();
  },
  
  methods: {
    async loadChatBot() {
      await this.loadScript('/assets/ai-chatbot-plugin/chatbot.umd.js');
      
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/ai-chatbot-plugin/ai-chatbot-plugin.css';
      document.head.appendChild(link);

      const container = document.getElementById('ai-chatbot-root');
      if (container && window.AIChatBot) {
        window.AIChatBot.renderChatBot(container);
      }
    },
    
    loadScript(src) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }
  }
}
</script>
```

### Vanilla JavaScript

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="./node_modules/ai-chatbot-plugin/dist/ai-chatbot-plugin.css">
</head>
<body>
  <div id="ai-chatbot-root"></div>
  
  <script src="./node_modules/ai-chatbot-plugin/dist/chatbot.umd.js"></script>
  <script>
    const container = document.getElementById('ai-chatbot-root');
    AIChatBot.renderChatBot(container);
  </script>
</body>
</html>
```

## API

### `AIChatBot.renderChatBot(container: HTMLElement)`

Renders the chatbot component into the specified container element.

**Parameters:**
- `container` - The DOM element where the chatbot will be rendered

**Returns:**
- React root instance for cleanup if needed

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build:lib

# Lint code
npm run lint
```

## License

MIT