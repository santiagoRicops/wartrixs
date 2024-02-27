import ProductContainer from '@/components/productsContianer'

import NavBar from '@/components/navBar'
import A from './hola'

const Relojes = () => {
  return (
    <>
      <NavBar />

      <ProductContainer filterProductsPage={'wachts'} />
      <A />
    </>
  )
}

export default Relojes
