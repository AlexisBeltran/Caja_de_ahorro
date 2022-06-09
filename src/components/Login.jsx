import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../Firebase';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  async function iniciarSesion(e){
    try{
      e.preventDefault();
      console.log(correo);
      console.log(contrasena);
      console.log(auth);
      const user = await signInWithEmailAndPassword(auth, correo, contrasena);
      if(user){
        window.location.href = '/mostrarusuarios';
      }
      console.log(user);
    }catch(error){
      switch(error.message){
        case 'Firebase: Error (auth/user-not-found).': setError('El correo no exite o es incorrecto'); break;
        case "Firebase: Error (auth/wrong-password).": setError('Correo y/o contraseña incorrecta'); break;
        case 'Firebase: Error (auth/internal-error)': setError('Contraseña incorrecta'); break;
        default: setError('Ocurrio un error. Intente de nuevo'); break;
      }
    }
  }
  return (
    <div style={{background: '#323539', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{background: '#FFF', borderRadius: '6px', padding: '10px', boxShadow: '3px 0px 5px -1px rgba(0,0,0,0.34)', width: '30rem'}}>
        <h1 style={{margin:0, textAlign:'center', padding: '15px', textTransform: 'uppercase'}}>Caja de ahorro</h1>
        {error ?  <h4 style={{textAlign:'center', background: 'red', padding:'10px', borderRadius: '6px', border: '2px solid #44e0e', color: "#FFF"}}>{error}</h4> : null}
        <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}} onSubmit={(e) => iniciarSesion(e)}>
          <input 
            placeholder='Correo electronico' 
            className="input" 
            onChange={(e) => setCorreo(e.target.value)} 
            value={correo}
            style={{border:'none', padding:'10px', boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)", borderRadius: '6px', outline: 'none'}}
          />
          <input 
            placeholder="Contraseña" 
            className="input" 
            type='password' 
            onChange={(e) => setContrasena(e.target.value)} 
            value={contrasena}
            style={{border:'none', padding:'10px', boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)", borderRadius: '6px', outline: 'none'}}
          />
          <button id="initSession" type="sumit" className='btn'  style={{background: '#323539', color: '#FFF', textTransform: 'uppercase'}}>Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
