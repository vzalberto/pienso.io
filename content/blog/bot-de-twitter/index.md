---
title: Cómo hacer un bot de Twitter parte I
---

```javascript
require('dotenv').config()
const fetch = require('node-fetch');

const schedule = require('node-schedule');

const cronInterval = '20 21 * * *';

const t = require('twit');

const Twitter = new t({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const redactaTuit = (url) => {

	const tuit = `[@fanysitaa](https://twitter.com/Fanysitaa) 🐹 ${url}`;

	const options = { status: tuit };
	const cb = () => {};
	
	Twitter.post('statuses/update', options, cb);
};

const buenasTardesFanysitaa = () => {	
	fetch(process.env.GIPHY_URL)
	  .then( response => response.json() )
	  .then( json => redactaTuit( json.data.url ) )	  
}

const job = schedule.scheduleJob(cronInterval, buenasTardesFanysitaa);

```