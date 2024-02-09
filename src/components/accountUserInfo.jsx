import { useAccount } from '../../hooks/useAccount'

const AccountInfo = () => {
  const { userData, myData } = useAccount()

  return (
    <div className="text-[black]">
      {userData ? (
        <p className="text-[black]">{userData.displayName || myData}</p>
      ) : (
        ''
      )}
    </div>
  )
}

export default AccountInfo
