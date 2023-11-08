import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/general/NavBar'

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
      <NavBar/>
        {children}
        </body>
    </html>
  )
}
