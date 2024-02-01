'use client'
import logoWartix from '../../public/wartix.webp'
import { useState } from 'react'
import IconHeadset from './icons/Headset'
import IconUser from './icons/user'
import IconShoppingBang from './icons/shoppingBag'
import Cart from './cart'
import X from './icons/x'

import Image from 'next/image'

const NavBar = () => {
  const [seeCart, setSeeCart] = useState(false)

  const viewCart = () => {
    setSeeCart(true)
  }
  const hiddenCart = () => {
    setSeeCart(false)
  }

  return (
    <>
      <Cart
        icon={<X onClick={hiddenCart} />}
        className={`transition-all duration-300 transform ${
          seeCart ? 'translate-x-4 scale-100' : '-translate-x-full scale-0'
        }`}
      />

      <nav className="flex items-center justify-around gap-[10px] xl:gap-[100px]  lg:gap-[30px] md:gap-[20px] ">
        <IconHeadset />
        <div className="flex justify-center m-3 md:block md:m-0">
          <figure className="w-[90px] xl:mr-[0px] md:mr-[30px] cursor-pointer">
            <Image href="/" src={logoWartix} alt="logo Wartix" />
          </figure>
        </div>
        <IconUser />
        <IconShoppingBang onClick={viewCart} />
      </nav>
    </>
  )
}

export default NavBar
