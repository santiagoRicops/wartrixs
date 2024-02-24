'use client'
import { useContext } from 'react'
import { PathContext } from '../context/pathName.jsx'
export const usePath = () => {
  const path = useContext(PathContext)
  if (path === undefined) {
    throw new Error(
      'AccountContext not found. Make sure your component is wrapped with AccountProvider.',
    )
  }
  return path
}
