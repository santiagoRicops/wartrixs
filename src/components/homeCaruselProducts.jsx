'use client'
import CardProduct from './ui/productsCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'

const HomeCaruselProducts = () => {
  const [products, setProducts] = useState([])

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

  return (
    <section>
      <CardProduct products={products} />
    </section>
  )
}

export default HomeCaruselProducts
