import React,{ Fragment} from 'react'
import {Get} from 'react-axios'
import { Redirect,useParams } from 'react-router-dom';
import {getQryApi,user as userReq} from '../../utils/Const.js'
import LoginComponente from '../layouts/LoginComponente.js';
function LoginValidate(params) {
    const {nick,password}=useParams();
    const {setUser,setInfoLogin}=params;    
    const redirect=<Redirect to="/ingresar"></Redirect>    
    return(  
        <Fragment>
        <Get url={getQryApi([userReq,nick,password])}>
        {(error, response, isLoading) => {
        if(error) {        
            return (<div>algo ocurrio</div>)
        }
        else if(isLoading) {
            return (<div>Consultando...</div>)
        }
        else if(response !== null) {            
            const{validate,id}=response.data;
            if (validate) {                         
                return (                    
                    <Fragment>                                                  
                           {setUser((prev)=>{
                                if (!prev.isLogin) {         
                                    const isLogin=validate                          
                                    return({nick,password,id,isLogin})
                                }else{
                                    return prev
                                }
                            })}
                            {setInfoLogin(prev=>{                                   
                                    if (!prev.some(e=>e.info=="Bienvenido")) {
                                        return [{info:"Bienvenido",type:"success"}]  ;
                                    }else{
                                        return prev;
                                    }                                      
                            })} 
                            {redirect}
                    </Fragment>                
                    
                )
            }else{
                return (<div>  
                            {setInfoLogin(prev=>{                                   
                                    if (!prev.some(e=>e.info=="datos incorrectos")) {
                                        return [...prev,{info:"datos incorrectos",type:"error"}]  ;
                                    }else{
                                        return prev;
                                    }                                      
                            })}     
                            {redirect}
                        </div>)   
            }     
        }
        
        return (<div>Default message before request is made.</div>)
        }}
        
        </Get>
        
        </Fragment>
    )
}
export default LoginValidate