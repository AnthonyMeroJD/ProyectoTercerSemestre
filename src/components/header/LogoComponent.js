import React, { Fragment } from 'react';

function LogoComponente(params) {
    const {imgSrc,label}=params
    return(
        <Fragment>            
            
            <a className="navbar-brand" href="#">
            <img src={imgSrc} alt="" width="100"  className="d-inline-block"/>
            {label}
            </a>
            
        </Fragment>
    )
}
export default LogoComponente




