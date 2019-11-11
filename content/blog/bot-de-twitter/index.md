---
title: Cómo hacer un bot de Twitter parte I
---

El siguiente [script](https://github.com/vzalberto/bot_de_realidad) obtiene una imagen random de Giphy y la publica en Twitter, a una hora específica del día.

Primero, se inicializan los paquetes necesarios:

```javascript
require('dotenv').config()
const fetch = require('node-fetch');
const schedule = require('node-schedule');
````
Esta línea haría que el bot tuiteara cada 6 horas. Más detalles en https://crontab-generator.org/
```javascript

const cronInterval = '* */6 * * *';
```

Aquí se inicializa el objeto que nos da acceso a twitter con el npm [twit](https://www.npmjs.com/package/twit).
```javascript
 
const t = require('twit');
const Twitter = new t({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})
```

Esta función recibe una url y publica un tuit con ella

```javascript
const redactaTuit = (url) => {

	const tuit = `🐹 ${url}`;

	const options = { status: tuit };
	const cb = () => {};

	Twitter.post('statuses/update', options, cb);
};

```
Línea por línea, esto es lo que hace la función ``` redactaTuit ```:

Esta cadena almacena el texto del tuit tal cual será publicado, la url es la proporcionada por Giphy en la función buenasTardes.
```javascript

	const tuit = `🐹 ${url}`;

```

Aquí configuramos los campos de la solicitud POST, sólo necesitamos el texto del tuit como valor de la propiedad status .

```javascript

	const options = { status: tuit };

```

cb (callback) se refiere a una función que se ejecutaría después de tuitear, por ahora lo definimos como una función vacía.

```javascript
	const cb = () => {};
```
	
Esta línea envía el tuit para su publicación con los parámetros que le fueron dados.

```javascript
	Twitter.post('statuses/update', options, cb);
```

La función `buenasTardes` hace una consulta a la api de Giphy, definimos la url con el paquete [dotenv](https://www.npmjs.com/package/dotenv). desde la primera línea del código. Cuando se recibe una respuesta, se envía a la función `redactaTuit`.

```javascript

const buenasTardes = () => {	
	fetch(process.env.GIPHY_URL)
	  .then( response => response.json() )
	  .then( json => redactaTuit( json.data.url ) )	  
}
```

Gracias al paquete [node-schedule](https://www.npmjs.com/package/node-schedule) podemos realizar el tuit a una hora y minuto específicos.

```javascript
const job = schedule.scheduleJob(cronInterval, buenasTardes);

```