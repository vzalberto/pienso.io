---
title: Firebase Arsonist
date: Tue Oct 22 2019 15:41:59 GMT-0500

---

Una noche antes de una entrevista para la empresa X, hice una web app para mostrar mi nivel de estrés en tiempo real durante la entrevista:

BCI (Brain Computer Interface) => Node.js => Realtime Firebase => Frontend 

Un Emotiv Insight (BCI) genera los datos.

Un [middleware](https://github.com/vzalberto/arsonist) escrito en Node.js rutea los datos de la BCI hacia una base de datos en tiempo real.

Un frontend consume los datos de la base.

