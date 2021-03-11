import React, {Component} from 'react';
import '../Styles/Shop.css'

class Cart extends Component {
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div className="cart">
                <h2>Your items</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
                <button className="checkout">Checkout</button>
            </div>
        )
    }
}

export default Cart;