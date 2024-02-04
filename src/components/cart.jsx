import Delete from './icons/delete.jsx'
import Pay from './icons/pay.jsx'
import '../app/globals.css'
import Image from 'next/image'
import { useCart } from '../../hooks/useCart'

const CartItem = ({
  quantity,
  precio,
  title,
  srcUno,
  addToCart,
  removeFromCart,
  removeFromCartAll,
}) => {
  const priceAsNumber = parseFloat(precio)

  return (
    <article className="flex   justify-center gap-[20px] ">
      <div className="w-32  h-32 rounded-md overflow-hidden border-2 border-solid border-white">
        <Image
          src={srcUno}
          alt={title}
          width={128}
          height={100}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-md font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">Cantidad: {quantity}</p>
        <strong>Total: $ {(priceAsNumber * quantity).toFixed(3)}</strong>
        <div className="flex gap-2 mt-2">
          <button
            className="bg-[#b0851e] text-white rounded-md px-2 py-1 hover:bg-[#8d611b] transition duration-300"
            onClick={addToCart}
          >
            +
          </button>
          <button
            className="bg-[#754e1e] text-white rounded-md px-2 py-1 hover:bg-[#8d611b] transition duration-300"
            onClick={removeFromCart}
          >
            -
          </button>
          <button
            className="bg-[#754e1e] text-white rounded-md px-2 py-1 hover:bg-[#8d611b] transition duration-300"
            onClick={removeFromCartAll}
          >
            Quitar Todos
          </button>
        </div>
      </div>
    </article>
  )
}

const Cart = ({ icon, className }) => {
  const { removeFromCart, cart, clearCart, addToCart, removeFromCartAll } =
    useCart()

  return (
    <div
      className={`w-full md:w-[400px] bg-gray-100 p-[30px]  rounded-md fixed top-4 right-4 ${className} z-[2]`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h4 className="text-xl font-semibold ml-2">Carrito de Compras</h4>
      </div>
      {cart.map((product) => (
        <CartItem
          key={product.id}
          addToCart={() => addToCart(product)}
          removeFromCart={() => removeFromCart(product)}
          removeFromCartAll={() => removeFromCartAll(product)}
          {...product}
        />
      ))}
      <Delete className="m-[20px]" onClick={() => clearCart()} />
      <Pay className="m-[20px]" />
    </div>
  )
}

export default Cart
