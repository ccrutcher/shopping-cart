import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom';

const navbar = () => {
    return(
        <div className="Navbar">
            <button className="main-btn">
                <Link to='/'>Main Page</Link>
            </button>
            <button className="shop-btn">
                <Link to='/shop'>Shop</Link>
            </button>
        </div>
    )
}

export default navbar;