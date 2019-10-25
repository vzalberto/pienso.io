---
title: How to code a restaurant map with filters, using React.JS Hooks
date: Wed Oct 23 2019 12:41:59 GMT-0500

---

A classic one. Un clásico.

We start by thinking like a user of such application. 

<i> I, foodie, have a few hours to spare in a part of town I seldom go to.
My stomach is grunting. I must put food in it. I open a new tab on my browser of choice, go to comida.pienso.io, a restaurant map appears.</i>

Usaremos el mismo template de este blog, [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) para la aplicación web.

We will use the same template this blog is using, [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

Bad idea. Al parecer, componentDidUpdate está en desuso. [Let's go with Hooks.](https://www.robinwieruch.de/react-hooks-fetch-data)

Hooks it is. Pero tuvimos que usar axios en lugar de Async. Llevamos estas dos deudas técnicas:

• por qué no native fetch en lugar de axios?

• Un global state manager

Y, después de 3 horas de ir y venir, esto es lo que ocurre: 

```javascript
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
```

Ok, pero, ¿cómo usamos eso?

Vamos a la documentación:

Leaflet nos deja trazar círculos sobre los mapas.

Solo un detalle:

El mapa es un bonus.

Hay tres bonus:

1. Share and like FB buttons
2. Map with statistic info
3. Map with recommendations and a rating based filter.

Entonces vamos a enfocarnos en los componentes y el prototipo de los datos.

Esto es ```
<RestaurantCard />```

Pero antes...
https://material-ui.com/components/typography/#general

Ya andamos con 

https://v2.grommet.io/box

y un layout para <RestaurantCard />

Gracias, gente de stack overflow
https://stackoverflow.com/questions/54625831/how-to-sync-props-to-state-using-react-hook-setstate

ok esto se esta complicando demasiado

CLONE BEFORE YOU SORT
https://stackoverflow.com/questions/58087858/sort-an-array-with-react-hooks

OK, ya casi.

I'm looking into a mobx quick start book. At the very least, I will do the bonus 1 challenge.

I want to show that I can code a scalable web application.


Observable state

Watch out for decorator syntax!
https://github.com/timarney/react-app-rewired/

https://stackoverflow.com/questions/52262084/syntax-error-support-for-the-experimental-syntax-decorators-legacy-isnt-cur

mobX

necesito ganarme el derecho a name droppear 'mobx'

pero antes necesito trabajar en el estilo de la aplicación

Let's work on <RestaurantCard /> styling:


<i>¿What is the difference between import with and without {}?</i>

We need to go back to https://v2.grommet.io/box

It took me longer than usual. Why?

That's a topic for another post.

For now, let's keep going.

We have a barely aceptable layout design.

We will focus on adding mobX so that we can have a global state

With a global state, we can have a Map component.

jajaja que?






