'use client'
import CardProduct from './ui/productsCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import LeftArrow from './icons/leftArrow'
import RightArrow from './icons/rightArrow'
import ButtonsCarusel from './icons/buttonsCarusel'
const HomeCaruselProducts = () => {
  const [products, setProducts] = useState([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'))
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
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

  if (products.length === 0) {
    return null
  }
  return (
    <>
      <section className="overflow-hidden relative">
        <h2 className="text-[30px] font-medium text-[#706f6f] flex justify-start  items-end absolute xl:top-[5%]  lg:top-[5%] top-[15%] md:top-[5%] xl:pl-[30px] lg:pl-[30px]  md:pl-[30px] pl-[50px]">
          Los más gustados
        </h2>
        <div className=" flex justify-end">
          <ButtonsCarusel onClick={scrollPrev}>
            <LeftArrow />
          </ButtonsCarusel>

          <ButtonsCarusel onClick={scrollNext}>
            <RightArrow />
          </ButtonsCarusel>
        </div>
        <div ref={emblaRef}>
          <div className="flex gap-[40px] p-[50px]">
            <CardProduct products={products} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCaruselProducts
