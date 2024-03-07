'use client'
// context/Account.js
import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [myData, setMyData] = useState('');
  const [sendAddress, setSendAddress] = useState('');
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const localData = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Verifica si localStorage está disponible antes de usarlo
        if (typeof localStorage !== 'undefined') {
          const storedData = localStorage.getItem('nameUser');
          const sendAddress = localStorage.getItem('sendAddress');

          setMyData(storedData);
          setUserData(user);
          setSendAddress(sendAddress);
        }
      }
    });

    return () => localData();
  }, []);

  const SignOff = async () => {
    try {
      await auth.signOut();
      // Verifica si localStorage está disponible antes de usarlo
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('nameUser');
      }
      setUserData(null);
    } catch (error) {}
  };

  console.log(sendAddress);

  return (
    <AccountContext.Provider value={{ userData, myData, SignOff, sendAddress }}>
      {children}
    </AccountContext.Provider>
  );
};
