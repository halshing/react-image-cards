# React Image Cards
Imgur-style front page gallery. This is for development purposes only.

### Installation
`npm install`

### Setup
1. [Register](https://api.imgur.com/oauth2/addclient) an app on Imgur to get a Client ID. 

   This app only reads from the Imgur API, which doesn't require users to be logged in. You can register for an "anonymous" authorization type, but any will do.

   The callback URL can be set to `https://localhost:3000/callback` (this URL can be set to anything since it is required to register an app, but it doesn't matter since users won't be logging in).
2. Create a `.env` file in the root directory and add a variable named `REACT_APP_IMGUR_CLIENTID` with its value set to your Imgur app Client ID from the steps above.


### Usage
Run `npm start` which will open your browser to `localhost:3000`.
