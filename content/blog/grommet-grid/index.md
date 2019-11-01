---
title: Taco game layout with grommet grid
---

Haremos un rediseño de &nbsp; [```<TacoApp/>```](https://pienso.io/hola) o como se llame.

We are going to use a Grommet Grid component

Two rows, three columns.

4 areas.

1. Install Grommet

	npm install grommet grommet-icons styled-components --save

2. Import components into Taco.js

	import { Box, Grid, Grommet } from 'grommet'

2.a I will add a &nbsp; ```<Clock/>```. Just because I can. There. Now, we continue. 

2.b Lets get rid of any CSS or position data.

3. Now we're set! 

Add a top level Grommet component

Put every &nbsp; ```<Trompo> component and the &nbsp; ```<CurrentMeat> component into a &nbsp; ```<Box>``` each.

Place those 4 boxes within a &nbsp; ```<Grid>```

Let's take a look into Grid properties.

          rows={['large']}
          columns={'small'}

will bring our components back in sight. 

Let's treat those components as areas:

          areas={[
            {name: 'carneAlAire', start: [0, 0], end: [3, 0]},
            {name: 'trompoA', start: [0, 1], end: [1, 1]},
            {name: 'trompoB', start: [1, 1], end: [2, 1]},
            {name: 'trompoC', start: [2, 1], end: [3, 1]},
          ]}

the start and properties represent coordinates in the format column, row

The name field should match the gridArea prop of the Box we are positioning


        <Box gridArea='carneAlAire'>


Grommet demands that the rows and columns props of the Grid component are arrays
