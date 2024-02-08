'use client'
import '../../globals.css'
import { usePathname } from 'next/navigation'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useCart } from '../../../../hooks/useCart'
import ButtonCart from '../../../components/ui/buttonCart'
import Loading from '@/components/ui/loading'
import NavBar from '@/components/navBar'
import ArrowBack from '@/components/icons/arrowBack'
import Link from 'next/link'
import Alert from '@/components/ui/notificacion'
import EmblaCarousel from '@/components/ui/productCarrusel'
const DetailsProducts = () => {
  const OPTIONS = {} // Agrega opciones según sea necesario
  const SLIDE_COUNT = 3
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  const { addToCart } = useCart()
  const [productData, setProductData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState(null)

  const fullPathName = usePathname()
  const partPatName = fullPathName.split('/')
  const idPath = partPatName[partPatName.length - 1].split('-')
  const idPartPath = idPath[1]

  useEffect(() => {
    const getProductById = async () => {
      try {
        const productRef = doc(db, 'productos', idPartPath)
        const productSnapshot = await getDoc(productRef)
        setProductData(productSnapshot.data())
        setIsLoading(true)
      } catch (error) {
        console.log('No está funcionando:', error)
      }
    }

    getProductById()
  }, [])

  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }
  return isLoading ? (
    <>
      <header className="p-[25px]  md:flex  md:justify-around md:items-center sm:flex-row">
        <NavBar>
          <Link
            className="flex gap-[10px] cursor-pointer absolute xl:left-4 lg:left-4 md:left-4 left-[30%] xl:top-auto lg:top-auto md:top-auto top-[15%]"
            href="/"
          >
            <ArrowBack />
            <p className="font-semibold">Regresar</p>
          </Link>
        </NavBar>
      </header>
      <Alert notification={notification} />
      <section className="flex flex-wrap xl:gap-[100px] lg:gap-[100px] md:gap-[40px] justify-center items-center h-[100vh]">
        <EmblaCarousel
          slides={SLIDES}
          options={OPTIONS}
          images={[productData.srcUno, productData.srcDos, productData.srcTres]}
          className="rounded-md shadow-lg"
        />

        <article className="bg-white p-8 rounded-md shadow-lg max-w-md">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
            {productData.title}
          </h1>
          <p className="text-lg mb-2 text-gray-600">
            {productData.description}
          </p>
          <strong className="text-2xl text-blue-500 block mb-4">
            ${productData.precio} cop
          </strong>

          <div className="flex flex-wrap justify-center gap-[30px]  items-center ">
            <ButtonCart
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => {
                addToCart(productData)
                showNotification('Producto agregado al carrito')
              }}
            />

            <button className="bg-yellow-500 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-yellow-600 transition duration-300 focus:outline-none">
              Pagar Ahora
            </button>
          </div>
        </article>
      </section>
    </>
  ) : (
    <Loading />
  )
}

export default DetailsProducts
