import './App.css';

//Importacion de Componentes
import MostrarUsuarios from './components/MostrarUsuarios';
import CrearUsuario from './components/CrearUsuario';
import Editar from './components/Editar';
import Login from './components/Login';
import Ahorro from './components/Ahorro';
import Prestamo from './components/Prestamo';
import Ahorradores from './components/Ahorradores';
import Deudores from './components/Deudores';

//Importacion de Router
import {BrowserRouter,Route,Routes} from 'react-router-dom'





function App() {



  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/mostrarusuarios' element={<MostrarUsuarios/>}/>
       <Route path='/crearusuario' element={<CrearUsuario/>}/>
       <Route path='/editar/:id' element={<Editar/>}/>
       <Route path='/ahorro/:id' element={<Ahorro/>}/>
       <Route path='/prestamo/:id' element={<Prestamo/>}/>
       <Route path='/ahorradores' element={<Ahorradores/>}/>
       <Route path='/deudores' element={<Deudores/>}/>
     </Routes>
     </BrowserRouter>
    
        
    </div>
  );
}

export default App;
