import React from 'react';
import {ReactNavbar} from "overlay-navbar";

function Header() {
  return (
    <div>
        <ReactNavbar 
            burgerColor="#eb4034"
            burgerColorHover="#a62d24"
            // logo={logo}
            // logoWidth="20vmax"
            navColor1="white"
            navColor5="yellow"
             />
    </div>
  )
}

export default Header;