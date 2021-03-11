import React from 'react';
import Navbar from './Navbar'
import '../Styles/App.css'


const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <div id="content">
        <h1>What we do</h1>
        <p>
          We offer a premium Pet Petting™ service. Simply head to our shop, 
          select which animals you would like to pet, and checkout. You will then 
          receive a voucher via hot-air balloon. If you see any animal on the street 
          for which you have a pet voucher, you simply present the voucher and you get 
          to pet the animal. It's as easy at that!
        </p>
      </div>
    </div>
  );
}

export default App;
