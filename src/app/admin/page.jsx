import '../globals.css'
import Menu from '../../components/ui/menu'

import Image from 'next/image'
import logo from '../../../public/wartix.webp'
import FromAdmin from '../../components/formAdmin'

const Admin = () => {
  return (
    <>
      <header className="p-[30px] flex justify-center">
        <figure className="w-[100px]">
          <Image src={logo} alt="logo wartix" />
        </figure>
      </header>
      <nav>
        <ul className="hidden md:flex justify-center gap-[30px] xl:flex lg:flex">
          <li className="font-semibold text-[20px] cursor-pointer">
            <a href="/">Inicio</a>
          </li>
          <li className="font-semibold text-[20px] cursor-pointer">Wachts</li>
          <li className="font-semibold text-[20px] cursor-pointer">
            Computadoras & tablets
          </li>
          <li className="font-semibold text-[20px] cursor-pointer">Movil</li>
          <li className="font-semibold text-[20px] cursor-pointer">
            Accesorios
          </li>
        </ul>
        <Menu />
      </nav>
      <FromAdmin />
    </>
  )
}
export default Admin
