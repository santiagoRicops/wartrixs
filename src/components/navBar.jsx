'use client'
import logoWartix from '../../public/wartix.webp'
import { useState } from 'react'
import IconHeadset from './icons/Headset'
import IconUser from './icons/user'
import IconShoppingBang from './icons/shoppingBag'
import Cart from './cart'
import X from './icons/x'

import Image from 'next/image'
import LoginForm from './accountUsers'

const NavBar = ({ children }) => {
  const [seeCart, setSeeCart] = useState(false)
  const [account, setAccount] = useState(false)
  const toogleSeeAccount = () => {
    setAccount(!account)
  }
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
        {children}
        <IconHeadset />
        <div className="flex justify-center m-3 md:block md:m-0">
          <figure className="w-[90px] xl:mr-[0px] md:mr-[30px] cursor-pointer">
            <Image href="/" src={logoWartix} alt="logo Wartix" />
          </figure>
        </div>
        <IconUser onClick={toogleSeeAccount} />
        <LoginForm
          className={`absolute top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
            account ? 'top-[20%] opacity-100' : 'opacity-0'
          }`}
        />

        <IconShoppingBang onClick={viewCart} />
      </nav>
    </>
  )
}

export default NavBar
