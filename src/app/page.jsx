import HeaderHome from '@/components/headerHome'
import Baner from '@/components/ui/baner'
import MenuImages from '@/components/menuImage'

import ProductContainer from '@/components/productsContianer'
import RootLayout from './layout'
export const metadata = {
  title: 'Wartrix',
  description: 'Principal',
}
export default function Home() {
  return (
    <RootLayout>
      <HeaderHome />
      <Baner />
      <main className="p-[30px] md:p-[50px] relative ">
        <MenuImages />
        <ProductContainer />
      </main>
    </RootLayout>
  )
}
