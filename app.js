//Usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, responderá a la url localhost:3000
app.get('/',(req,res) => {
    res.send("Hola mundo!")
})

//De esta forma inicializamos la app
app.listen(port, () => {
    console.log(`La app esta ejecutandose en el puerto ${port}`)
})