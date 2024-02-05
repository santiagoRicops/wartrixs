'use client'
import React, { useState, useEffect } from 'react'
import CardProduct from './ui/productsCard'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import Lupa from './icons/lupa'
import Loading from './ui/loading'
const ProductContainer = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('') // Estado para rastrear la categoría seleccionada
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const [filteredCategory, setFilteredCategory] = useState(null)
  useEffect(() => {
    const fechtData = async () => {
      try {
        //accediedno a firebase  para tomar los productos
        const querySnapshot = await getDocs(collection(db, 'productos'))
        const productData = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setProducts(productData)

        //obrtener categorias unicas
        const uniqueCategories = Array.from(
          new Set(productData.map((products) => products.category)),
        )
        setCategory(uniqueCategories)
        setIsloading(true)
      } catch (error) {
        console.log(error)
      }
    }
    fechtData()
  }, [])
  const handleCategoryChange = (event) => {
    const seletValue = event.target.value
    setSelectedCategory(seletValue)
    setFilteredCategory(seletValue)
  }
  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  const filterProducts = (product) => {
    const categoryMatch =
      selectedCategory === '' || product.category === selectedCategory
    const searchMatch = product.title
      .toLowerCase()
      .includes(searchValue.toLowerCase())
    const searchMatchCategory = product.category
      .toLowerCase()
      .includes(searchValue.toLowerCase())

    return categoryMatch && (searchMatch || searchMatchCategory)
  }

  const filteredProducts = products.filter(filterProducts)
  return isLoading ? (
    <>
      <div className="relative flex justify-center mt-[30px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[350px] xl:w-[400px] lg:w-[400px] md:w-[400px]   p-4"
          onChange={handleInputChange}
        />
        <Lupa />
      </div>
      {searchValue !== '' && filteredProducts.length === 0 && (
        <p>
          No hay productos que coincidan con la búsqueda y categoría
          seleccionadas.
        </p>
      )}

      <section className="p-[30px] a  mt-[50px] ">
        <div className="flex justify-center gap-[20px] items-start">
          <p className=" text-gray-600 mt-[-5px]  text-[20px]">filtrar: </p>
          <select
            className="mb-[50px] cursor-pointer "
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Todo</option>
            {category.map((category, i) => (
              <option key={i} className="cursor-pointer " value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <article className="flex flex-wrap gap-[50px] justify-center items-center">
          <CardProduct products={filteredProducts} />
        </article>
      </section>
    </>
  ) : (
    <Loading />
  )
}
export default ProductContainer
