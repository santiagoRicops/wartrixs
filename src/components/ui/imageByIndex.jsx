import image1 from '../../../public/accesorios.webp'
import image2 from '../../../public/computadores.webp'
import image3 from '../../../public/relojs.webp'
import image4 from '../../../public/movil.webp'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
