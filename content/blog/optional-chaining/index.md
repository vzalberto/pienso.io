---
title: Encadenamiento Opcional
date: Sat Oct 31 2020 15:15:00 GMT-0600
---

El operador de encadenamiento opcional ? es un chingón.

Te permite acceder a valores anidados como

> usuario.transporte?.nombre

evitando toparte con referencias nulas o no definidas.

> let usuario = {tuiter:{arroba:'@lemur_sensible', seguidores: 3121}}
> console.log(usuario.instagram.arroba)
> // truena
> console.log(usuario.instagram?.arroba)
> // imprime "undefined"
