'use client'
import { useState } from 'react'
import Loading from './ui/loading'
import { uploadFile } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
const FromAdmin = () => {
  const [loading, SetLoading] = useState(false)
  const [bgloading, SetBgloading] = useState(false)
  const [fileUno, setFileUno] = useState(null)
  const [fileDos, setFileDos] = useState(null)
  const [fileTres, setFileTres] = useState(null)
  const [productOptions, setProductOptions] = useState({
    title: '',
    precio: Number,
    descripcion: '',
    stock: '',
    category: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setProductOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }))
  }
  const formatPrice = (price) => {
    const priceString = price.toString()
    const [integerPart, decimalPart] = priceString.split('.')
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      '.',
    )
    const formattedDecimalPart = decimalPart ? `.${decimalPart}` : ''
    return formattedIntegerPart + formattedDecimalPart
  }
  const handleSumitFile = async (e) => {
    try {
      e.preventDefault()
      if (!fileUno && !fileDos && !fileTres) {
        alert('Agrega una imagen -_-')
        return
      }
      SetBgloading(true)
      SetLoading(true)

      const Firestore = {
        title: productOptions.title,
        description: productOptions.descripcion,
        precio: formatPrice(parseFloat(productOptions.precio)),
        srcUno: await uploadFile(fileUno),
        srcDos: await uploadFile(fileDos),
        srcTres: await uploadFile(fileTres),
        stock: productOptions.stock,
        category: productOptions.category,
      }
      const productRef = collection(db, 'productos')
      await addDoc(productRef, { ...Firestore })
    } catch (error) {
      alert(`Error al subir la imagen ${error}`)
    } finally {
      SetBgloading(false)
      SetLoading(false)
    }
  }

  return (
    <>
      {' '}
      {bgloading && (
        <div className="absolute w-[100%] h-[100vh] top-[0] z-2  bg-[#3b3b3b71]"></div>
      )}
      {loading && <Loading />}
      <div className="flex justify-center m-[50px] gap-5">
        <form onSubmit={handleSumitFile}>
          <div className="m-[20px]">
            <input
              type="text"
              className="w-[250px] border border-gray-300 focus:outline-none focus:border-gray-500 p-2 rounded-md"
              placeholder="Titulo"
              name="title"
              id="title"
              value={productOptions.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-[20px]">
            <input
              type="text"
              className=" w-[250px]  border border-gray-300 focus:outline-none focus:border-gray-500 p-2 rounded-md"
              placeholder="Stock"
              name="stock"
              id="stock"
              value={productOptions.stock}
              onChange={handleChange}
              required
            />
          </div>
          <div className="m-[20px]">
            <input
              type="text"
              className=" w-[250px]  border border-gray-300 focus:outline-none focus:border-gray-500 p-2 rounded-md"
              placeholder="Category"
              name="category"
              id="category"
              value={productOptions.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="m-[20px] flex flex-col gap-[30px]">
            <label>
              <input
                type="file"
                name="file Uno"
                onChange={(e) => setFileUno(e.target.files[0])}
                placeholder="file Uno"
              />
            </label>

            <label>
              <input
                type="file"
                name="file Dos "
                onChange={(e) => setFileDos(e.target.files[0])}
                placeholder="file Dos"
              />
            </label>
            <label>
              <input
                type="file"
                name="file Tres"
                onChange={(e) => setFileTres(e.target.files[0])}
                placeholder="file Tres"
              />
            </label>
          </div>

          <div className="m-[20px]">
            <label>
              <textarea
                className="border w-[250px]  border-gray-300 focus:outline-none focus:border-gray-500 p-2 rounded-md"
                placeholder="Descripción"
                style={{ resize: 'none' }}
                rows={4}
                maxLength={300}
                name="descripcion"
                id="textTask"
                value={productOptions.descripcion}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="m-[20px]">
            <label>
              <input
                type="number"
                className=" w-[250px]  border border-gray-300 focus:outline-none focus:border-gray-500 p-2 rounded-md"
                placeholder="Precio"
                name="precio"
                id="precio"
                value={productOptions.precio}
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="w-[50px] m-[20px] text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base  sm:w-auto">
            Save
          </button>
        </form>
      </div>
    </>
  )
}
export default FromAdmin
