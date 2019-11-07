---
title: Cómo hacer un bot de Twitter parte I
---

El siguiente [script](https://github.com/vzalberto/bot_de_realidad) obtiene una imagen random de Giphy y la publica en Twitter. Tenemos una versión corriendo en [@Bot\_De\_Realidad](https://twitter.com/Bot_De_realidad)

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

	// Esta cadena almacena el texto del tuit tal cual será publicado, la url es la proporcionada por Giphy en la función buenasTardes.
	const tuit = `🐹 ${url}`;

	// Aquí configuramos los campos de la solicitud POST, sólo necesitamos el texto del tuit como valor de la propiedad status .
	const options = { status: tuit };

	// cb (callback) se refiere a una función que se ejecutaría después de tuitear, por ahora lo definimos como una función vacía.
	const cb = () => {};
	
	// Esta línea envía el tuit para su publicación con los parámetros que le fueron dados.
	Twitter.post('statuses/update', options, cb);
};

const buenasTardes = () => {	
	// El método experimental fetch
	fetch(process.env.GIPHY_URL)
	  .then( response => response.json() )
	  .then( json => redactaTuit( json.data.url ) )	  
}

const job = schedule.scheduleJob(cronInterval, buenasTardes);

```