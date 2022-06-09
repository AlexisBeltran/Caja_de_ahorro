import {useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDoc,updateDoc,doc} from 'firebase/firestore'
import { db } from '../Firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Header from './Header'
import Footer from './Footer'

const MySwal = withReactContent(Swal);

const Prestamo = () => {
    const[prestamo,setprestamo] = useState(0);
    const[restante,setrestante] = useState(0);
    const[pago,setpago] = useState(0);
    const[abono,setabono] = useState(0);
    const[pagoCal, setpagoCal] = useState(0);
    const[first, setFirst] = useState(false);
    
  const calcularestante = () =>{
    restante = prestamo - abono;
  }

  const calcularpagado = (abono_) =>{
    if(first === undefined){
      let pagoInput = parseInt(abono_);
      setpago(pagoInput);
      setabono(pagoInput);
    }else{
      setpago(parseInt(abono_) + pago);
      setrestante(restante - parseInt(abono_));
    } 
    
  }

  const validarPrestamo = (prestamo_) => {
    if(first === undefined){
      let restante_ = parseInt(prestamo_);
      setrestante(restante_);
      setprestamo(restante_);
    }else{
      const prestamo = document.querySelector('#prestamo');
      prestamo.disabled = true;
      const restante = document.querySelector('#restante');
      restante.disabled = true;
    }
    

  }
  
    const navigate = useNavigate()
    const {id} = useParams()
  
  
    const update = async(e) => {
      e.preventDefault()
      if(first === undefined){
        const usuario = doc(db,"usuarios",id)
        const datos = {prestamo:prestamo,restante:restante,pago:pago, abono:abono, first: true}
        await updateDoc(usuario,datos)
        navigate('/mostrarusuarios')
      }else{
        const usuario = doc(db,"usuarios",id)
        const datos = {prestamo:prestamo,restante:restante,pago:pago, abono:abono}
        await updateDoc(usuario,datos)
        navigate('/mostrarusuarios')

      }
      
    } 
  
    const cancelar = () =>{
      navigate('/mostrarusuarios')
    }
  
    const getUsuarioById = async (id) => {
  
    const usuario = await getDoc(doc(db,"usuarios",id))
    if(usuario.exists()){
        if(!usuario.data().prestamopermiso){
          await MySwal.fire({
            title: <strong>Error</strong>,
            html: <i>No puedes pedir prestamos</i>,
            icon: 'warning'
          }).then(()=> {
            navigate('/mostrarusuarios')
          });
          } else{
              setprestamo(usuario.data().prestamo)
              setrestante(usuario.data().restante)
              setpago(usuario.data().pago);
              setFirst(usuario.data().first);
            }
    
      
    }else{
      console.log('El usuario no existe')
    }
  
  
    }  
  
    useEffect( () => {
      getUsuarioById(id)
    }, [])
  
  
    return (
      <>
        <Header></Header>
        <div className='container'>
          <div className='row'>
              <div className='col'>
                  <h1>Prestamo</h1>
                  <form onSubmit={update} >
      
                      <div className='mb-3 formAddUser'>
                          <label className='form-label'>Prestamo</label>
                          <input value={restante}
                          onChange={(e) => validarPrestamo(e.target.value)}
                          type="number"
                          className='form-control'
                          id='prestamo'
                          />
                      </div>

                      <div className='mb-3 formAddUser'>
                          <label className='form-label'>Restante</label>
                          <input value={restante}
                          onChange={(e) => setrestante(e.target.value)}
                          type="number"
                          className='form-control'
                          id='restante'
                          />
                      </div>

                      <div className='mb-3 formAddUser'>
                          <label className='form-label'>Pago</label>
                          <input value={pago}
                          type="number"
                          className='form-control'
                          disabled
                          />
                      </div>


                      <div className='mb-3 formAddUser'>
                          <label className='form-label'>Abono</label>
                          <input type="number" className='form-control' 
                            onBlur={(e) => calcularpagado(e.target.value)}
                          />
                      </div>
                      
                      
                    
                      <div className='mb-2'>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                      </div>

                      

                      
                      
                  </form>
                  <div className='formStyle'>
                    <button onClick={calcularestante} className='btn btn-primary'>Calcular Restante</button>
                    <button className='btn btn-danger' onClick={cancelar}>Cancelar</button>
                  </div>
              </div>
          </div>
        </div>
        <Footer></Footer>
      </>
      
    )
}

export default Prestamo