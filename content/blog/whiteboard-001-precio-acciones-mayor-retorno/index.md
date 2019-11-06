---
title: Whiteboard 001 - 📈💰📉💸
---

Se tiene un arreglo de precios diarios para una acción

$$
X = [ ~ 10, \ \ \ 20, \ \ \ -5, \ \ \ 20 ~ ]
$$

¿Querías una función para calcular el mayor retorno posible de inversión?

$$
f ( x )
$$ 

$$ f = $$ ( X ) => {

	const n = X.length
	
	let maxReturn = 0
	let currentReturn = 0

	for ( let i = 0 ; i < n ; i++ ) {

		for ( let j = i + 1; j < n ; j++ ) {

			currentReturn = X[j] - X[i]

			if ( currentReturn > maxReturn ) {

				maxReturn = currentReturn
			}
		}
	}

	return maxReturn
}

&nbsp;&nbsp;&nbsp;
🐠 $$ \sim O(n^2) $$

¿Buscabas una más rápida?

 $$ 
 g ( x ) 
 $$ 

$$ g = $$ ( X ) => {

	
	let maxReturn = 0

	let minimumStockPrice = 0

	let currentReturn = 0

	for ( let i = 0 ; i < n - 1 ; i++ ) {

		minimumStockPrice = X[i] < minimumStockPrice ? X[i] : minimumStockPrice

		currentReturn = X[ i + 1 ] - minimumStockPrice

		if ( currentReturn > maxReturn ){
			maxReturn = currentReturn
		}

	}

	return maxReturn

}

&nbsp;&nbsp;&nbsp;
🐬 $$ \sim O(n) $$

Suerte.