# Grok Image Generation Plugin for TypingMind

This plugin integrates x.ai's Grok image generation API into TypingMind, allowing you to generate images from text prompts directly in your chats. It's perfect for network engineers like you, Jeremy, who might want to visualize network diagrams or tech concepts on the fly!

## Features
- Generate images using Grok's AI (powered by Flux model).
- Custom setting for your x.ai API key.
- Invoke in chats with a slash command, e.g., `/generate-image prompt="A cat in space"`.
- Embeds the generated image directly in the chat response.

## Installation
1. Host the plugin files (`plugin.json` and `plugin.js`) on a public server (e.g., GitHub repo or Vercel).
2. In TypingMind: Settings > Plugins > Add Custom Plugin > Enter the URL to `plugin.json`.
3. Configure your x.ai API key in the plugin settings.

## Usage
- In a TypingMind chat, type: `/generate-image prompt="Your image description here"`.
- The plugin will call the x.ai API and return an embedded image.
- Optional parameters: Add `size="512x512"` or `aspect_ratio="1:1"` in the command for customization (if supported by future API updates).

## Configuration
- **x.ai API Key**: Required. Get it from [x.ai](https://x.ai). Enter it in TypingMind plugin settings.

## API Details
This plugin uses the x.ai Image Generations API:
- Endpoint: `POST https://api.x.ai/v1/images/generations`
- Requires `x-api-key` header.

## Troubleshooting
- Ensure your API key is valid and has credits.
- Check TypingMind console for errors.
- Rate limits: x.ai may limit requests—refer to their docs.

Built for TypingMind v2+. Inspired by x.ai docs: https://docs.x.ai/docs/guides/image-generations  
TypingMind plugin docs: https://docs.typingmind.com/plugins/build-a-typingmind-plugin

If you enjoy DIY projects, Jeremy, this is a fun one to tweak!
