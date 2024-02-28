import ProductContainer from '@/components/productsContianer'

import NavBar from '@/components/navBar'

const Relojes = () => {
  return (
    <>
      <NavBar />

      <ProductContainer filterProductsPage={'wachts'} />
    </>
  )
}

export default Relojes
