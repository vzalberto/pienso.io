---
title: Red neuronal con Octave
---

<i>Esta es una tarea del curso Machine Learning, ofrecido por Stanford via [Coursera](https://www.coursera.org/learn/machine-learning).</i>


Una de las aplicaciones de las redes neuronales es en la formulación de hipótesis no lineales. 

Esta es una red neuronal prealimentada, donde la información sigue una sola dirección: hacia adelante.

La hipótesis $h_\theta$ está dada por:

$$
h_\theta(x) = a^{(3)} = g(z^{(3)})
$$

donde 

$$
z^{(3)} = \Theta^2a^{(2)}
$$

$$
a^{(2)} = g(z^{(2)}) = g(\Theta^{(1)} a^{(1)})
$$

y dado que $ a^{(1)} = X $, siendo $X$ el vector de entradas, con $x_0 = 1$, la hipótesis resulta en:

$$
h_\theta(x) = g (\Theta^{(2)} g(\Theta^{(1)} X))
$$