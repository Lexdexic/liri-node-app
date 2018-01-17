console.log('this is loaded');

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET

};

exports.spotify = {  
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// See instructions lines 79-96 Get your Twitter API keys by following these steps:

// Step One: Visit https://apps.twitter.com/app/new
// Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.

// Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 

// Copy and paste them where the <input here> tags are inside your keys.js file.

// Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret. 

// Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.

