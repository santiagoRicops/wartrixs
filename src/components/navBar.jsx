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
import Menu from './ui/menu'

const NavBar = ({ children }) => {
  const [seeCart, setSeeCart] = useState(false)
  const [userInfo, setUserInfo] = useState(false)
  const [accountLogin, setAccountLogin] = useState(false)
  const [accountRegister, setAccountRegister] = useState(false)
  const { userData, myData, SignOff } = useAccount()

  const toogleSeeAccountLogin = () => {
    setAccountLogin(!accountLogin)
    setAccountRegister(false) // Asegurarse de que al abrir el login, el registro se cierre
  }

  const toogleSeeAccountRegister = () => {
    setAccountRegister(!accountRegister)
    setAccountLogin(false) // Asegurarse de que al abrir el registro, el login se cierre
  }

  const toogleUserInfo = () => {
    setUserInfo(!userInfo)
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
      <header className="p-[25px]  md:flex  md:justify-around md:items-center sm:flex-row">
        <nav className="flex flex-wrap items-center justify-around gap-[10px] xl:gap-[100px] lg:gap-[30px] md:gap-[20px] ">
          {children}
          <IconHeadset />
          <div className="flex justify-center m-3 md:block md:m-0">
            <figure className="w-[90px] xl:mr-[0px] md:mr-[30px] cursor-pointer">
              <Image href="/" src={logoWartix} alt="logo Wartix" />
            </figure>
          </div>
          <IconUser
            onClick={() => {
              toogleUserInfo()
              toogleSeeAccountRegister()
            }}
          />
          {(accountLogin || (userInfo && userData && myData)) && (
            <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-[#00000054] z-[3]"></div>
          )}

          <FormSignIn
            className={`absolute top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
              accountLogin ? 'top-[20%] opacity-100' : 'opacity-0'
            }`}
            childrenP={
              <p
                className="cursor-pointer m-[10px]"
                onClick={toogleSeeAccountRegister}
              >
                No tienes cuenta? <b>¡Crea Una!</b>
              </p>
            }
          >
            <X className=" mt-[-10px]" onClick={toogleSeeAccountLogin} />
          </FormSignIn>

          <Registerform
            className={`absolute top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
              accountRegister && !userData
                ? 'top-[1%] opacity-100'
                : 'opacity-0'
            }`}
            childrenP={
              <p
                className="cursor-pointer m-[10px]"
                onClick={toogleSeeAccountLogin}
              >
                Ya tienes cuenta? <b>¡Inicia sesión!</b>
              </p>
            }
          >
            <X className=" mt-[-10px]" onClick={toogleSeeAccountRegister} />
          </Registerform>

          <IconShoppingBang onClick={viewCart} />
          {userData && myData ? (
            <AccountInfo
              className={`absolute p-[50px] top-[-100%] z-[100] transition-all duration-300 ease-in-out ${
                userInfo ? 'top-[20%]  opacity-100' : 'opacity-0'
              }`}
            >
              <X
                className="absolute top-[1%] right-[10%]"
                onClick={toogleUserInfo}
              />
              <button
                className="bg-[#cca826] text-white border-none px-5 py-2 rounded-full hover:bg-[#b0851e] transition duration-300 mb-2 relative  flex items-center justify-center overflow-hidden group mt-[20px]"
                onClick={SignOff}
              >
                Cerrar sesión
              </button>
            </AccountInfo>
          ) : (
            ''
          )}
        </nav>
      </header>
    </>
  )
}

export default NavBar
