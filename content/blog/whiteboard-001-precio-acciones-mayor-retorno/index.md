---
title: Whiteboard 001
---

Se recibe un arreglo de precios diarios consecutivos de una acción [ 10, 20, -5, 20 ]

¿Como calculamos el mayor retorno posible de inversión?

$$
O(n^2)
$$

(arr) => {

	const n = arr.length
	
	let maxReturn = 0
	let currentReturn = 0

	for ( let i = 0 ; i < n ; i++ ) {

		for ( let j = i + 1; j < n ; j++ ) {

			currentReturn = arr[j] - arr[i]

			if ( currentReturn > maxReturn ) {

				maxReturn = currentReturn
			}
		}
	}

	return maxReturn
}

Not fast enough...

$$
O(n)
$$

(arr) => {

	const n = arr.length
	
	let maxReturn = 0

	let minimumStockPrice = 0

	let currentReturn = 0

	for ( let i = 0 ; i < n - 1 ; i++ ) {

		minimumStockPrice = arr[i] < minimumStockPrice ? arr[i] : minimumStockPrice

		currentReturn = arr[ i + 1 ] - minimumStockPrice

		if ( currentReturn > maxReturn ){
			maxReturn = currentReturn
		}

	}

	return maxReturn

}