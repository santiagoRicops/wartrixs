'use client'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const B = () => {
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
          console.log(order)
          return order.id
        }}
      />
    </PayPalScriptProvider>
  )
}
export default B
