import React, { Fragment } from 'react'
import ComentarioComponent from '../cards/ComentarioComponent';
import ComentariosComponent from '../dataContainers/ComentariosComponent';
import HeaderInclude from '../header/HeaderInclude';
import {NavLink} from "react-router-dom";
import { nuevoComentario } from '../../utils/Const';
import AlertsComponente from '../cards/AlertsComponente';
function DetalleAnuncio(params) {
    const {data,user,
        setshowMenu,showMenu,
        comentarioCurrent,setComentarioCurrent,
        infoComentario}=params;
    const {id,titulo,descripcion,nombre_categoria,vendedor}=data;
    const{nick,cod_pais,celular}=vendedor; 
    const inputComentario=user.isLogin&&<ComentarioComponent
            nick={user.nick}
            comentarioCurrent={comentarioCurrent}
            setComentarioCurrent={setComentarioCurrent}
            editable={true}/> ;
    const addComentario=user.isLogin? <NavLink
        push to ={nuevoComentario.concat("/").concat(id)}
     className="btn btn-primary">Crea un comentario</NavLink>:null;
    const header=(<HeaderInclude
         user={user}
        setshowMenu={setshowMenu}
        showMenu={showMenu}/>)
    const comentarios=(<ComentariosComponent idAnuncio={id}/>)
    const alertas=infoComentario.map((info,index)=><AlertsComponente
            key={index}
            type={info.type}
            info={info.info}
    />)
    return (
     <Fragment>  

         {header}
         <div className="container mt-5">
        <div className="card text-dark bg-light mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="img-thumbnail" src="https://i.blogs.es/28a5b8/libros2/840_560.jpg"></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title h2 text-uppercase">{titulo}</h5>
                                <hr/>
                            </div>
                        </div>
                        <p className="card-text justify-center h5 fw-light"><small className="text-muted">{nombre_categoria}</small></p>
                        <p className="card-text text-secondary">
                            {descripcion}
                        </p>
                        <hr/>
                        <div className="row">
                                <h5 className="card-title h6 text-secondary">Vendedor: {nick}</h5>
                        </div>
                        <button className="btn btn-primary">WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                  <p className="display-4 ml-5">Comentarios</p>                            
                </div>                
                <div className="col mt-4 ">                    
                   {addComentario}
                </div>                
            </div>
            <hr/>
            {alertas}
            {inputComentario}
            {comentarios}
        </div>

     </Fragment>

    )
}
export default DetalleAnuncio