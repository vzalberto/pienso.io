---
title: Trompos al Pastor con React Hooks, Zdog y Tone.js
date: Wed Oct 16 2019 15:41:59 GMT-0500

---

Una tarde libre (y ligeramente nublada) me puse a implementar el juego de las torres de Hanoi para explorar React Hooks y Zdog. Incluso fue un pretexto perfecto para intentar algo con Tone.js. Ya en el calor del proceso, el concepto de "torre" mutó en "trompo", y estando en el centro de México, el trompo tenía que ser al pastor.

Esto es &nbsp; ```<TrompoDePastor />```:

```javascript
const TrompoDePastor = ( props ) => {

  const discos = props.discs ? props.discs.map( (d, i) => {

    return <Cylinder 
		      key={ i } 
		      diameter={ d.diameter } 
		      translate={ { z : 3 * i } } 
		      length={ 3 } 
		      color={ d.color || "#7c2c22" } 
		      stroke={ false } 
		      backface={ d.backface }
     		/>

  }) : ' ';

  return (
      <Illustration 
      className={ "portal" } 
      dragRotate={ true } 
      zoom={ props.zoom } 
      rotate={ props.rotation }>

     {discos}

      </Illustration>
  )
}
```

Link to game [https://hanoi-dog.firebaseapp.com](https://hanoi-dog.firebaseapp.com)

¿Nos ayudarías a [levantar un ticket](https://github.com/vzalberto/trompo/issues/new) si encuentras algún bug?