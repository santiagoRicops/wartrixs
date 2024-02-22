'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../../../hooks/useCart'
import LazyLoad from 'react-lazyload'
import Alert from './notificacion'
import Link from 'next/link'
import ButtonCart from './buttonCart'

const CardProduct = ({ products, onNavigate }) => {
  const { addToCart } = useCart()
  const [notification, setNotification] = useState(null)

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <>
      <Alert notification={notification} />
      {products.map((product, i) => (
        <LazyLoad height={300} offset={100} key={i}>
          <article
            className="bg-[#fef8f0] p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 w-64"
            id={product.category}
          >
            <div className="relative h-40 overflow-hidden rounded-lg mb-4">
              <Link
                href={`/products/${product.title.toLowerCase()}-${product.id}`}
              >
                <Image
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  src={product.srcUno}
                  alt={product.title}
                  width={270}
                  height={160}
                />
              </Link>
              
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#3a220e]">
                {product.title}
              </h3>
              <p className="text-sm text-[#8d611b]">{product.description}</p>
              <p className="text-sm font-semibold text-[#b0851e]">
                ${product.precio}
              </p>
            </div>
            <footer className="relative">
              <ButtonCart
                onClick={() => {
                  addToCart({ ...product, cartId: i })
                  showNotification('Producto agregado al carrito')
                }}
              />
              <p className="text-xs text-gray-600 mb-2">
                Categoria: {product.category}
              </p>
              <div className="text-xs text-gray-600 mb-2">
                {product.stock ? `Stock: ${product.stock}` : 'Agotado'}
              </div>
              <Link
                href={`/products/${product.title.toLowerCase()}-${product.id}`}
                className="text-[#cca826] text-xs hover:underline font-semibold"
              >
                Ver detalles
              </Link>
            </footer>
          </article>
        </LazyLoad>
      ))}
    </>
  )
}

export default CardProduct
