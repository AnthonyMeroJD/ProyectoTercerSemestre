import React,{ Fragment} from 'react'
import { Post } from 'react-axios'
import { Redirect} from 'react-router';
import { getQryApi, nuevoAnuncio} from '../../utils/Const'
import {getEstado,getCategoria}from '../../utils/utils.js'
function AnuncioCreate(params) {
    const {anuncioCurrent,user}=params;
    const {titulo,descripcion,nombre_categoria,estado}=anuncioCurrent;
    const categoriaId=getCategoria(nombre_categoria);
    const estadosAnuncioId=getEstado(estado);
    const userId=user.id;
     const data={titulo,descripcion,userId,categoriaId,estadosAnuncioId}
     const redirect=(<Redirect to={"/misAnuncios/".concat(user.id)}></Redirect>)
    return(
        <Fragment>
            <Post url={getQryApi([nuevoAnuncio])} data={data}>
            {
                (error, response)=>{
                   if(error) {
                       
                    return(<p>error</p>) 
                                        
                   }
                   else if(response)  {
                    
                    return(redirect)
                   } else if(response!=null){

                    return(redirect)
                   }
                   return (<p>sorry</p>)
                }
            }

            
            </Post>
        </Fragment>
    )
}

export default AnuncioCreate