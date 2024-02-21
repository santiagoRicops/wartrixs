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
      <header className="p-[25px]  md:flex  md:justify-around md:items-center sm:flex-row">
        <NavBar />
      </header>
      <Baner />
      <main className=" xl:p-0 lg:p-0 md:p-0  relative ">
        <MenuCategories />
        {/* <ProductContainer /> */}
        <HomeCaruselProducts />
      </main>
    </RootLayout>
  )
}
