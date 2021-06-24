import React from 'react'
import { Post } from 'react-axios'
import { Redirect, useParams } from 'react-router';
import { getQryApi, nuevoComentario } from '../../utils/Const'
function ComentarioCreate(params) {
    const {comentario,userId,setInfoComentario}=params;
    const {anuncioId}=useParams();
    const redirect=(<Redirect to={"/anuncio/".concat(anuncioId)}></Redirect>)
    return(
        <Post url={getQryApi([nuevoComentario])} data={({comentario,anuncioId,userId})}>
            {
                (error, response)=>{
                   if(error) {
                        setInfoComentario((prev)=>{
                            if (!prev.some(e=>e.info=="datos incorrectos")) {
                                return [...prev,{info:"datos incorrectos",type:"error"}]  ;
                            }else{
                                return prev;
                            }   
                        });
                        return(redirect) 
                                        
                   }
                   else if(response)  {
                    setInfoComentario((prev)=>{
                        if (!prev.some(e=>e.info=="comentario creado")) {
                            return [...prev,{info:"comentario creado",type:"success"}]  ;
                        }else{
                            return prev;
                        }   
                    });
                    return(redirect)
                   } else if(response!=null){

                    return(redirect)
                   }
                   return (<p>sorry</p>)
                }
            }

            
        </Post>
    )
}
export default ComentarioCreate