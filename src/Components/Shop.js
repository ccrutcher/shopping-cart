import React, {Component} from 'react'
import Navbar from './Navbar'
import Cart from './Cart'
import Card from './Card'
import '../Styles/Shop.css';
import first from '../Imgs/1.jpg'
import second from '../Imgs/2.jpg'
import third from '../Imgs/3.jpeg'
import fourth from '../Imgs/4.jpg'
import fifth from '../Imgs/5.jpeg'
import sixth from '../Imgs/6.jpg'
import seventh from '../Imgs/7.jpeg'
import eighth from '../Imgs/8.jpg'
import ninth from '../Imgs/9.jpeg'

const Shop = () => {

    const pets = [{name: "first", image: first},{name: "second", image: second},{name: "third", image: third},
        {name: "fourth", image: fourth},{name: "fifth", image: fifth},{name: "sixth", image: sixth},
        {name: "seventh", image: seventh}, {name: "eighth", image: eighth},{name: "ninth", image: ninth}];

        return(
            <div>
                <Navbar />
                <div className="shop-container">
                    <div className="shop">
                            {pets.map((pet) => {
                                return <Card source={pet.image} name={pet.name} key={pet.name}/>
                            })}
                    </div>
                    <Cart />
                </div>
            </div>
        );
};

export default Shop;
