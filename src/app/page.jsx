import Baner from '@/components/ui/baner'

import ProductContainer from '@/components/productsContianer'
import RootLayout from './layout'
import NavBar from '@/components/navBar'
import MenuCategories from '@/components/ui/menuCategories'
import HomeCaruselProducts from '@/components/homeCaruselProducts'

export const metadata = {
  title: 'Wartrix',
  description: 'Principal',
}
export default function Home() {
  return (
    <RootLayout>
      <NavBar />

      <Baner />
      <main className=" xl:p-0 lg:p-0 md:p-0  relative ">
        <MenuCategories />

        <HomeCaruselProducts />
        <ProductContainer />
      </main>
    </RootLayout>
  )
}
