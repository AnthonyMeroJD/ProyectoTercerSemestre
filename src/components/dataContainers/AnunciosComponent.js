import { Get } from 'react-axios';
import React , { Fragment }from 'react';
import CartaComponente from '../cards/CartaComponente';
import { getQryApi } from '../../utils/Const';
import { Link } from 'react-router-dom';

         
function AnunciosComponent(params) {
    const {req}=params;
    return(
        <Fragment>
            <Get url={getQryApi(req)}>
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
                          const cartas=data.map(({titulo,nombre_categoria,
                            id, descripcion,
                            valoracion})=>
                                  <CartaComponente
                                    key={id}
                                    id={id}
                                    boton={(<Link className="btn btn-primary" push to={"/anuncio/".concat(id)}>Detalles</Link>)}
                                    srcImagenCarta={"https://image.freepik.com/free-psd/front-view-two-hard-cover-book-mockup_1150-37607.jpg"}
                                    tituloCarta={titulo}                                      
                                    categoria={nombre_categoria}
                                    descripcionCarta={descripcion}/>)
                            return (
                            <div className="card-group row row-cols-1 row-cols-md-4 g-4">
                            {cartas} </div>
                            )    
                        }else{
                            return(
                              <div className="container">
                                <h3>!Ups! No hay anuncios en esta categoria </h3>
                              </div>
                              
                            )
                        }
                        
                        }
                      return (<div>Default message before request is made.</div>)
                }}
            </Get>
        </Fragment>
    )
    
}


export default AnunciosComponent;