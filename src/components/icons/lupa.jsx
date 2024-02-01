const Lupa = () => {
  return (
    <label className="absolute  right-[10%] xl:right-[30%] lg:right-[23%] md:right-[10%] top-[30%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-search"
        width={26}
        height={26}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#808080"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
    </label>
  )
}

export default Lupa
