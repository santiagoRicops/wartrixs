'use client'
import CardProduct from './ui/productsCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
const HomeCaruselProducts = () => {
  const [products, setProducts] = useState([])
  const [emblaRef, emblaApi] = useEmblaCarousel()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'))
        const productsData = querySnapshot.docs.map((doc) => doc.data())
        setProducts(productsData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <>
      <section className="">
       
        <div ref={emblaRef} className="overflow-hidden">
          <div className=" flex gap-[40px] p-[100px]">
            <CardProduct products={products} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCaruselProducts
