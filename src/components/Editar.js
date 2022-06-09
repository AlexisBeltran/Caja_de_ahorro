import {useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDoc,updateDoc,doc} from 'firebase/firestore'
import { db } from '../Firebase'

const Editar = () => {

  const[nombre,setnombre] = useState('')
  const[apellidos,setapellidos] = useState('')
  const[direccion,setdireccion] = useState('')    
  const[telefono,settelefono] = useState(0)
  const[correo,setcorreo] = useState('')


  const navigate = useNavigate()
  const {id} = useParams()


  const update = async(e) => {
    e.preventDefault()
    const usuario = doc(db,"usuarios",id)
    const datos = {nombre:nombre,apellidos:apellidos,direccion:direccion,telefono:telefono,correo:correo}
    await updateDoc(usuario,datos)
    navigate('/mostrarusuarios')

  } 

  const cancelar = () =>{
    navigate('/mostrarusuarios')
  }

  const getUsuarioById = async (id) => {

  const usuario = await getDoc(doc(db,"usuarios",id))
  if(usuario.exists()){
   // console.log(usuario.data())
    setnombre(usuario.data().nombre)
    setapellidos(usuario.data().apellidos)
    setdireccion(usuario.data().direccion)
    settelefono(usuario.data().telefono)
    setcorreo(usuario.data().correo)
  }else{
    console.log('El usuario no existe')
  }


  }  

  useEffect( () => {
    getUsuarioById(id)
  }, [])


  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Editar Usuarios</h1>
            <form onSubmit={update} >

                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellidos</label>
                    <input value={apellidos}
                    onChange={(e) => setapellidos(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Direccion</label>
                    <input value={direccion}
                    onChange={(e) => setdireccion(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Teléfono</label>
                    <input value={telefono}
                    onChange={(e) => settelefono(e.target.value)}
                    type="number"
                    className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Correo</label>
                    <input value={correo}
                    onChange={(e) => setcorreo(e.target.value)}
                    type="text"
                    className='form-control'
                    />
                </div>
              
                <div className='d-grid gap-2'>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
                </div>
                
            </form>
            <div className='d-grid gap-2 mt-2'>
              <button className='btn btn-danger' onClick={cancelar}>Cancelar</button>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Editar