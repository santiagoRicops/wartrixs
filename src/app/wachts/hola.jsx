'use client'
// A.js
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../firebase'
import { useState, useEffect } from 'react'
import CardProduct from '@/components/ui/productsCard'

const A = () => {
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'))
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setProductData(data)
      } catch (error) {
        console.log('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const filterWatches = () => {
    const filteredProducts = productData.filter(
      (product) => product.category === 'No sé',
    )
    console.log('Filtered Products:', filteredProducts)
    return filteredProducts
  }
  console.log('Product Data:', productData)
  return (
    <div>
      <CardProduct products={filterWatches()} />
    </div>
  )
}

export default A
