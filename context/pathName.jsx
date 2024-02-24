'use client'
import { createContext } from 'react';
import { usePathname } from 'next/navigation';

 export const PathContext = createContext();

 export const PathNameProvider = ({ children }) => {
  const pathName = usePathname();
const partPathName = pathName.split('/')
const partPath = partPathName[1]

  return (
    <PathContext.Provider value={partPath}>
      {children}
    </PathContext.Provider>
  );
}

