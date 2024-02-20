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
      <main className="p-[30px] md:p-[50px] relative ">
        <MenuCategories />
        <ProductContainer />
        <HomeCaruselProducts />
      </main>
    </RootLayout>
  )
}
