'use client'
// context/Account.js
import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const AccountContext = createContext()

export const AccountProvider = ({ children }) => {
  const [userData, setUserData] = useState('')
  const [myData, setMyData] = useState('')
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedData = localStorage.getItem('nameUser')
        setMyData(storedData)
        setUserData(user)
      } else {
        console.log('No hay usuarios registrados')
      }
    })

    return () => unsubscribe()
  }, [])
  const SignOff = async () => {
    try {
      await auth.signOut()
      //   localStorage.removeItem('nameUser')
      setUserData(null)
      setMyData('')
    } catch (error) {}
  }
  return (
    <AccountContext.Provider value={{ userData, myData, SignOff }}>
      {children}
    </AccountContext.Provider>
  )
}
