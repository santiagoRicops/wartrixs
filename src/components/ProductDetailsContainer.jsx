'use client'
// /src/app/components/ProductDetailsContainer.jsx
import React, { useEffect } from 'react'
import ProductDetails from './ProductDetails'

const ProductDetailsContainer = ({ productId }) => {
  useEffect(() => {
    // Ejemplo de uso de useEffect para realizar acciones en el lado del cliente
    console.log('Componente montado en el lado del cliente')
  }, [])

  return (
    <div>
      <ProductDetails productId={productId} />
    </div>
  )
}

export default ProductDetailsContainer
