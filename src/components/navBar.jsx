'use client'
import logoWartix from '../../public/wartix.webp'
import { useState } from 'react'
import IconHeadset from './icons/Headset'
import IconUser from './icons/user'
import IconShoppingBang from './icons/shoppingBag'
import Cart from './cart'
import X from './icons/x'
import Image from 'next/image'
import Registerform from './formRegister'
import AccountInfo from './accountUserInfo'
import FormSignIn from './formSignIn'
import { useAccount } from '../../hooks/useAccount'

const NavBar = ({ children }) => {
  const [seeCart, setSeeCart] = useState(false)
  const [accountLogin, setAccountLogin] = useState(false)
  const [accountRegister, setAccountRegister] = useState(false)
  const { userData, myData, SignOff } = useAccount()

  const toogleSeeAccountLogin = () => {
    setAccountLogin(!accountLogin)
  }

  const toogleSeeAccountRegister = () => {
    setAccountRegister(!accountRegister)
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

      <nav className="flex items-center justify-around gap-[10px] xl:gap-[100px] lg:gap-[30px] md:gap-[20px] ">
        {children}
        <IconHeadset />
        <div className="flex justify-center m-3 md:block md:m-0">
          <figure className="w-[90px] xl:mr-[0px] md:mr-[30px] cursor-pointer">
            <Image href="/" src={logoWartix} alt="logo Wartix" />
          </figure>
        </div>
        <IconUser />
        {accountLogin || accountRegister ? (
          <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[#00000054] z-[3]"></div>
        ) : (
          ''
        )}

        {accountRegister && accountLogin && setAccountLogin(false)}

        <FormSignIn
          className={`absolute top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
            accountLogin ? 'top-[20%] opacity-100' : 'opacity-0'
          }`}
          childrenP={
            <p onClick={toogleSeeAccountRegister}>
              no tienes cuenta?<b>Crea Una</b>
            </p>
          }
        >
          <X className=" mt-[-10px]" onClick={toogleSeeAccountLogin} />
        </FormSignIn>
        <Registerform
          className={`absolute top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
            accountRegister ? 'top-[5%] opacity-100' : 'opacity-0'
          }`}
          childrenP={
            <p onClick={toogleSeeAccountLogin}>
              Ya tienes cuenta?<b>inicia sesión</b>
            </p>
          }
        >
          <X className=" mt-[-10px]" onClick={toogleSeeAccountRegister} />
        </Registerform>

        <IconShoppingBang onClick={viewCart} />
        {userData && myData ? (
          <>
            <AccountInfo />
            <button onClick={SignOff}>cerrar sesión</button>
          </>
        ) : (
          <button onClick={toogleSeeAccountLogin}>iniciar sesión</button>
        )}
      </nav>
    </>
  )
}

export default NavBar
