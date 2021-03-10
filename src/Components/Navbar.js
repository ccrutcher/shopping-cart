import React from 'react'
import '../Styles/Navbar.css'
import {Link} from 'react-router-dom';

const navbar = () => {
    return(
        <div className="Navbar">
            <span id="banner-msg">Shopping Site</span>
            <div id="link-container">
                <Link to='/' className="link">Main Page</Link>
                <Link to='/shop' className="link">Shop</Link>
            </div>
        </div>
    )
}

export default navbar;