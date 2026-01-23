import React, { ReactNode } from 'react';
import { CartContext } from '../app/context/cartContext';

const TestCartProvider = ({ children }: { children: ReactNode }) => {
  const value = {
    cartItems: [],
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default TestCartProvider;