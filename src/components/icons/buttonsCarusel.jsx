const ButtonsCarusel = ({ children, onClick }) => {
  return (
    <button
      className="p-4 m-4 bg-slate-400 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-slate-500 hover:text-white hover:shadow-md"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default ButtonsCarusel
