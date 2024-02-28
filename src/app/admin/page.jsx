import '../globals.css'
import Menu from '../../components/ui/menu'

import Image from 'next/image'
import logo from '../../../public/wartix.webp'
import FromAdmin from '../../components/formAdmin'

import NavBar from '@/components/navBar'
const Admin = () => {
  return (
    <>
      <header className="p-[30px] flex justify-center">
        <NavBar />
        <figure className="w-[100px]">
          <Image src={logo} alt="logo wartix" />
        </figure>
      </header>

      <FromAdmin />
    </>
  )
}
export default Admin
