import React, { Fragment }from 'react'
import { Post } from 'react-axios'
import { Redirect, useParams } from 'react-router';
import { getQryApi, nuevoUser } from '../../utils/Const'

const updateDataUser=(callback,attr,value)=>callback(prev=>{
    const data=Object.assign({},prev);
    data[attr]=value;
    return data;
})

function UserCreate(params) {
    const {user,setUser}=params;
    const {nick,password,cod_pais,celular}=user;  
    const data=({nick,password,cod_pais,celular});
    const redirect=(<Redirect push to={"/"}></Redirect>)
    return(
        <Fragment>
            <Post url={getQryApi([nuevoUser])} data={data}>
            {
                (error, response)=>{
                   if(error) {                      
                    return(<p>sorry</p>)                                         
                   }
                   else if(response)  {
                        const {data}=response;
                        const {id}=data;
                       updateDataUser(setUser,'id',id);
                       updateDataUser(setUser,'isLogin',true);
                    return(redirect)
                   } else if(response!=null){
                    const {data}=response;
                    const {id}=data;
                    updateDataUser(setUser,'id',id);
                    updateDataUser(setUser,'isLogin',true);
                    return(redirect)
                   }
                   return (<p>sorry</p>)
                }
            }
            </Post>
        </Fragment>
    )

}

export default UserCreate