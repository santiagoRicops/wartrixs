'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../../../hooks/useCart'
import LazyLoad from 'react-lazyload'
import Alert from './notificacion'
import Link from 'next/link'

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
              <a>
                <Image
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                  src={product.src}
                  alt="exampleimag"
                  width={256}
                  height={160}
                />
              </a>
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
              <button
                className="bg-[#cca826] text-white border-none px-5 py-2 rounded-full hover:bg-[#b0851e] transition duration-300 mb-2 relative  flex items-center justify-center overflow-hidden group"
                onClick={() => {
                  addToCart({ ...product, cartId: i })
                  showNotification('Producto agregado al carrito')
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-shopping-cart transform transition-transform duration-300 group-hover:translate-x-[65px] -translate-x-1/2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <span className="opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  Agregar al carrito
                </span>
              </button>
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
