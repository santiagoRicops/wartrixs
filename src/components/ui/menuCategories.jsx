import Image from 'next/image'
import computaroras from '../../../public/computadores.webp'

import accesorios from '../../../public/accesorios.webp'
import watch from '../../../public/relojs.webp'
import movil from '../../../public/movil.webp'

const MenuCategories = () => {
  return (
    <div className="gap-[30px] flex-wrap flex lg:flex justify-center lg:gap-[50px] p-[20px]">
      <figure className="w-[367px] rounded-[20px] overflow-hidden cursor-pointer relative md:w-[322px] lg:w-[300px] xl:w-[266px] mb-[30px]">
        <Image
          className="mx-auto transform transition-transform hover:scale-105 duration-300 "
          src={watch}
          alt="Watch"
          priority={false}
        />

        <span className="absolute top-[50%] text-[#be9b9b] text-[50px]  xl:text-[35px] font-medium p-[10px] filter ">
          Watchs
        </span>
      </figure>
      <figure className="w-[367px] rounded-[20px] overflow-hidden cursor-pointer relative md:w-[322px] lg:w-[300px] xl:w-[266px]  mb-[30px]">
        <Image
          className="mx-auto  transform transition-transform hover:scale-105 duration-300"
          src={computaroras}
          alt="Watch"
          priority={false}
        />

        <span class="absolute w-[100%] top-[40%] text-[#000] text-[50px]   xl:text-[35px] font-medium p-[10px] filter  mb-[30px]">
          Computaroras & Tablets
        </span>
      </figure>
      <figure className="w-[367px] rounded-[20px] overflow-hidden cursor-pointer relative md:w-[322px] lg:w-[300px] xl:w-[266px]  mb-[30px]">
        <Image
          className="mx-auto transform transition-transform hover:scale-105 duration-300 "
          src={movil}
          alt="movil"
          priority={false}
        />

        <span className="absolute  top-[50%] text-[#ff5d5d]  text-[50px]   xl:text-[35px] font-medium p-[10px] filter ">
          Moviles
        </span>
      </figure>
      <figure className="w-[367px] rounded-[20px] overflow-hidden cursor-pointer relative md:w-[322px] lg:w-[300px] xl:w-[266px]  mb-[30px]">
        <Image
          className="mx-auto transform transition-transform hover:scale-105 duration-300 "
          src={accesorios}
          alt="accesorios"
          priority={false}
        />

        <span className="absolute top-[50%] text-[#000] text-[50px]   xl:text-[35px] font-medium p-[10px] filter ">
          Accesorios
        </span>
      </figure>
    </div>
  )
}
export default MenuCategories
