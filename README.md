## What you need to run this:
- Node: https://nodejs.org/en/download/
- Twitch Oauth token: https://twitchapps.com/tmi/
- DeepAi.org API key (free with signup, OR use the default quickstart key, OR swap out this API for whatever approach you want to grab images): https://deepai.org/machine-learning-model/text2img

## You'll also need:
- Create a file under `server/secrets.js` with the following:
```
module.exports = {
	deepaiApiKey: "YOUR_KEY_HERE"
}
```

## Steps
```
cd server
npm install
node .
```

