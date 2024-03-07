'use client'
// Importa useEffect para manejar la visibilidad de la alerta
import React, { useState, useEffect } from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
import { useAccount } from '../../../hooks/useAccount'
import Alert from './notificacion'

const PayPalButton = ({ idProdut }) => {
  const { sendAddress, userData, myData } = useAccount()
  const [notification, setNotification] = useState(null)
  const [showAlert, setShowAlert] = useState(false)

  const useAddress = sendAddress ? JSON.parse(sendAddress) : {}
  const useData = userData ? userData.displayName : ''
  const useMyData = myData ? myData : ''

  const paymentProcessed = async (data) => {
    const paymentRef = collection(db, 'pagos')
    const dataWithId = {
      ...data,
      id: idProdut,
      dataAddres: useAddress,
      useData,
      useMyData,
    }

    // Agrega el documento a la colección 'pagos'
    await addDoc(paymentRef, dataWithId)

    // Establece el estado de notificación para mostrar la alerta
    setNotification('pago exitoso')
  }

  useEffect(() => {
    // Lógica para mostrar la alerta cuando cambia el estado de notificación
    if (notification) {
      setShowAlert(true)

      // Oculta la alerta después de 3 segundos
      setTimeout(() => {
        setShowAlert(false)
        setNotification(null)
      }, 3000)
    }
  }, [notification])

  return (
    <>
      <PayPalScriptProvider
        options={{
          clientId:
            'AbOZleQ5SYIOnwsvxuycf1IFqz8K8ov3nhNE41KfeI0PuzZ_GryLB45B8MERzah3GxGvPmqlx2rLz3SE',
        }}
      >
        <PayPalButtons
          createOrder={async () => {
            const res = await fetch('/api/checkout', {
              method: 'POST',
            })
            const order = await res.json()
            console.log(order)
            return order.id
          }}
          onApprove={(data, actions) => {
            paymentProcessed(data)

            console.log(data)
            actions.order.capture()
          }}
          onCancel={(data) => {}}
        />
      </PayPalScriptProvider>

      {showAlert && <Alert notification={notification} />}
    </>
  )
}

export default PayPalButton
