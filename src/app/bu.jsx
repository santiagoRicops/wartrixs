'use client'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const B = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'AQQGw8BpLvQqK2Ahb-4dK3bw0o17PkxmLZqiHzNwuNw4atFfpPT482gQ5tyS_QuXM0O4Jup5lUbr3-aC',
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
