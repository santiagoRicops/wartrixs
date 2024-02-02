'use client'
import { usePathname } from 'next/navigation'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '../../../../hooks/useCart'

const P = () => {
  const { addToCart } = useCart()
  const [productData, setProductData] = useState([])
  const fullPathName = usePathname()
  const partPatName = fullPathName.split('/')
  const idPath = partPatName[partPatName.length - 1].split('-')
  const idPartPath = idPath[1]

  const getProductById = async () => {
    try {
      const productRef = doc(db, 'productos', idPartPath)
      const productSnapshot = await getDoc(productRef)
      setProductData(productSnapshot.data())
    } catch (error) {
      console.log('No está funcionando:', error)
    }
  }

  getProductById()
  return (
    <section className=" p-8">
      <h1 className="text-3xl font-bold mb-4">{productData.title}</h1>
      <figure className="mb-4">
        <Image
          src={productData.src}
          alt={productData.title}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </figure>
      <p className="text-base mb-6">{productData.description}</p>
      <strong className="text-2xl text-blue-500">${productData.precio}</strong>

      <button
        className="bg-[#cca826] text-white border-none px-5 py-2 rounded-full hover:bg-[#b0851e] transition duration-300 mb-2 relative  flex items-center justify-center overflow-hidden group"
        onClick={() => {
          addToCart(productData)
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
      <button className="bg-blue-500 text-white py-3 px-6 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300 focus:outline-none">
        pay
      </button>
    </section>
  )
}

export default P
