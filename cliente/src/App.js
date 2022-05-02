import './App.css';
import ListaUsuarios from './components/ListaUsuarios';
import AgregarUsuario from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Establecemos la ruta base de Axios
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000'

function App() {
  return (
    <div className='App'>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="/">Crud Mern</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

       <Router>
        <Routes>

          <Route path='/' element={<ListaUsuarios/>} />
          <Route path='/agregarusuario' element={<AgregarUsuario/>} />
          <Route path='/editarusuario/:idUsuario' element={<EditarUsuario/>} />

        </Routes>
      </Router> 
      
    </div>
  );
}

export default App;
