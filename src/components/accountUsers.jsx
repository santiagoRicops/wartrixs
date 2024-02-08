'use client'
import React from 'react'
import GoogleIcon from './icons/google'
import { provider, auth } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
const LoginForm = ({ className }) => {
  const registerUserGoogle = async (e) => {
    try {
      e.preventDefault()
      const register = await signInWithPopup(auth, provider)
      const dataUser = register.user.email
      localStorage.setItem('users', dataUser)
    } catch (error) {
      alert('el registro fallo')
    }
  }
  return (
    <form
      className={`max-w-md mx-auto p-6 bg-white rounded-md shadow-md ${className}`}
    >
      <h2 className="text-2xl font-semibold mb-6">Registration</h2>

      <div className="mb-4">
        <label htmlFor="Name" className="block text-gray-700 font-medium">
          Name
        </label>
        <input
          type="Name"
          id="Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Name"
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
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 font-medium"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Confirm your password"
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
    </form>
  )
}

export default LoginForm
