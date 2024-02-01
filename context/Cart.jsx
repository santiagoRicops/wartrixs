'use client'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  // Mueve la declaración de initialCart fuera del if
  const initialCart =
    typeof localStorage !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) || []
      : []

  const [cart, setCart] = useState(initialCart)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.cartId === product.cartId)

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.cartId === existingProduct.cartId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      )
      setCart(updatedCart)
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product) => {
    const updatedCart = cart.map((item) =>
      item.cartId === product.cartId
        ? {
            ...item,
            quantity: Math.max(0, item.quantity - 1),
            total: Math.max(0, (item.quantity - 1) * item.price),
          }
        : item,
    )

    const filteredCart = updatedCart.filter((item) => item.quantity > 0)

    setCart(filteredCart)
  }

  const removeFromCartAll = (product) => {
    setCart((prevState) =>
      prevState.filter((item) => item.cartId !== product.cartId),
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, removeFromCartAll }}
    >
      {children}
    </CartContext.Provider>
  )
}
