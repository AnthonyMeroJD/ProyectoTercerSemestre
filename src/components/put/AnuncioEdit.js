import React,{ Fragment} from 'react'
import { Put } from 'react-axios'
import { Redirect} from 'react-router';
import { editarAnuncio, getQryApi, nuevoAnuncio} from '../../utils/Const'
import {getEstado,getCategoria}from '../../utils/utils.js'
function AnuncioEdit(params){
    const {anuncioCurrent,user}=params;
    
    const {id,titulo,descripcion,nombre_categoria,estado}=anuncioCurrent;
    const categoriaId=getCategoria(nombre_categoria);
    const estadosAnuncioId=getEstado(estado);
    const data={id,titulo,descripcion,categoriaId,estadosAnuncioId}
    const redirect=(<Redirect push to={"/misAnuncios/".concat(user.id)}></Redirect>)
    return(
        <Fragment>
            <Put url={getQryApi([editarAnuncio])} data={data}>
            {
                (error, response)=>{
                   if(error) {
                       
                    return(<p>error</p>) 
                                        
                   }
                   else if(response)  {
                    
                    return(redirect)
                   } 
                   return (<p>sorry</p>)
                }
            }
            </Put>
        </Fragment>
    )
}
export default AnuncioEdit