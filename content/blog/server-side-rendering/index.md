---
title: Server-Side Rendering con Nuxt.js
---

###Ventajas

• SEO

• Mejor experiencia de usuario

Se utiliza el método especial de Nuxt, [```asyncData```](https://nuxtjs.org/api/):
```javascript
  async asyncData () {
    const { data } = await axios.get(GIPHY_URL)
    return {
      loadedGifs : data.data
    }
  }
```

Para hacer deploy en Netlify, registramos el comando 

```yarn generate```

 y el directorio ```dist```.