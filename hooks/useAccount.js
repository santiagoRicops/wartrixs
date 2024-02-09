'use client'
import { useContext } from 'react'
import { AccountContext } from '../context/Account'
export const useAccount = () => {
  const Account = useContext(AccountContext)
  if (Account === undefined) {
    throw new Error(
      'AccountContext not found. Make sure your component is wrapped with AccountProvider.',
    )
  }
  return Account
}
