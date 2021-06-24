import '../../Home.css'
import React, { Fragment} from 'react';
import {anuncios as anunciosReq,
    categoria as categoriaReq,titulo as tituloReq } from '../../utils/Const.js';
import AnunciosComponent from '../dataContainers/AnunciosComponent';
import HeaderInclude from '../header/HeaderInclude.js';

const updateConsultaCategoria=(categoria,callbackQry,callbackCategoria)=>{
    const att="/".concat(categoria);
    callbackQry([anunciosReq ,categoriaReq,att]);
    callbackCategoria(categoria);
}

const updateConsultaTitulo=(titulo,callback)=>{
    const att="/".concat(titulo);
    callback([anunciosReq,tituloReq,att])
}

function Home(params) {       
    const { user,
            setshowMenu,showMenu,
            setShowCategorias, showCategorias,
            consulta,setConsulta,
            categoriaActual,setCategoriaActual,
            tituloBusqueda,setTituloBusqueda}=params;    
 
    const header=(<HeaderInclude
        user={user}        
        showMenu={showMenu}
        setshowMenu={setshowMenu}/>);
    const showDropCategoria=showCategorias?"show":"";  
    
    return(
        <Fragment>
            {header}
            <div className="slider hero">
                    <span data-title="!Bienvenido!" className="text">
                            !Bienvenido!
                    </span>
                    <p>Publica tus anuncios gratis</p>
                    <h2>
                        <span>Libros</span>
                        <div className="message">
                            <div className="word1">Terror</div>
                            <div className="word2">Drama</div>
                            <div className="word3">Comedia</div>
                        </div>
                    </h2>
            </div>           
       
            <div className="container mt-5">
                <div className="row">
                        <div className="col">
                            <p className="display-4 ml-5">{categoriaActual}</p>
                            
                        </div>
                        <div className="col mt-4">
                            <div className="input-group mb-3">
                                <button  onClick={e=>setShowCategorias(!showCategorias)}
                                        className={"btn btn-outline-secondary dropdown-toggle ".concat(showDropCategoria)} type="button" >
                                    Categorias</button>
                                    <ul className={"dropdown-menu ".concat(showDropCategoria)}>
                                        <li>
                                            <a className="dropdown-item" 
                                                onClick={e=>updateConsultaCategoria("Terror",setConsulta,setCategoriaActual)} >
                                                Terror
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item"
                                            onClick={e=>updateConsultaCategoria("Comedia",setConsulta,setCategoriaActual)}
                                            >
                                                  Comedia
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" 
                                            onClick={e=>updateConsultaCategoria("Drama",setConsulta,setCategoriaActual)}>
                                                Drama</a>
                                        </li>                                        
                                    </ul>
                                <input type="text" placeHolder="Busca por titulo" 
                                    onChange={e=>{
                                        setTituloBusqueda(e.target.value.trimStart().trimEnd());
                                        updateConsultaTitulo(e.target.value.trimStart().trimEnd(),setConsulta);
                                    }}
                                className="form-control" value={tituloBusqueda}/>
                            </div>                        
                                
                        </div>
                        <hr/>
                </div>
            </div>                    
            <AnunciosComponent
                req={consulta}               
            />
        </Fragment>       
        
    )       
    
}
export default Home;