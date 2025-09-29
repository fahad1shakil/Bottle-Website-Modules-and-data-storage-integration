/**
 * 1. to get something from local storage, you will get it as a string
 * 2. convert this to javascript object/array
*/
const getCardFromLocalStorage =()=>{
    const storeCardString =localStorage.getItem('cart');

    if(storeCardString){
        const storecart = JSON.parse(storeCardString);
        return storecart;
    }
    return[];
}

const saveCartToLocalStorage = cart=>{
    const cartStrign =JSON.stringify(cart);
    localStorage.setItem('cart',cartStrign);

}

const additemToCartLocalStorage = id => {
    const cart = getCardFromLocalStorage();
    cart.push(id);
    const newCart =[...cart, id];

    // save new cart to local storage
    saveCartToLocalStorage(newCart);
}
// remove
const removeFromLocalStorage = id =>{
    const storedCart = getCardFromLocalStorage();
    const remainingCART = storedCart.filter(storedId => storedId !== id);
    saveCartToLocalStorage(remainingCART);
}




export{
    getCardFromLocalStorage as getStoreCart, 

    additemToCartLocalStorage as addToStorageCart,

  removeFromLocalStorage as removeFromCart} 