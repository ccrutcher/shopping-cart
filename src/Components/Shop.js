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



class Shop extends Component {

    constructor(){
        super()

        this.state = {
            pets: [{name: "Scoobert", image: first, number: 0},{name: "Millie", image: second, number: 0},{name: "Mr. Hops", image: third, number: 0},
            {name: "Trumpet", image: fourth, number: 0},{name: "Benjamin", image: fifth, number: 0},{name: "Puddles", image: sixth, number: 0},
            {name: "Sir Mixalot", image: seventh, number: 0}, {name: "Tootsie Roll", image: eighth, number: 0},{name: "Dr. Chaos", image: ninth, number: 0}]
        }

    }


    
    render(){

        console.log(this.state.pets[0])

        this.setState(prevState => ({
            pets: prevState.pets.map(
            obj => (obj.name === 'Scoobert' ? Object.assign(obj, { number: 1 }) : obj)
          )
        }));

        console.log(this.state.pets[0]);

        return(
            <div>
                <Navbar />
                <div className="shop-container">
                    <div className="shop">
                        {this.state.pets.map((pet, index) => {
                            return <Card source={pet.image} name={pet.name} number={pet.number} index={index} key={index}/>
                        })}
                    </div>
                    <Cart />
                </div>
            </div>
        );
    }
};

export default Shop;

/*this.state.pets.map((pet) => {
    return <Card source={pet.image} name={pet.name} number={pet.number} key={pet.name}/>
})*/