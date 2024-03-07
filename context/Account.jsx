'use client'
// context/Account.js
import { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const AccountContext = createContext()

export const AccountProvider = ({ children }) => {
  const [myData, setMyData] = useState('')
  const [sendAddress, setSendAddress] = useState('')
  const [userData, setUserData] = useState('')

  useEffect(() => {
    const localData = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedData = localStorage.getItem('nameUser')
        const sendAddress = localStorage.getItem('sendAddress')

        setMyData(storedData)
        setUserData(user)
        setSendAddress(sendAddress)
      }
    })

    return () => localData()
  }, [])

  const SignOff = async () => {
    try {
      await auth.signOut()
      //   localStorage.removeItem('nameUser')
      setUserData(null)
    } catch (error) {}
  }
  console.log(sendAddress)
  return (
    <AccountContext.Provider value={{ userData, myData, SignOff, sendAddress }}>
      {children}
    </AccountContext.Provider>
  )
}
