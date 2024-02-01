'use client'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
export const useCart = () => {
  const Cart = useContext(CartContext)
  if (Cart === undefined) {
    throw new Error('undefine')
  }
  return Cart
}
