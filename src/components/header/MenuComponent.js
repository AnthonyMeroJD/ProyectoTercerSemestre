import React from 'react';
import {NavLink} from "react-router-dom";
import { menuUsuario,menuInvitado} from '../../utils/Const.js';
function MenuComponent(params) {
    const {user}=params;    
    const menu=user.isLogin?menuUsuario():menuInvitado();    
    const menuComponents =menu.map(({label,url,id})=>{
                    if (url=="/misAnuncios") {
                        return (<li className="nav-item" key={id}>
                            <NavLink className="nav-link" push to={url.concat("/").concat(user.id)}>{label}</NavLink>                     
                        </li>)   
                    }else{    
                        return (<li className="nav-item" key={id}>
                            <NavLink className="nav-link" push to={url}>{label}</NavLink>                     
                        </li>)
                        }
                    });               
    return(           
                
                <ul className="navbar-nav nav pull-right">
                    {menuComponents}
                </ul>       
                
         
             
        
    )

    
}
export default MenuComponent;