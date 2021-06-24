import React from 'react'
import { NavLink } from 'react-router-dom';
const updateData=(callback,attr,value)=>callback((prev)=>{
        const data=Object.assign({},prev);
        data[attr]=value;
        return data;
        })

const updateControllers=(i,callback)=>callback(prev=>{
        const controllers=prev.slice();
        const data=controllers[i];
        const updateData=Object.assign({},data);
        updateData['show']=!data.show;
        controllers[i]=updateData;
        return controllers;                                       

    });


function AnuncioEditCard(params) {
    const {anuncioCurrent,setAnuncioCurrent,edit,
        tituloRegistro,dropMenuControlers,setDropMenuControlers}=params;
    const {titulo,
        descripcion,
    userId,
    nombre_categoria,
    estado}=anuncioCurrent;
    const botonFuntion=edit?
            (<NavLink className="btn btn-primary mt-5" push to="/editarAnuncio">Editar</NavLink>):
            (<NavLink className="btn btn-primary mt-5" push to="/crearAnuncio">Guardar</NavLink>);
    const [categoriaDropState,estadoDropState]=dropMenuControlers;    
    const categoriaLabel=nombre_categoria||"Categoria";
    const estadoLabel=estado||"Estado";
    const showCategoria=categoriaDropState.show?"show":"";
    const showEstado=estadoDropState.show?"show":"";
    return(
        <div className="text-center">
                <main className="container">                
                    <form>                      
                        
                        <h1 className="h2 mb-3 fw-normal"> {tituloRegistro||"Edita tu anuncio"}</h1>
                        
                        <div className="form-floating">
                            <input className="form-control" 
                                   type="text" placeholder="El fabuloso libro"
                                   onChange={e=>updateData(setAnuncioCurrent,'titulo',e.target.value)}
                                    id="titulo" value={titulo}
                                    />
                            <label htmlFor="titulo">Titulo</label>
                        </div>
                        <div className="form-floating mt-2">
                            <textarea className="form-control" 
                                   type="text"                                    
                                   id="descripcion" 
                                   onChange={e=>updateData(setAnuncioCurrent,'descripcion',e.target.value)}
                                   value={descripcion}/>
                            <label htmlFor="descripcion">Descripcion</label>
                        </div>
                        <div className="row ">
                            <div className="col mt-3">
                              <div className="input-group mb-3">
                                    <button  
                                        aria-expanded={categoriaDropState.show}      
                                        onClick={e=>updateControllers(0,setDropMenuControlers)}                              
                                        className={"btn btn-lg btn-outline-secondary dropdown-toggle ".concat(showCategoria)} type="button" >
                                        {categoriaLabel }
                                    </button>
                                        <ul className={"dropdown-menu ".concat(showCategoria)}>
                                            <li>
                                                <a value="Terror"
                                                onClick={e=>updateData(setAnuncioCurrent,'nombre_categoria',"Terror")}
                                                className="dropdown-item">
                                                    Terror
                                                </a>
                                            </li>
                                            <li>
                                                <a value="Comedia"
                                                onClick={e=>updateData(setAnuncioCurrent,'nombre_categoria',"Comedia")}
                                                className="dropdown-item">
                                                    Comedia
                                                </a>
                                            </li>
                                            <li>
                                                <a value="Drama" 
                                                onClick={e=>updateData(setAnuncioCurrent,'nombre_categoria',"Drama")}
                                                className="dropdown-item" >
                                                    Drama
                                                </a>
                                            </li>                                        
                                        </ul>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <div className="input-group mb-3">
                                    <button  
                                        onClick={e=>updateControllers(1,setDropMenuControlers)}  
                                        aria-expanded={estadoDropState.show}                             
                                        className={"btn  btn-lg  btn-outline-secondary dropdown-toggle ".concat(showEstado)} type="button" >
                                        {estadoLabel}
                                    </button>
                                        <ul className={"dropdown-menu ".concat(showEstado)}>
                                            <li>
                                                <a value ="Pendiente"
                                                onClick={e=>updateData(setAnuncioCurrent,'estado',"Pendiente")}
                                                className="dropdown-item">
                                                    Pendiente
                                                </a>
                                            </li>
                                            <li>
                                                <a value ="Vendido" 
                                                onClick={e=>updateData(setAnuncioCurrent,'estado',"Vendido")}
                                                className="dropdown-item">
                                                    Vendido
                                                </a>
                                            </li>                                                                           
                                        </ul>
                                </div>    
                            </div>
                        </div>
                            {botonFuntion}
                    </form>
                </main>
            </div>
    )
}
export default AnuncioEditCard
