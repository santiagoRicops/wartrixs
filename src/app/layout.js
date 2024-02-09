import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { CartProvider } from '../../context/Cart'
import { AccountProvider } from '../../context/Account'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Agrega la etiqueta script del script de Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9137584732623814"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={inter.className}>
        <AccountProvider>
          <CartProvider>{children}</CartProvider>
        </AccountProvider>
      </body>
    </html>
  )
}
