'use client'
import { useState } from 'react'
import MenuHamburgesa from './menuHamburguesa'

const Menu = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
      <MenuHamburgesa onClick={toggleMenu} />

      <div
        className={`bg-[#acacff] top-20% left-0  w-[190px] p-[30px] absolute rounded-[10px] transition-all duration-300 transform ${
          menu ? 'translate-x-0 scale-100' : '-translate-x-full scale-0'
        }`}
      >
        <ul>
          <li className="p-[10px]">
            <a className="text-[18px] p-[5px] font-medium" href="/">
              Inicio
            </a>
          </li>
          <li className="p-[10px]">
            <a className="text-[18px] p-[5px] font-medium" href="/">
              Relojs
            </a>
          </li>
          <li className="p-[10px]">
            <a className="text-[18px] p-[5px] font-medium" href="/">
              Celulares
            </a>
          </li>
          <li className="p-[10px]">
            <a className="text-[18px] p-[5px] font-medium" href="/">
              Computadores
            </a>
          </li>
          <li className="p-[10px]">
            <a className="text-[18px] p-[5px] font-medium" href="/">
              Acessorios
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
