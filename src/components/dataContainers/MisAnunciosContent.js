import React, { Fragment } from 'react'
import { Get } from 'react-axios';
import { useParams } from 'react-router';
import { anuncios, getQryApi, user as UserReq } from '../../utils/Const';
import HeaderInclude from '../header/HeaderInclude';
import CartaComponente from '../cards/CartaComponente.js'
import { NavLink } from 'react-router-dom';
function MisAnunciosContent(params){
    const {id}=useParams();
    const {user,showMenu,setshowMenu,
        anuncioCurrent,setAnuncioCurrent}=params;
    const header=<HeaderInclude
            user={user}
            setshowMenu={setshowMenu}
            showMenu={showMenu}
        />
    return(
    <Get url={getQryApi([anuncios,UserReq,id])}>
             {(error, response, isLoading) => {
             if(error) {
                return (<div>Something bad happened</div>)
              }
              else if(isLoading) {
                return (<div>Loading...</div>)
              }
              else if(response !== null) {
                const {data}=response;    
                console.log(response);           
                if (data.length>0) {  
                  const anunciosPendientes=data.filter(({estado})=>estado==="Pendiente");
                  const anunciosDone=data.filter(({estado})=>estado!=="Pendiente");
                  const cartasAnuncioPendientes=anunciosPendientes.map(({id,titulo,descripcion,nombre_categoria,estado})=>{
                      return (<CartaComponente 
                            key={id}
                            tituloCarta={titulo}
                            categoria={nombre_categoria}
                            descripcionCarta={descripcion}                            
                            boton={<NavLink onClick={e=>{
                                setAnuncioCurrent(pre=>{
                                    return ({id,titulo,descripcion,nombre_categoria,estado,'userId':user.id})
                                })
                            }}
                                 className ="btn btn-primary" push to={"edit/".concat(id)}>Editar</NavLink>}
                      ></CartaComponente>)
                  });
                  const cartasAnunciosDone=anunciosDone.map(({id,titulo,descripcion,nombre_categoria,estado})=>{
                    return (<CartaComponente 
                          key={id}
                          tituloCarta={titulo}
                          boton={<NavLink onClick={e=>{
                            setAnuncioCurrent(pre=>{
                                return ({id,titulo,descripcion,nombre_categoria,estado,'userId':user.id})
                            })
                        }}
                             className ="btn btn-primary" push to={"edit/".concat(id)}>Editar</NavLink>}
                          categoria={nombre_categoria}
                          descripcionCarta={descripcion}
                    ></CartaComponente>)
                });
                  return (
                   <Fragment>
                       {header}
                       <div className="container mt-5">                           
                        <div className="row">
                            <div className="col"><h2  >Pendientes</h2></div>
                            <div className="col mt-3"><NavLink push to="/nuevoAnuncio" className="btn btn-primary">nuevo Anuncio</NavLink></div>
                            <hr/>
                        </div>                        
                        <div className="card-group row row-cols-1 row-cols-md-4 g-4">
                            {cartasAnuncioPendientes}
                        </div>
                        <div className="row">
                            <div className="col"><h2>Vendidos</h2></div>                            
                            <hr/>
                        </div> 
                        
                        <div className="card-group row row-cols-1 row-cols-md-4 g-4">
                            {cartasAnunciosDone}
                        </div>
                       </div>
                       
                       
                       

                   </Fragment>
                  )    
                }else{
                    return(
                         <Fragment>
                            {header}
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col"><h2  >Pendientes</h2></div>
                                    <div className="col mt-3"><NavLink push to="/nuevoAnuncio" className="btn btn-primary">nuevo Anuncio</NavLink></div>
                                    <hr/>
                                </div>       
                            <h2>Publica algo ahora!!</h2>
                            </div>                          
                        </Fragment>
                    )
                }              
              }
              return (<div>Default message before request is made.</div>)
            }}
    </Get>)
    
}

export default MisAnunciosContent;