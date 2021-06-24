import React from 'react'
import ComentarioComponent from '../cards/ComentarioComponent';
function ComentariosContent(params) {
    const {data}=params;
    const comentarios=data.map((e)=>{
        const {id,comentario,nick}=e;
        return (<ComentarioComponent key={id}
                    comentario={comentario}
                    nick={nick}/>)
    })           
    return(
        <div className="feed-container">      
            {comentarios}
        </div>
    )
}
export default ComentariosContent