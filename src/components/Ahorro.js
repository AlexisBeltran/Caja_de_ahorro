import {useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import {getDoc,updateDoc,doc} from 'firebase/firestore'
import { db } from '../Firebase'
import Header from './Header'
import Footer from './Footer'
const Ahorro = () => {
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
    
  
  
    const navigate = useNavigate()
    const {id} = useParams()
  
  
    const update = async(e) => {
      e.preventDefault()
      const usuario = doc(db,"usuarios",id)
      if(quincena1 !== 0 && quincena2 !== 0 && quincena3 !== 0 && quincena4 !== 0 && quincena5 !== 0 && quincena6 !== 0 && quincena7 !== 0 && quincena8 !== 0 && quincena9 !== 0 && quincena10 !== 0){
        console.log(typeof quincena1);
        const datos = {
          quincena1:quincena1,
          quincena2:quincena2,
          quincena3:quincena3,
          quincena4:quincena4,
          quincena5:quincena5,
          quincena6:quincena6,
          quincena7:quincena7,
          quincena8:quincena8,
          quincena9:quincena9,
          quincena10:quincena10,
          prestamopermiso: true
        }
        await updateDoc(usuario,datos);
        navigate('/mostrarusuarios')
      }else{
        const datos = {
          quincena1:quincena1,
          quincena2:quincena2,
          quincena3:quincena3,
          quincena4:quincena4,
          quincena5:quincena5,
          quincena6:quincena6,
          quincena7:quincena7,
          quincena8:quincena8,
          quincena9:quincena9,
          quincena10:quincena10,
          prestamopermiso: false
        }
        await updateDoc(usuario,datos);
        navigate('/mostrarusuarios')
      }
      
  
    } 
  
    const cancelar = () =>{
      navigate('/mostrarusuarios')
    }
  
    const getUsuarioById = async (id) => {
  
      const usuario = await getDoc(doc(db,"usuarios",id));
      console.log(usuario);
      if(usuario.exists()){
      // console.log(usuario.data())
        setquincena1(usuario.data().quincena1)
        setquincena2(usuario.data().quincena2)
        setquincena3(usuario.data().quincena3)
        setquincena4(usuario.data().quincena4)
        setquincena5(usuario.data().quincena5)
        setquincena6(usuario.data().quincena6)
        setquincena7(usuario.data().quincena7)
        setquincena8(usuario.data().quincena8)
        setquincena9(usuario.data().quincena9)
        setquincena10(usuario.data().quincena10)
        
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
                  <h1>Ahorro</h1>
                  <form onSubmit={update} >
                      <div className='gridForm'>
                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 1</label>
                            <input value={quincena1}
                            onChange={(e) => setquincena1(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 2</label>
                            <input value={quincena2}
                            onChange={(e) => setquincena2(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 3</label>
                            <input value={quincena3}
                            onChange={(e) => setquincena3(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 4</label>
                            <input value={quincena4}
                            onChange={(e) => setquincena4(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 5</label>
                            <input value={quincena5}
                            onChange={(e) => setquincena5(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 6</label>
                            <input value={quincena6}
                            onChange={(e) => setquincena6(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 7</label>
                            <input value={quincena7}
                            onChange={(e) => setquincena7(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 8</label>
                            <input value={quincena8}
                            onChange={(e) => setquincena8(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 9</label>
                            <input value={quincena9}
                            onChange={(e) => setquincena9(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>

                        <div className='mb-3 formAddUser'>
                            <label className='form-label'>Quincena 10</label>
                            <input value={quincena10}
                            onChange={(e) => setquincena10(e.target.value)}
                            type="number"
                            className='form-control'
                            />
                        </div>
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

export default Ahorro