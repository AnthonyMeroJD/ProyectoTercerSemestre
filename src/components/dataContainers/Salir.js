import React,{ Fragment} from 'react'
import {Redirect} from 'react-router-dom';
const updateDataUser=(callback,attr,value)=>callback(prev=>{
    const data=Object.assign({},prev);
    data[attr]=value;
    return data;
})
function Salir(params) {
    
    const{user,setUser}=params
    updateDataUser(setUser,'isLogin',false)
    updateDataUser(setUser,'password',"")
    return(
        <Fragment>
            <Redirect to="/"></Redirect>
        </Fragment>
    )

}


export default Salir