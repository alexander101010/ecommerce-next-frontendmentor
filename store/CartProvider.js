import React, { useReducer } from 'react';

import CartContext from './cart-context';

const dummyCart = [
  {
    id: 's1',
    price: 125,
    quantity: 3,
    title: 'Fall Limited Edition Sneakers',
    imgPath: './images/image-product-1-thumbnail.jpg',
    imgDescription: 'Sweet Fall Kicks',
  },
  {
    id: 's2',
    price: 125,
    quantity: 1,
    title: 'Fall Limited Edition Sneakers',
    imgPath: './images/image-product-2-thumbnail.jpg',
    imgDescription: 'Sweet Fall Kicks',
  },
];

const defaultCartState = {
  items: dummyCart,
  // items: [],
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEMS') {
    ////////////////////////////////////////
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.payload.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: [...updatedItems],
    };
  }

  if (action.type === 'REMOVE_ITEMS') {
    const targetId = action.payload;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === targetId
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // could add logic to just remove one at a time, but lets just bin all of them
    if (existingCartItem) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    }

    return {
      items: updatedItems,
    };
    // console.log(existingCartItemIndex);
    // const updatedItems = state.items.filter((item) => item.id !== targetId);
    // console.log(updatedItems);
    // return {
    //   items: [...updatedItems],
    // };
  }
  if (action.type === 'CLEAR') {
    ////////////////////////////////////////////
    return {
      items: [],
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({
      type: 'ADD_ITEMS',
      payload: item,
    });
  };

  const removeItemsFromCartHandler = (id) => {
    dispatchCart({
      type: 'REMOVE_ITEMS',
      payload: id,
    });
  };

  const clearCartHandler = () => {
    dispatchCart({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
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
