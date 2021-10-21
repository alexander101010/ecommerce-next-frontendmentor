import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action === 'ADD_ITEMS') {
    //TODO:
  }
  if (action === 'REMOVE_ITEMS') {
    //TODO:
  }
  if (action === 'CLEAR') {
    //TODO:
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemsToCartHandler = (items) => {
    dispatchCart({
      type: 'ADD_ITEMS',
      items: { id: id, quantity: quantity },
    });
  };

  const removeItemsFromCartHandler = (items) => {
    dispatchCart({
      type: 'REMOVE_ITEMS',
      items: { id: id, quantity: quantity },
    });
  };

  const clearCartHandler = () => {
    dispatchCart({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemsToCartHandler,
    removeItems: removeItemsFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
