---
title: TGIF!
---

<i>[Link a TGIF! en Netlify](https://loving-beaver-048871.netlify.com/)</i>

• Así se ve `pages/index.vue`

```html
<template>
  <div class="container">
      <TGIFLogo />
      <TGIF />
      <TGIFFooter />
  </div>
</template>
```

• Dentro de `<TGIFLogo />` me gustaría lograr un header basado en zfont como en este ejemplo: [https://codepen.io/vzalberto/pen/gOOdvBq](https://codepen.io/vzalberto/pen/gOOdvBq)


• El arreglo de gifs se obtiene con el método de Nuxt.js, `asyncData`, y se envía como prop a `<TGIF />`.

```javascript
export default {

  components: {
    TGIF,
    TGIFLogo,
    TGIFFooter,
  },

  data () {
    return {
      loadedGifs : []
    }
  },

  async asyncData () {
    const { res } = await axios.get(GIPHY_URL)
    return {
      loadedGifs : res.data
    }
  }
}
```
• Este es el `<template/>` de `<TGIF />` 

```html
 <div class="box">

  <div 
   class="gif"
   v-bind:key="gif.id"
   v-for="gif in gifs">

   <img 
    :src=gif.images.fixed_height.url />

   </div>	

  </div>
```
• Los gifs se acomodan automáticamente en nuevas líneas con la propiedad `flex-wrap: wrap-reverse

```css
	.box {
		display: flex;
  		flex-wrap: wrap-reverse;
	}

	.gif {
		flex-grow: 1
	}
```

• Este comando levanta la aplicación en local con yarn:

> yarn dev


• Se genera el directorio `dist` con este comando en Netlify:

> yarn generate