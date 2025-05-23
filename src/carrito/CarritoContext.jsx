import React, { createContext, useContext, useState } from 'react';

const CarritoContext = createContext();

export function useCarrito() {
  return useContext(CarritoContext);
}

export function CarritoProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log(cart)
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev =>
      prev
        .map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p)
        .filter(p => p.quantity > 0)
    );
  };

  return (
    <CarritoContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CarritoContext.Provider>
  );
}

