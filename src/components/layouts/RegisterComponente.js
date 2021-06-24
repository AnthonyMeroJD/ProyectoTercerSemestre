import React, { Fragment } from 'react';
import HeaderInclude from '../header/HeaderInclude';
import { NavLink, Redirect } from 'react-router-dom';
import AlertsComponente from '../cards/AlertsComponente';
const updateDataUser=(callback,attr,value)=>callback(prev=>{
    const data=Object.assign({},prev);
    data[attr]=value;
    return data;
})

function RegisterComponente(params) {
    const {user,setUser,
        showMenu,setshowMenu}=params;
    const {nick,password,cod_pais,celular}=user;  
    const header=(<HeaderInclude
        user={user}
        setUser={setUser}
        showMenu={showMenu}
        setshowMenu={setshowMenu}/>);   
    const registroBtn=(<NavLink  className="btn btn-primary mt-5" push to ="/crearUsuario">Registrarse</NavLink>);   

    return(
        <Fragment>
            {header}
            <div className="text-center">
                <main className="container">                
                    <form>
                        <img alt="" className="mb-4" src="https://i.pinimg.com/originals/fb/5e/03/fb5e033cdebaf42cf6277702cb629c79.jpg" width="72"/>
                        
                        <h1 className="h2 mb-3 fw-normal"> Por favor Registrate</h1>
                        
                        <div className="form-floating mt-2">
                            <input className="form-control" 
                                   type="text" placeholder="julanito19"
                                    id="ho" value={nick}
                                    onChange={e=>updateDataUser(setUser,'nick',e.target.value)}
                                    />
                            <label htmlFor="ho">Nick</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input className="form-control" 
                                   type="password" placeholder="ejemplo@email.com" 
                                   value={password}
                                   onChange={e=>updateDataUser(setUser,'password',e.target.value)}
                                   id="ho2" />
                            <label htmlFor="ho2">Password</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input className="form-control" 
                                   type="text"
                                   value={cod_pais}
                                   onChange={e=>updateDataUser(setUser,'cod_pais',e.target.value)}
                                    placeholder="codigo del pais"
                                    id="ho" ></input>
                                    
                            <label htmlFor="ho">Codigo Pais</label>
                        </div>
                        <div className="form-floating mt-2">
                            <input className="form-control" 
                                   type="text" placeholder="numero" 
                                   onChange={e=>updateDataUser(setUser,'celular',e.target.value)}
                                   value={celular}
                                   id="ho2" />
                            <label htmlFor="ho2">Celular</label>
                        </div>
                      {registroBtn}
                        
                        
                        
                           
                    </form>
                </main>
            </div>
           
        </Fragment>
    )
}
export default RegisterComponente;