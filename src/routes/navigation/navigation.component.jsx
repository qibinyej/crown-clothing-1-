import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

function Navigation() {
  return (
    <Fragment>
      <div className="nagivation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/** 
          
          --- more nav links ---
        
          */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
