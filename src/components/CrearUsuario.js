import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { collection,addDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import { async } from '@firebase/util'
import Header from './Header'
import Footer from './Footer'

const CrearUsuario = () => {

    const[nombre,setnombre] = useState('')
    const[apellidos,setapellidos] = useState('')
    const[direccion,setdireccion] = useState('')    
    const[telefono,settelefono] = useState(0)
    const[correo,setcorreo] = useState('')
    const[quincena1,setquincena1] = useState(0)
    const[quincena2,setquincena2] = useState(0)
    const[quincena3,setquincena3] = useState(0)
    const[quincena4,setquincena4] = useState(0)
    const[quincena5,setquincena5] = useState(0)
    const[quincena6,setquincena6] = useState(0)
    const[quincena7,setquincena7] = useState(0)
    const[quincena8,setquincena8] = useState(0)
    const[quincena9,setquincena9] = useState(0)
    const[quincena10,setquincena10] = useState(0)
    const[prestamo,setprestamo] = useState(0)
    const[restante,setrestante] = useState(0)
    const[pago,setpago] = useState(0)

    const navigate = useNavigate()
    const usuarioscollection = collection(db,"usuarios")


    const store = async (e) => {
        e.preventDefault()
        await addDoc(usuarioscollection,{nombre:nombre,apellidos:apellidos,direccion:direccion,telefono:telefono,correo:correo,
            quincena1:quincena1,quincena2:quincena2,quincena3:quincena3,quincena4:quincena4,quincena5:quincena5,quincena6:quincena6,
            quincena7:quincena7,quincena8:quincena8,quincena9:quincena9,quincena10:quincena10,prestamo:prestamo,restante:restante,pago:pago})
        navigate('/mostrarusuarios')
    }

    const cancelar = () =>{
        navigate('/mostrarusuarios')
      }

    


  return (
    <>
        <Header></Header>
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Agregar Usuarios</h1>
                <form onSubmit={store} >
                    <div className='mb-3 formAddUser'>
                        <label className=''>Nombre</label>
                        <input value={nombre}
                        onChange={(e) => setnombre(e.target.value)}
                        
                        type="text"
                        className='form-control'
                        />
                    </div>

                    <div className='mb-3 formAddUser'>
                        <label className=''>Apellidos</label>
                        <input value={apellidos}
                        onChange={(e) => setapellidos(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>

                    <div className='mb-3 formAddUser'>
                        <label className=''>Direccion</label>
                        <input value={direccion}
                        onChange={(e) => setdireccion(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>

                    <div className='mb-3 formAddUser'>
                        <label className=''>Teléfono</label>
                        <input value={telefono}
                        onChange={(e) => settelefono(e.target.value)}
                        type="number"
                        className='form-control'
                        />
                    </div>

                    <div className='mb-3 formAddUser'>
                        <label className=''>Correo</label>
                        <input value={correo}
                        onChange={(e) => setcorreo(e.target.value)}
                        type="text"
                        className='form-control'
                        />
                    </div>
                    
                    <div className='visually-hidden'>
                      <label className='form-label'>Quincena 1</label>
                      <input value={quincena1}
                      onChange={(e) => setquincena1(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 2</label>
                      <input value={quincena2}
                      onChange={(e) => setquincena2(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 3</label>
                      <input value={quincena3}
                      onChange={(e) => setquincena3(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 4</label>
                      <input value={quincena4}
                      onChange={(e) => setquincena4(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 5</label>
                      <input value={quincena5}
                      onChange={(e) => setquincena5(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 6</label>
                      <input value={quincena6}
                      onChange={(e) => setquincena6(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 7</label>
                      <input value={quincena7}
                      onChange={(e) => setquincena7(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 8</label>
                      <input value={quincena8}
                      onChange={(e) => setquincena8(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 9</label>
                      <input value={quincena9}
                      onChange={(e) => setquincena9(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Quincena 10</label>
                      <input value={quincena10}
                      onChange={(e) => setquincena10(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Prestamo</label>
                      <input value={prestamo}
                      onChange={(e) => setprestamo(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Restante</label>
                      <input value={restante}
                      onChange={(e) => setrestante(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='visually-hidden'>
                      <label className='form-label'>Pago</label>
                      <input value={pago}
                      onChange={(e) => setpago(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>
                  
                    <div className='formStyle'>     
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                        <button className='btn btn-danger' onClick={cancelar}>Cancelar</button>
                    </div>
                    
                    
                </form>
                <div className='d-grid gap-2 mt-2'>
              
            </div>
                
            </div>
        </div>
        </div>
        <Footer></Footer>
    </>
    
  )
}

export default CrearUsuario