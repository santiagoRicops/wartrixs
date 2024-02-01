// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { v4 } from 'uuid'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBzxzSdLJ5Wtsxx5b3chgNrRpo-Jjcca08',
  authDomain: 'wartix-c7eb8.firebaseapp.com',
  projectId: 'wartix-c7eb8',
  storageBucket: 'wartix-c7eb8.appspot.com',
  messagingSenderId: '429785288601',
  appId: '1:429785288601:web:84c19c2d6772203e2ecd08',
  measurementId: 'G-H5FYCQXMCK',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)
const db = getFirestore(app)

export { db }

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const imageDowload = await getDownloadURL(storageRef)
  return imageDowload
}
