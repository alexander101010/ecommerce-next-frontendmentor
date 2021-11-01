import React from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItems: (id) => {},
  clearCart: () => {},
});

export default CartContext;
