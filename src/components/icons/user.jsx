const UserIcon = ({ onClick }) => {
  return (
    <figure className=" flex items-center cursor-pointer" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-user"
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
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
    </figure>
  )
}
export default UserIcon
