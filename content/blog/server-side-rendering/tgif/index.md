---
title: TGIF!
---

<i>[Link a TGIF! en Netlify](https://loving-beaver-048871.netlify.com/)</i>

• Me gustaría integrar un header con zfont [https://codepen.io/vzalberto/pen/gOOdvBq](https://codepen.io/vzalberto/pen/gOOdvBq)

• El arreglo de gifs se obtiene con el método de Nuxt.js, <b>`asyncData`</b>.

```javascript
  async asyncData () {
    const { data } = await axios.get(GIPHY_URL)
    return {
      loadedGifs : data.data
    }
  }
```
• Template de `<TGIF />` 

```html
<template>

 <div class="box">

  <div 
   class="gif"
   v-bind:key="gif.id"
   v-for="gif in gifs">

   <img 
    :src=gif.images.fixed_height.url />

   </div>	

  </div>

</template>

```

• Se genera el directorio `dist` con este comando en Netlify:

> yarn generate