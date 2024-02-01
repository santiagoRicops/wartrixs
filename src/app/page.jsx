import HeaderHome from '@/components/headerHome'
import Baner from '@/components/ui/baner'
import MenuImages from '@/components/menuImage'

import ProductContainer from '@/components/productsContianer'
export const metadata = {
  title: 'Wartrix',
  description: 'Principal',
}
export default function Home() {
  return (
    <>
      <HeaderHome />
      <Baner />
      <main className="p-[30px] md:p-[50px] relative ">
        <MenuImages />
        <ProductContainer />
      </main>
    </>
  )
}
