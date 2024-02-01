const Alert = ({ notification }) => {
  return (
    <>
      {notification && (
        <div className="success-notification z-[3]">
          <div className="success__title">{notification}</div>
        </div>
      )}
    </>
  )
}
export default Alert
