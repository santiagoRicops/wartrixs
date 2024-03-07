import { provider, auth } from '../../firebase'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import GoogleIcon from './icons/google'
import Alert from './ui/notificacion'
import { useAccount } from '../../hooks/useAccount'
const FormSignIn = ({ className, children, childrenP, onClick }) => {
  const [notification, setNotification] = useState(null)
  const { sendAddress, userData, myData } = useAccount()
  const [loginEmail, setLoginEmail] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginEmail((prev) => ({ ...prev, [name]: value }))
  }

  const loginUserGoogle = async (e) => {
    e.preventDefault()
    try {
      await signInWithPopup(auth, provider)
    } catch (error) {
      showNotification('No se ha podido registrar')
    }
  }

  const loginEmailAndPassword = async (e) => {
    e.preventDefault()
    try {
      const { email, password } = loginEmail
      // Usar el localstorage para guardar el nombre y usarlo luego
      await signInWithEmailAndPassword(auth, email, password)
      showNotification('Inicio de sesión con éxito')
    } catch (error) {
      showNotification('No se ha podido iniciar sesión')
    }
  }
  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <>
      <Alert notification={notification} />

      <form
        className={`max-w-md mx-auto p-6 bg-white rounded-md shadow-md ${className}`}
        onSubmit={loginEmailAndPassword}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-6">Iniciar Sesión</h2>
          {children}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
            value={loginEmail.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
            value={loginEmail.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <div className="flex justify-center items-center">
          <button onClick={loginUserGoogle}>
            <GoogleIcon />
            Google
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mt-[10px]"
        >
          Iniciar Sesión
        </button>

        {childrenP}
      </form>
    </>
  )
}
export default FormSignIn
