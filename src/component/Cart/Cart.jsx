import React from 'react';
import Bottle from '../Bottle/Bottle';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            {
                
                cart.map(bottle => <div key={bottle.id}>
                <img src={bottle.img} alt=""/>
                <button onClick={() =>handleRemoveFromCart(bottle.id)}>X</button>
                
                </div>)
                
            }
        </div>
    );
};

export default Cart;