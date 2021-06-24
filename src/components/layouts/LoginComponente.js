import React, { Fragment } from 'react';
import HeaderInclude from '../header/HeaderInclude';
import { Link, Redirect } from 'react-router-dom';
import AlertsComponente from '../cards/AlertsComponente';
const updateDataUser=(data,attr,value,callback)=>{
    const user=Object.assign({},data);
    user[attr]=value;
    callback(user);
}   
function LoginComponente(params) {
    const {user,setUser,
        showMenu,setshowMenu,infoLogin}=params;
    const {nick,password}=user;  
    const header=(<HeaderInclude
        user={user}
        setUser={setUser}
        showMenu={showMenu}
        setshowMenu={setshowMenu}/>);
    const info=infoLogin.map((data,index)=><AlertsComponente
            key={index}
            info={data.info}
            type={data.type}
    />    );
    const redirect=(<Redirect push to ="/"></Redirect>);
    return(
        <Fragment>
            {header}
            <div className="text-center">
                <main className="form-signin">                
                    <form>
                        <img alt="" className="mb-4" src="https://i.pinimg.com/originals/fb/5e/03/fb5e033cdebaf42cf6277702cb629c79.jpg" width="72"/>
                        
                        <h1 className="h2 mb-3 fw-normal"> Por favor Inicia Sesión</h1>
                        {info}
                        <div className="form-floating">
                            <input className="form-control" 
                                   type="text" placeholder="julanito19"
                                    id="ho" value={nick}
                                    onChange={e=>updateDataUser(user,"nick",e.target.value,setUser)}/>
                            <label htmlFor="ho">Nick</label>
                        </div>
                        <div className="form-floating">
                            <input className="form-control" 
                                   type="password" placeholder="ejemplo@email.com" 
                                   onChange={e=>updateDataUser(user,"password",e.target.value,setUser)}
                                   id="ho2" value={password}/>
                            <label htmlFor="ho2">Password</label>
                        </div>
                        <div className="checkbox mt-3">
                            <label>
                                <input type="checkbox"/>
                                Recuerdame
                            </label>
                        </div>
                        {password!==""?<Link 
                         push to={"/validar/".concat(nick).concat("/").concat(password)}
                         className="w-100 btn btn-primary btn-lg mt-3">Iniciar Sesión</Link>:null}
                        
                        <p className="mt-5 mb-3 text-muted">©Anthony Mero-Cristina Mena-Patrick Paredes 2021</p>
                           
                    </form>
                </main>
            </div>
           {user.isLogin && redirect}
        </Fragment>
    )
}
export default LoginComponente;