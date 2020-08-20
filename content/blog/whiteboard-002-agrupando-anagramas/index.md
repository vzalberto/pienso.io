---
title: Whiteboard 002 - Agrupando anagramas
date: Wed Oct 23 2019 11:43:59 GMT-0500
---

Tienes un arreglo de palabras.

$$
arr = [~ ana, \ \ \ naa, \ \ \ choo, \ \ \ fun, \ \ \ nuf ~]
$$


```javascript
const agrupaAnagramas = (arr) {
	groups = {}

	for (word in arr){
		if(groups[arr[word].split('').sort().join('')] == undefined){
			groups[arr[word].split('').sort().join('')] = [arr[word]];
		}
		else{
			groups[arr[word].split('').sort().join('')].push(arr[word]) 
		}
	}

	return Object.values(groups)
}
```

$$
agrupaAnagramas ( arr ) => [~ [~ ana, naa ~], \ \ \ [~ fun, nuf ~], \ \ \, [~ choo ~] ~]
$$
&nbsp;&nbsp;&nbsp;
🐬 $$ \sim O(n) $$
