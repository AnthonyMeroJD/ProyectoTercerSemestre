
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from 'react-axios';
import {anuncios, getQryApi} from '../../utils/Const.js'
import DetalleAnuncio from '../layouts/DetalleAnuncio.js';
function AnuncioDetalle(params) {
    const{id}=useParams();
    const {user,showMenu,
      setshowMenu,comentarioCurrent,
      setComentarioCurrent,infoComentario}=params;
    return(
            <Fragment>
                <Get url={getQryApi([anuncios,id])}>
                {(error, response, isLoading) => {
                     if(error) {
                        return (<div>Something bad happened</div>)
                      }
                      else if(isLoading) {
                        return (<div>Loading...</div>)
                      }
                      else if(response !== null) {
                        const {data}=response;
                        console.log(data);
                        if (data) {                          
                          return (
                            <Fragment>
                              
                              <DetalleAnuncio
                                data={data}
                                user={user}
                                showMenu={showMenu}
                                setshowMenu={setshowMenu}
                                comentarioCurrent={comentarioCurrent}
                                setComentarioCurrent={setComentarioCurrent}                                
                                infoComentario={infoComentario}
                              />
           
                            </Fragment>
                          )    
                        }
                      
                      }
                      return (<div>Default message before request is made.</div>)
                }}
            </Get>
            </Fragment>
        )

}


export default AnuncioDetalle