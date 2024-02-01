import Image from 'next/image'
import banerImage from '../../../public/audifonos.jpg'

const Baner = () => {
  return (
    <section className="w-full h-[86.5vh] overflow-hidden relative">
      <h1 className="text-[35px] lg:text-[50px] text-[#fff] font-medium absolute top-[5%] left-0 lg:left-[12%] w-[100%] lg:w-[85%] p-[20px] lg:top-[30%]">
        Descubre y Compra los Mejores Productos en Wartrix: Calidad Garantizada
        y Envío Rápido
      </h1>

      <figure>
        <Image
          src={banerImage}
          alt="headfone"
          className="w-full h-[86.5vh] object-cover"
          priority={false}
        />
      </figure>
    </section>
  )
}

export default Baner
