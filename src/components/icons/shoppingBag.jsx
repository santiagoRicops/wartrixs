const ShoppingBag = ({ onClick }) => {
  return (
    <figure className="cursor-pointer" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-bag"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#808080"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
        <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      </svg>
    </figure>
  )
}
export default ShoppingBag
