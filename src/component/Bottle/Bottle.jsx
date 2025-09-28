import React from 'react';
import './bottle.css';

const Bottle = ({bottle, handleAddtoCard}) => {


  const {img,name,price, stock}=bottle;
    // console.log(Bottle);
    
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>Available: {stock}</p>
            
            <button onClick={()=>handleAddtoCard(bottle)}>Buy Now</button>
        </div>
    );
};

// function moddhe call deya jabe na rape korte hobem,
// handleAddtoCard(bottle) / ()=>handleAddtoCard(bottle) 
export default Bottle;