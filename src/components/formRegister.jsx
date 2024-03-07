'use client'
import React, { useState } from 'react'
import GoogleIcon from './icons/google'
import { provider, auth } from '../../firebase'
import { signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import Alert from './ui/notificacion'

const RegisterForm = ({ className, children, childrenP }) => {
  const [notification, setNotification] = useState(null)

  const [accountInfo, setAccountInfo] = useState(null)

  const [registerEmail, setRegisterEmail] = useState({
    email: '',
    name: '',
    password: '',
  })
  const [shippingData, setShippingData] = useState({
    number: '',
    address: '',
    city: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setRegisterEmail((prev) => ({ ...prev, [name]: value }))
    setShippingData((prev) => ({ ...prev, [name]: value }))
  }
  const showNotification = (message) => {
    setNotification(message)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }
  const registerUserGoogle = async (e) => {
    try {
      e.preventDefault()
      const register = await signInWithPopup(auth, provider)
      const dataUser = register.user.email

      localStorage.setItem('users', dataUser)

      // Convertir la cadena JSON a objeto al mostrarla en la consola
    } catch (error) {
      showNotification('no se ha podido registrar')
    }
  }

  const registerUserEmailAndPassword = async (e) => {
    e.preventDefault()
    try {
      const { email, password, name } = registerEmail
      //usar el localstorade para gaurar el nombre y usarlo luego
      localStorage.setItem('nameUser', name)

      await createUserWithEmailAndPassword(auth, email, password)
      showNotification('registrado con exito')
      setAccountInfo(name)
    } catch (error) {
      showNotification('no se ha podido registrar')
    }
  }

  const shippingInfo = {
    number: shippingData.number,
    address: shippingData.address,
    city: shippingData.city,
  }

  // Convertir el nuevo objeto a cadena JSON antes de guardarlo
  const shippingInfoString = JSON.stringify(shippingInfo)

  // Almacenar solo la información relevante en el localStorage
  localStorage.setItem('sendAddress', shippingInfoString)

  // Mostrar solo la información relevante en la consola
  console.log(JSON.parse(localStorage.getItem('sendAddress')))

  return (
    <>
      <Alert notification={notification} />

      <form
        className={`max-w-md mx-auto p-6 bg-white rounded-md shadow-md ${className}`}
        onSubmit={registerUserEmailAndPassword}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-6">Registration</h2>
          {children}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Name"
            value={registerEmail.name}
            onChange={handleChange}
            name="name"
          />
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
            value={registerEmail.email}
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
            value={registerEmail.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700 font-medium">
            numero de telefono
          </label>
          <input
            type="text"
            id="number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Ingresa tu numero telefonic"
            value={shippingData.number}
            onChange={handleChange}
            name="number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-medium">
            direccion de envios
          </label>
          <input
            type="text"
            id="address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="ingresa la direcion de envios"
            value={shippingData.address}
            onChange={handleChange}
            name="address"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-medium">
            ciudad
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="ingresa la direcion tu ciudad"
            value={shippingData.city}
            onChange={handleChange}
            name="city"
          />
        </div>

        <div className="flex justify-center items-center">
          <button onClick={registerUserGoogle}>
            <GoogleIcon />
            Google
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mt-[10px]"
        >
          Register
        </button>
        {childrenP}
      </form>
    </>
  )
}

export default RegisterForm
