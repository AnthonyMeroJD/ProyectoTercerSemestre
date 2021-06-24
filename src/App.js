import './App.css';
import {useState,Fragment } from 'react'
import {BrowserRouter as Router,Route, Switch,Redirect} from 'react-router-dom';
import Home from './components/layouts/Home.js';
import LoginComponente from './components/layouts/LoginComponente.js'
import { anuncios } from './utils/Const';
import AnuncioDetalle from './components/dataContainers/AnuncioDetalle';
import {nuevoComentario } from './utils/Const.js'
import LoginValidate from './components/dataContainers/LoginValidate';
import ComentarioCreate from './components/postComponents/ComentarioCreate';
import MisAnunciosContent from './components/dataContainers/MisAnunciosContent';
import RegisterComponente from './components/layouts/RegisterComponente.js'
import AnuncioCreate from './components/postComponents/AnuncioCreate';
import EditAnuncio from './components/layouts/EditAnuncio';
import AnuncioEdit from './components/put/AnuncioEdit';
import AnuncioCreateContent from './components/layouts/AnuncioCreateContent';
import UserCreate from './components/postComponents/UserCreate';
import Salir from './components/dataContainers/Salir'
function App() {
  const defUser={
    nick:"guest",
    password:"",
    id:0,
    isLogin:false,
    cod_pais:593,
    celular:9
  }
  const [showMenu, setshowMenu] = useState(false);      
  
  const [user,setUser]=useState(defUser);
  const [anuncioCurrent,setAnuncioCurrent]=useState(
    {
      titulo:"",
      descripcion:"",
      userId:0,
      categoriaId:0,
      estadosAnuncioId:0
    }
  );
  const [comentarioCurrent,setComentarioCurrent]=useState("");
  const [dropMenuControlers,setDropMenuControlers]=useState(
    [{type:"categoria",show:false},{type:"estado",show:false}]
  );
  const [showCategorias,setShowCategorias]=useState(false);
  const [consulta,setConsulta]=useState([anuncios]);
  const [categoria,setCategoria]=useState("Todas");
  const [tituloBusqueda,setTituloBusqueda]=useState("");
  const [infoLogin,setInfoLogin]  =useState([]);
  const [infoComentario,setInfoComentario]  =useState([]);
  return (
    <Router> 
      <Switch>
        <Route exact path="/">
          <Home user={user}                
                showMenu={showMenu}
                setshowMenu={setshowMenu}
                showCategorias={showCategorias}
                setShowCategorias={setShowCategorias}
                consulta={consulta}
                setConsulta={setConsulta}
                categoriaActual={categoria}
                setCategoriaActual={setCategoria}
                tituloBusqueda={tituloBusqueda}
                setTituloBusqueda={setTituloBusqueda}             
                ></Home>          
        </Route>
        <Route  path="/ingresar" >
           <LoginComponente
                user={user} 
                setUser={setUser}
                showMenu={showMenu}
                setshowMenu={setshowMenu}
                infoLogin={infoLogin}
               />
        </Route>

        <Route exact path="/salir" >
          <Salir
            user={user} 
            setUser={setUser}
          ></Salir>
        </Route>
        <Route exact path="/misAnuncios/:id">
          <MisAnunciosContent            
            user={user}
            anuncioCurrent={anuncioCurrent}
            setAnuncioCurrent={setAnuncioCurrent}
            setshowMenu={setshowMenu}
            showMenu={showMenu}/>
        </Route>
        <Route exact path="/crearAnuncio">
          <AnuncioCreate
                user={user}
                anuncioCurrent={anuncioCurrent}
            />
        </Route>
        <Route exact path="/nuevoAnuncio">          
          <AnuncioCreateContent            
             anuncioCurrent={anuncioCurrent}
             setAnuncioCurrent={setAnuncioCurrent}
             dropMenuControlers={dropMenuControlers}
             setDropMenuControlers={setDropMenuControlers}
             user={user}        
             showMenu={showMenu}
             setshowMenu={setshowMenu}/>
        </Route>
        <Route exact path="/editarAnuncio">
          <AnuncioEdit
              anuncioCurrent={anuncioCurrent}
              user={user}
          />
        </Route>
        <Route exact path="/misAnuncios/edit/:id">
          <EditAnuncio
             anuncioCurrent={anuncioCurrent}
             setAnuncioCurrent={setAnuncioCurrent}
             dropMenuControlers={dropMenuControlers}
             setDropMenuControlers={setDropMenuControlers}
            user={user}      
            showMenu={showMenu}
            setshowMenu={setshowMenu}
          ></EditAnuncio>          
        </Route>
        <Route exact path="/anuncio/:id">
          <AnuncioDetalle
              user={user}
              showMenu={showMenu}
              setshowMenu={setshowMenu}
              comentarioCurrent={comentarioCurrent}
              setComentarioCurrent={setComentarioCurrent}              
              infoComentario={infoComentario}
            ></AnuncioDetalle>
        </Route>
        <Route exact path="/validar/:nick/:password">
          <LoginValidate            
            setUser={setUser}
            setInfoLogin={setInfoLogin}
          ></LoginValidate>
        </Route>
        <Route exact path={"".concat(nuevoComentario).concat("/:anuncioId")}>
          <ComentarioCreate
              setInfoComentario={setInfoComentario}
              comentario={comentarioCurrent}
              userId={user.id}
            ></ComentarioCreate>
        </Route>
        <Route exact path="/registrar">
            <RegisterComponente
             user={user}
             setUser={setUser}
             showMenu={showMenu}
             setshowMenu={setshowMenu}/>
        </Route>
        <Route exact path="/crearUsuario">
          <UserCreate
              user={user}
              setUser={setUser}
              />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
