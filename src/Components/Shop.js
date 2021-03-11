import React, {Component} from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import '../Styles/Shop.css';

class Shop extends Component {

    render(){
        return(
            <div>
                <Navbar />
                <div className="shop-container">
                    <div className="shop">Shop</div>
                    <Cart />
                </div>
            </div>
        );
    }
};

export default Shop;
