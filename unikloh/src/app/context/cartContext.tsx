"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type CartItem = {
  id: number;
  title: string;
  quantity: number;
};

const CartContext = createContext<{
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(ci => ci.id === item.id);
      if (existingItem) {
        return prev.map(ci =>
          ci.id === item.id ? { ...ci, quantity: ci.quantity + item.quantity } : ci
        );
      } else {
        return [...prev, item];
      }
    });
  };
  const removeFromCart = (itemId: number) => {
    setCartItems(prev => prev.filter(ci => ci.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
