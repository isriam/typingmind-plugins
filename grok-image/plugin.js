// plugin.js for Grok Image Generation in TypingMind

const fetch = require('node-fetch');  // Assuming TypingMind provides fetch; otherwise, import if needed

module.exports = async function ({ command, parameters, settings }) {
  if (command !== 'generate-image') {
    return { error: 'Invalid command' };
  }

  const prompt = parameters.prompt;
  const apiKey = settings.xaiApiKey;

  if (!apiKey) {
    return { error: 'x.ai API key is required. Set it in plugin settings.' };
  }

  if (!prompt) {
    return { error: 'Prompt is required.' };
  }

  try {
    const response = await fetch('https://api.x.ai/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        prompt: prompt,
        model: 'flux',  // Default to flux per x.ai docs
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} - ${await response.text()}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;

    // Return Markdown to embed the image in TypingMind chat
    return {
      content: `![Generated Image](${imageUrl})\n\nPrompt: ${prompt}`,
      type: 'markdown',
    };
  } catch (error) {
    return { error: `Failed to generate image: ${error.message}` };
  }
};
