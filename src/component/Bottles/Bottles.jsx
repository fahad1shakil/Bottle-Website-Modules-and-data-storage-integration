import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({bottlesPromise}) => {
  //btn
  const [cart, setCart] = useState([]);  


    const bottles =use(bottlesPromise);
    // console.log(bottles);

    const handleAddtoCard=(bottle)=>{
        console.log('Bottle Will be added to the cart',bottle);

        // jodi thake
        const newCart=[...cart, bottle];
        setCart(newCart);
    }


    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
           <div className='bottles-container'>
             {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    handleAddtoCard={handleAddtoCard}
                bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;