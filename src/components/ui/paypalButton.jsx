'use client'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../../firebase'
const PayPalButton = ({idProdut}) => {

  
  const paymentProcessed = async(data)=>{
    const paymentRef = collection(db, 'pagos')
    const dataWithId = { ...data, id: idProdut };

    // Agrega el documento a la colección 'pagos'
    await addDoc(paymentRef, dataWithId);
  }
  return (
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
          console.log(order )
          return order.id
        }}
      onApprove={(data, actions)=>{
       paymentProcessed(data)
       console.log(data);
        actions.order.capture()
      }}
      onCancel={(data)=>{
       
      }}
      />
    </PayPalScriptProvider>
  )
}
export default PayPalButton
