import React, { Fragment } from 'react'
import { Get } from 'react-axios';
import { comentarios as ComentarioReq, getQryApi } from '../../utils/Const';
import ComentariosContent from './ComentariosContent.js';
function ComentariosComponent(params){
    const{idAnuncio}=params;

    return(
        <Get url={getQryApi([ComentarioReq,idAnuncio])}>
          {(error, response, isLoading) => {
             if(error) {
                return (<div>Something bad happened</div>)
              }
              else if(isLoading) {
                return (<div>Loading...</div>)
              }
              else if(response !== null) {
                const {data}=response;                
                if (data.length>0) {                       
                  return (
                    <Fragment>
                        <ComentariosContent
                        data={data}/>
                    </Fragment>
                  )    
                }else{
                    return(<div className="container">
                        <p>Esta publicacion no tiene comentarios</p>
                    </div>)
                }              
              }
              return (<div>Default message before request is made.</div>)
            }}
        </Get>
    )

}

export default ComentariosComponent

