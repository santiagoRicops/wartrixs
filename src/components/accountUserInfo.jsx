import { useAccount } from '../../hooks/useAccount'

const AccountInfo = () => {
  const { userData, myData, SignOff, sendAddress } = useAccount()
  const useAddress = JSON.parse(sendAddress)
  console.log(useAddress)
  return (
    <article className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <h2 className="text-3xl mb-4 text-[black] font-bold">
        ¡Hola, {userData?.displayName || myData}!
      </h2>

      <div className="mb-4">
        <div className="mb-2">
          <p className="font-semibold text-lg">Número de teléfono:</p>
          <p className="text-gray-700">{useAddress.number}</p>
        </div>
        <div className="mb-2">
          <p className="font-semibold text-lg">Correo electrónico:</p>
          <p className="text-gray-700">{userData.email}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-2">
          <p className="font-semibold text-lg">Dirección de envío:</p>
          <p className="text-gray-700">{useAddress.address}</p>
        </div>
      </div>

      <div>
        <div className="mb-2">
          <p className="font-semibold text-lg">Atención al cliente:</p>
          <p className="text-gray-700">+57 302-646-5565</p>
          <p className="text-gray-700">santiagoricopassop@gmail.com</p>
        </div>
      </div>
    </article>
  )
}

export default AccountInfo
