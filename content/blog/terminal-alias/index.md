---
title: El Zen de la Terminal
---

Hice un par de alias para agilizar mi uso de la terminal:

```
alias tt = 'pwd |pbcopy'

alias rr = 'cd $(pbpaste)'
```

El primer comando, pwd |pbcopy, envía el nombre del directorio actual al portapapeles.

Abro una nueva pestaña e ingreso el segundo alias, que es un simple cambio al directorio de la última pestaña.

Fin.

JAJA no es cierto. 

En [iTerm2](https://www.iterm2.com/) podemos configurar esto de manera automática.

iTerm2 => Preferences => Profiles => Working Directory => Reuse previous session's directory.