const ButtonCart = ({ onClick }) => {
  return (
    <button
      className="bg-[#cca826] text-white border-none px-5 py-2 rounded-full hover:bg-[#b0851e] transition duration-300 mb-2 relative  flex items-center justify-center overflow-hidden group"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-cart transform transition-transform duration-300 group-hover:translate-x-[65px] -translate-x-1/2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      <span className="opacity-100 transition-opacity duration-300 group-hover:opacity-0">
        Agregar al carrito
      </span>
    </button>
  )
}
export default ButtonCart
