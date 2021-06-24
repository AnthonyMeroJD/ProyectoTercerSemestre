import React, { Fragment } from 'react';

function Header(params) {
    const { leftContent, rightContent,showMenu,setshowMenu } = params;
    const menuConfig = showMenu? "navbar-collapse justify-content-end":"collapse navbar-collapse justify-content-end";

    return (

        <Fragment>         
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid "> 
                            {leftContent}  
                            <button className="navbar-toggler" type="button"
                                    onClick={()=>{
                                        const show=!showMenu;
                                        setshowMenu(show)}}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className={menuConfig} >
                            {rightContent}
                        </div>                   
                </div>
            </nav>  
        
        </Fragment>

    )
}

export default Header