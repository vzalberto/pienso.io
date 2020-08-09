Asynchronousity is behind why javascript is fast.

• What is a callback?

Una función que se pasa a otra función como argumento 
y se llama dentro de ella.

function doAsyncTask(cb) {
  setTimeout(cb, 0)
}

doAsyncTask(()=> console.log(message))

let message = 'Callback'

setTimeout pone hasta arriba en el stack.

The first parameter is an error.

error first callbacks

• What is callback hell?

Anidados gigantes
