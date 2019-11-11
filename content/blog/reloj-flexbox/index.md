---
title: Cajas flexibles y relojes con Grommet.
---

[Grommet](https://v2.grommet.io/) es una librería para crear layouts basados en [flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox).

Al parecer, está abandonada 😕.

Aún así, vale la pena revisar lo intuitivo que resulta implementarla.

Este es el código del reloj que está en el header de este sitio:

```JSX
<Grommet plain>

    <Box direction="row-reverse">
    	<Clock type="digital"/>
    </Box>

    <Box>
    	{/* Resto del sitio */}
    </Box>

</Grommet>
```