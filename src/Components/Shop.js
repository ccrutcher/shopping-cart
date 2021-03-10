import React, {Component} from 'react'
import Navbar from './Navbar'
import '../Styles/Shop.css';

class Shop extends Component {

    render(){
        return(
            <div>
                <Navbar />
                <div className="shop-container">
                    <div className="shop">Shop</div>
                    <div className="cart">
                        <h2>Your items</h2>
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                        <button className="checkout">Checkout</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Shop;
