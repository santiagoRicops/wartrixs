'use client'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
const B = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId:
          'AWNSyHHIQRLaz9yY7J1kQjqz2ieccedydKqNUuSqMG7Qr7Az5gcaiNWJE3l68udeHwhATvk9yjlIXa3Q',
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
