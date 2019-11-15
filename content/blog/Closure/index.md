---
title: Closure
---

<b>tl; dr; </b> <i> Las closures son funciones que tienen acceso a las variables definidas en el scope que las contiene. </i>

😕 ... ah, bueno, pa'saber.

Se crean al definir una función dentro del cuerpo de otra, utilizando variables de la función contenedora.

```javascript
const afuera = (a) => {

	let valorExterno = a

	return adentro = (b) => valorExterno + b

}
```

Si regresamos una función anónima podemos lograr algo como lo siguiente:

```javascript
const sumar = (a) => {
	return (b) => a + b
}

const sumar = a => b => a + b
```

> sumar(4)(2) => 6 
