import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { collection,getDocs,getDoc,deleteDoc, doc, where } from 'firebase/firestore'
import { db } from '../Firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import Header from './Header'
import Footer from './Footer'
const MySwal = withReactContent(Swal)
const MostrarUsuarios = () => {
  //Configuracion de los hooks
  const [usuarios,setusuario] = useState([]);

  //Referencia a la db firestore

  const usuarioscollection = collection(db,"usuarios")
  

  //Funcion para mostrar todos los usuarios

  const getUsuarios = async () => {
  const datos = await getDocs(usuarioscollection)
  //console.log(datos.docs);

  setusuario(
    datos.docs.map((doc)=>({...doc.data(),id:doc.id}))
  )
  console.log(usuarios);
  }

  //Funcion para eliminar un usuario

  const eliminarUsuario = async (id) =>{
   const usuariosDoc = doc(db,"usuarios",id)
   await deleteDoc(usuariosDoc)
   getUsuarios()
  }


  //Funcion de confirmacion para SweetAlert2

  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Seguro que quieres eliminar a este usuario?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimínalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarUsuario(id)
        Swal.fire(
          '¡Eliminado!',
          'El usuario ha sido eliminado exitosamente.',
          
        )
      }
    })
  }

  //Usamos useEffect

  useEffect (() => {
    getUsuarios()
  }, [])

  
  //Retornamos la vista de nuestro componente




  return (
    <>
    <Header></Header>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '3rem'}}>
            <div className='d-grid gap-2'>
              <Link to="/crearusuario" className='btn btn-secondary mt-2 mb-2'>Agregar Nuevo Usuario</Link>
            </div>

            <div className='d-grid gap-2'>
              <Link to="/ahorradores" className='btn btn-secondary mt-2 mb-2'>Ver Usuarios Ahorradores</Link>
            </div>

            <div className='d-grid gap-2'>
              <Link to="/deudores" className='btn btn-secondary mt-2 mb-2'>Ver Usuarios Deudores</Link>
            </div>
          </div>
          

            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Dirección</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              
              <tbody>
                {usuarios.map((usuario)=>(
                  <tr key={usuario.id}>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.direccion}</td>
                    <td>{usuario.telefono}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      <Link to={`/ahorro/${usuario.id}`} className="btn btn-success m-lg-1">Ahorro</Link>
                      <Link to={`/prestamo/${usuario.id}`} className="btn btn-success m-lg-1">Prestamo</Link>
                      <Link to={`/editar/${usuario.id}`} className="btn btn-light m-lg-1"><i className="fa-solid fa-pen-to-square"></i></Link>
                      <button onClick={()=>{confirmDelete(usuario.id)}} className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default MostrarUsuarios