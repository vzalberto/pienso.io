---
title: Closure
---

<b>tl; dr; </b> Los closures son funciones que tienen acceso a las variables definidas en el scope que las contiene. 

Se crean al definir una función dentro del cuerpo de otra, utilizando variables de la función contenedora.

Podemos verlas en la consola.

```
const add = (a, b) => {
	return (b) => {
		return a + b;
	}
}
```

