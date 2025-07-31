# Grok Image Generation Plugin for TypingMind

This plugin integrates x.ai's Grok image generation API into TypingMind, allowing you to generate images from text prompts directly in your chats. It's perfect for network engineers like you, Jeremy, who might want to visualize network diagrams or tech concepts on the fly!

## Features
- Generate images using Grok's AI (powered by grok-2-image model).
- Custom setting for your x.ai API key.
- Invoke in chats via tool calling, e.g., "Call the grok_image_generation function with prompt: A cat in space."
- Returns Markdown with the generated image URL for embedding in the chat response.

## Installation
1. Download or copy the plugin file (`grok-image-plugin.json`).
2. In TypingMind: Settings > Plugins > Create New Plugin or Import > Paste the JSON contents.
3. Configure your x.ai API key in the plugin settings.

## Usage
- In a TypingMind chat with function calling enabled, type: "Call the grok_image_generation function with prompt: Your image description here."
- The plugin will call the x.ai API and return Markdown with the embedded image.
- Note: Some models may describe the image instead of embedding it—use explicit instructions like "Output the exact Markdown from the tool."

## Configuration
- **x.ai API Key**: Required. Get it from [x.ai](https://x.ai). Enter it in TypingMind plugin settings.

## API Details
This plugin uses the x.ai Image Generations API:
- Endpoint: `POST https://api.x.ai/v1/images/generations`
- Requires `Authorization: Bearer <API_KEY>` header.

## Troubleshooting
- Ensure your API key is valid and has access to the "grok-2-image" model.
- Test manually with curl:
```curl -X 'POST' https://api.x.ai/v1/images/generations
-H 'accept: application/json'
-H 'Authorization: Bearer YOUR_API_KEY'
-H 'Content-Type: application/json'
-d '{
"model": "grok-2-image",
"prompt": "A test image"
}'
```

- Check TypingMind console for errors.
- Rate limits: x.ai may limit requests—refer to their docs.

## Finally
Built for current TypingMind plugins. Inspired by x.ai docs: https://docs.x.ai/docs/guides/image-generations  
TypingMind plugin docs: https://docs.typingmind.com/plugins/build-a-typingmind-plugin

If you enjoy DIY projects, Jeremy, this is a fun one to tweak!
