---
title: Closure
---

<b>tl; dr; </b> Los closures son un espacio de memoria al cual las funciones acceden para poder completar su ejecución. 

```
const add = (a, b) => {
	return (b) => {
		return a + b;
	}
}
```