import React, {Component, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'



function EditarUsuario() {


    const params=useParams()

     //hooks
     const [nombre,setNombre] = useState('')
     const [email, setEmail]= useState('')
     const [telefono, setTelefono]= useState('') 

     //para volver atras
     const navegar = useNavigate()

     useEffect(() => {
       axios.post('/api/usuario/obtenerUsuarioPorId',{idUsuario:params.idUsuario})
       .then (res=>{
           console.log(res.data[0])
           const datausuario = res.data[0]
           setNombre (datausuario.nombre)
           setEmail (datausuario.email)
           setTelefono (datausuario.telefono)
       })
    
     }, [])

     //funcion que actualizar
     function editarUsuario(){
        //Creamos nuevo objeto para actualizar usuario
        const actualizarUsuario = {
            nombre: nombre,
            email:email,
            telefono:telefono,
            idUsuario: params.idUsuario
        }

        //Hacer la peticion usando axios
        axios.post('/api/usuario/actualizarUsuario', actualizarUsuario)
        .then(res =>{
            console.log(res.data)
            Swal.fire('Correcto', 'Usuario editado')
            navegar('/')
        })
        .then(err=>{console.log(err)})
    }
     
     

    return(
        <div className ='container'>
        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <h2 className="mt-4">Editar usuario</h2>
            </div>
        </div>

        <div className='row'>
            <div className='col-sm-6 offset-3'>
                <div className="mb-3">
                    <label htmlFor="nombre" className = "form-label">Nombre</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className = "form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) =>{setEmail(e.target.value)}}></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className = "form-label">Telefono</label>
                    <input type="text" className="form-control" value={telefono} onChange={(e) =>{setTelefono(e.target.value)}}></input>
                </div>

                <button onClick={editarUsuario} className='btn btn-success'>Editar usuario</button>
            </div>
        </div>
    </div>
    )
}


export default EditarUsuario