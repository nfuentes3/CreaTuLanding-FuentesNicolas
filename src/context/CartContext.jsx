import { createContext, useState, useContext, useEffect } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

// Provider del contexto
export const CartProvider = ({ children }) => {
  // Estado inicial del carrito con recuperación desde localStorage
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sincronizar cambios del carrito hacia localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya existe, actualizar la cantidad
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      // Si es nuevo, agregarlo al carrito
      setCart([...cart, { ...product, quantity }]);
    }
  };

  // Eliminar un producto específico del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Verificar si un producto está en el carrito
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  // Obtener cantidad total de productos (suma de todas las cantidades)
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Obtener cantidad de un producto específico en el carrito
  const getProductQuantity = (productId) => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
    getProductQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
