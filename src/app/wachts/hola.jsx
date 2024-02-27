'use client'
// A.js
import { usePath } from '../../../hooks/usePath'

const A = () => {
  const path = usePath()
  console.log(path)
}

export default A
