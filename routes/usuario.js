const express = require ('express');
const router = express.Router()

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema ({
    nombre : String,
    email: String,
    telefono: String,
    idUsuario: String
})


const ModeloUsuario = mongoose.model('Usuarios', UsuarioSchema)
module.exports = router


//Agregar usuario
router.post('/agregarusuario',(req,res)=>{
    const nuevoUsuario = new ModeloUsuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idUsuario: req.body.idUsuario,
    })
    nuevoUsuario.save(function(err){
        if (!err) {
            res.send('Usuario agregado correctamente')
        } else{
            res.send(err)
        }
    })
})

//obtener usuarios
router.get('/obtenerUsuarios', (req,res)=>{
    ModeloUsuario.find({},function(docs,err){
        if (!err) {
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})

//obtener usuario por id
router.post('/obtenerUsuarioPorId', (req,res)=>{
    
    console.log (req.params, req.body)
    ModeloUsuario.find({idUsuario:req.body.idUsuario},function(docs,err){
        if (!err) {
            res.send(docs)
        } else{
            res.send(err)
        }
    })
})


//actualizar usuario
router.post('/actualizarUsuario',(req,res)=>{
    ModeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario}, {
        nombre:req.body.nombre,
        email:req.body.email,
        telefono:req.body.telefono
    },  (err)=>{
        if(!err){
            res.send('Usuario actualizado correctamente')
        } else {
            res.send(err)
        }
    })
})

//Borrar usuario
router.post('/borrarUsuario',(req,res)=>{
    console.log(req.body.idUsuario)
    ModeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario}, (err)=> {
        if(!err){
            res.send('Usuario borrado correctamente')
        } else {
            res.send(err)
        }
    })
})