const express = require ('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

//Importacion conexion Mongo DB
const { dbConnection } = require ('./DBconnection')
dbConnection()

//Importacion del archivo de rutas y modelo usuario
const rutaUsuario = require ('./routes/usuario')

//Importar body parser
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
app.use(cors())


app.use('/api/usuario', rutaUsuario)

app.get('/', (req,res)=> {
    res.end('Bienvenidos al servidor backend node.js')
})

//Server basico
app.listen(process.env.PORT, function(){
    console.log('Servidor corriendo en el puerto ',process.env.PORT)
})