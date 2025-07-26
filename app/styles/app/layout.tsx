import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'NABLEX - The Future of DeFi',
  description: 'Welcome to the official Noblexcoin platform.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
