import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <Fragment>
      <div className="nagivation-container">
        <Link className="logo-container" to="/">
          <div>logo</div>
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
