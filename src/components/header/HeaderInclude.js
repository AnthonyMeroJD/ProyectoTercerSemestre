import React, { Fragment } from 'react'
import { nameOfSite } from '../../utils/Const';
import { logoSrc } from '../../utils/ImgRutas';
import Header from './Header';
import LogoComponente from './LogoComponent';
import MenuComponent from './MenuComponent';
function HeaderInclude(params) {
    const {user,showMenu,setshowMenu}=params;
    const menuComponent=(<MenuComponent
        user={user}       
        showMenu={showMenu}
        setshowMenu={setshowMenu}/>);
    const logo=(<LogoComponente  imgSrc={logoSrc}  label={nameOfSite}/>)
    const header=(<Header 
                    rightContent={menuComponent} 
                    leftContent={logo}
                    showMenu={showMenu}
                    setshowMenu={setshowMenu}/>);
      return(
          <Fragment>
          {header}
          </Fragment>
      )
}
export default HeaderInclude;