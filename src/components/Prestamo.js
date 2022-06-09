import {useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDoc,updateDoc,doc} from 'firebase/firestore'
import { db } from '../Firebase'

const Prestamo = () => {
    const[prestamo,setprestamo] = useState(0)
    const[restante,setrestante] = useState(0)
    const[pago,setpago] = useState(0)
    const[abono,setabono] = useState(0)
    
    
  const calcularestante = () =>{
    restante = prestamo - abono;
  }

  const calcularpagado = () =>{
    abono += abono;
  }
  
    const navigate = useNavigate()
    const {id} = useParams()
  
  
    const update = async(e) => {
      e.preventDefault()
      const usuario = doc(db,"usuarios",id)
      const datos = {prestamo:prestamo,restante:restante,pago:pago}
      await updateDoc(usuario,datos)
      navigate('/mostrarusuarios')
  
    } 
  
    const cancelar = () =>{
      navigate('/mostrarusuarios')
    }
  
    const getUsuarioById = async (id) => {
  
    const usuario = await getDoc(doc(db,"usuarios",id))
    if(usuario.exists()){
        if(usuario.data().quincena1<=0 || usuario.data().quincena2<=0 || usuario.data().quincena3<=0 || usuario.data().quincena4<=0
        || usuario.data().quincena5<=0 || usuario.data().quincena6<=0 || usuario.data().quincena7<=0 || usuario.data().quincena8<=0
        || usuario.data().quincena9<=0 || usuario.data().quincena10<=0){
            alert("No puedes pedir prestamos.")
            navigate('/mostrarusuarios')
          } else{
               // console.log(usuario.data())
      setprestamo(usuario.data().prestamo)
      setrestante(usuario.data().restante)
      setpago(usuario.data().pago)
     
          
          }
    
      
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
              <h1>Prestamo</h1>
              <form onSubmit={update} >
  
                  <div className='mb-3'>
                      <label className='form-label'>Prestamo</label>
                      <input value={prestamo}
                      onChange={(e) => setprestamo(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='mb-3'>
                      <label className='form-label'>Restante</label>
                      <input value={restante}
                      onChange={(e) => setrestante(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>

                  <div className='mb-3'>
                      <label className='form-label'>Pago</label>
                      <input value={pago}
                      onChange={(e) => setpago(e.target.value)}
                      type="number"
                      className='form-control'
                      />
                  </div>


                  <div className='mb-3'>
                      <label className='form-label'>Abono</label>
                      <input type="number" className='form-control' />
                  </div>
                  
                  
                
                  <div className='d-grid gap-2'>
                  <button type='submit' className='btn btn-primary'>Guardar</button>
                  </div>

                  

                  
                  
              </form>
              <div className='d-grid gap-2'>
                  <button onClick={calcularestante} className='btn btn-primary'>Calcular Restante</button>
                  </div>
              <div className='d-grid gap-2 mt-2'>
                <button className='btn btn-danger' onClick={cancelar}>Cancelar</button>
              </div>
              
          </div>
      </div>
  </div>
    )
}

export default Prestamo