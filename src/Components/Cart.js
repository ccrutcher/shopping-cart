import React from 'react';
import '../Styles/Shop.css'

const Cart = (props) => {

    let total = 0;

        return(
            <div className="cart">
                <h2>Your items</h2>
                <div className="items">
                    <ul>
                        {props.pets.map((pet) => {
                            if(pet.number > 0){
                                total += pet.number;
                                return <li key={pet.name}> <div className="pet-name">{pet.name}</div><div className="pet-number">{pet.number}</div></li>
                            }
                            return null;
                        })}
                    </ul>
                    <div id="total">Total pets: {total}</div>
                </div>

                <div className="checkout-container">
                    <p>Your total is ${total * 10}</p>
                    <button id="checkout-btn" onClick={() => {alert(`We have sent you a bill for $${total * 10} via carrier pigeon.`)}}>Checkout</button>
                </div>
                
            </div>
        )
}

export default Cart;

//<div className="pet-name">{pet.name}</div><div className="pet-number">{pet.number}</div>