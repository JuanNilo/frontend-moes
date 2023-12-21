import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/general/NavBar'
import { SucursalProvider } from './components/context/SucursalContext'

export const metadata: Metadata = {
  title: "MOE's",
  description: "Tienda de licores MOE's",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SucursalProvider>

          <header>
        <NavBar/>

          </header>
          {children}
        </SucursalProvider>
        </body>
    </html>
  )
}
