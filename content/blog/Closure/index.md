---
title: Closure
---

<b>tl; dr; </b> Los closures son un espacio de memoria al cual las funciones acceden para poder completar su ejecución. 

Se crean al definir una función dentro del cuerpo de otra, utilizando variables de la función contenedora.

Podemos verlas en la consola.

```
const add = (a, b) => {
	return (b) => {
		return a + b;
	}
}
```

