import '../../app/globals.css'
const Loading = () => {
  return (
    <div className="absolute w-[100%] h-[100%] bg-[#3636366c] top-0 left-0 z-[10]">
      <div className="leap-frog">
        <div className="leap-frog__dot"></div>

        <div className="leap-frog__dot"></div>
        <div className="leap-frog__dot"></div>
      </div>
    </div>
  )
}
export default Loading
