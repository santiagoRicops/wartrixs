import Menu from './menu'
import { usePath } from '../../../hooks/usePath'
import Link from 'next/link'
const Nav = () => {
  const { homePath } = usePath()
  const a = (homePath = '/')

  return (
    <div className="pb-[30px]">
      <ul className="hidden md:flex justify-center gap-[30px] xl:flex lg:flex">
        {homePath === '' && (
          <li className="font-semibold text-[20px] cursor-pointer">
            <Link href="/">Inicio</Link>
          </li>
        )}

        <li className="font-semibold text-[20px] cursor-pointer">
          {' '}
          <Link href="/wachts">Wachts</Link>
        </li>
        <li className="font-semibold text-[20px] cursor-pointer">
          Computadoras & tablets
        </li>
        <li className="font-semibold text-[20px] cursor-pointer">Movil</li>
        <li className="font-semibold text-[20px] cursor-pointer">Accesorios</li>
      </ul>
      <Menu />
    </div>
  )
}
export default Nav
