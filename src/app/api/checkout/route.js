import paypal from '@paypal/checkout-server-sdk'
import { NextResponse } from 'next/server'

const clientId = process.env.PAYPAL_CLIENT_ID

const clientSecret = process.env.PAYPAL_SECRETCLIENT_ID

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)
const client = new paypal.core.PayPalHttpClient(environment)

export async function POST() {
  try {
    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '2.00', // Cambia '1.000' a '1000'
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '2.00', // Cambia '1.000' a '1000'
              },
            },
          },
          items: [
            {
              name: 'audifonos',
              description: 'hola',
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: '1.00', // Cambia '1.000' a '1000'
              },
            },
            {
              name: 'audisfonos',
              description: 'hola',
              quantity: '1',
              unit_amount: {
                currency_code: 'USD',
                value: '1.00', // Cambia '1.020' a '1020'
              },
            },
          ],
        },
      ],
    })

    const response = await client.execute(request)

    // Devuelve la respuesta en formato JSON
    return NextResponse.json({
      id: response.result.id,
    })
  } catch (error) {
    console.error('Error al crear la orden:', error.message)

    // Devuelve una respuesta de error en formato JSON
    return NextResponse.json({
      error: 'Error al procesar el pago',
      message: error.message,
    })
  }
}