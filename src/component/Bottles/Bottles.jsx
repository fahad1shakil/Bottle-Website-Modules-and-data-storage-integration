import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStorageCart, getStoreCart, removeFromCart } from '../../uti/localstorage';
import Cart from '../Cart/Cart';


const Bottles = ({bottlesPromise}) => {
  //btn
  const [cart, setCart] = useState([]);  


    const bottles =use(bottlesPromise);
    // console.log(bottles);

    //useEffect
    useEffect(() =>{
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storeCart =[];

        for(const id of storedCartIds){
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                 storeCart.push(cartBottle);
            }
        }

       console.log('Stored cart',storeCart);
      setCart(storeCart)

    }, [bottles])

    const handleAddtoCard=(bottle)=>{
        console.log('Bottle Will be added to the cart',bottle);

        // jodi thake
        const newCart=[...cart, bottle];
        setCart(newCart);

        // Save the bottle Id in Storage 
    addToStorageCart(bottle.id);
    }


    // remove
    const handleRemoveFromCart  = id =>{
        console.log('Remove item from the cart',id);

        // bachai korte {! = = : !==}
        const reaminingCart = cart.filter(bottle => bottle.id  !==id);
        setCart(reaminingCart)
        removeFromCart(id)
    }

    return (
        <div>
            <h3>Bottle: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
              
              <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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