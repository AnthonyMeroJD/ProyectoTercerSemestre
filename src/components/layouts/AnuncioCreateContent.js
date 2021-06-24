import React, { Fragment } from 'react'
import AnuncioEditCard from '../cards/AnuncioEditCard';
import HeaderInclude from '../header/HeaderInclude';
function AnuncioCreateContent(params) {
    const {anuncioCurrent,
        setAnuncioCurrent,
        dropMenuControlers,
        setDropMenuControlers,
        user,showMenu,setshowMenu
    }=params
    const editComponent=(<AnuncioEditCard   
    edit={false} 
    anuncioCurrent={anuncioCurrent}
    setAnuncioCurrent={setAnuncioCurrent}
    dropMenuControlers={dropMenuControlers}
    setDropMenuControlers={setDropMenuControlers}/>);
    const header=(<HeaderInclude
        user={user}        
        showMenu={showMenu}
        setshowMenu={setshowMenu}/>);
    return(
        <Fragment>
            {header}
            {editComponent}
        </Fragment>
    )


}
export default AnuncioCreateContent
