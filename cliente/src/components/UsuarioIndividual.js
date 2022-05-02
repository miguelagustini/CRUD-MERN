import React, {Component, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'



function UsuarioIndividual({usuario}) {

    //funcion para refrescar automaticamente
    const navegar = useNavigate()

    //para animacion de scoll al bajar (aos)
    useEffect(() => {
      AOS.init()
    }, [])
    

    //funcion para borrar usuario 
    function borrarUsuario(idUsuario){
        axios.post('/api/usuario/borrarUsuario',{idUsuario:idUsuario})
        
        .then (res=>{
            console.log(res.data)
            alert (res.data)
            navegar(0)
        }).catch (err=>{
            console.log(err)
        })    
      }
    
    return(
        <div className="container">
            <div className = "row">
                <div className="col-sm-6 offset-3" data-aos= "zoom-in-down" data-aos-duration="2000">
                <ul className="list-group" >
                    <li className="list-group-item">{usuario.idUsuario}</li>
                    <li className="list-group-item">{usuario.nombre}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.telefono}</li>
                </ul>

                <Link to ={`/editarusuario/${usuario.idUsuario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                 <button className="btn btn-danger" onClick={()=>{borrarUsuario(usuario.idUsuario)}}>Borrar</button>
                <hr className= "mt-4"/>
            </div>
        </div>
    </div>
    )
}


export default UsuarioIndividual