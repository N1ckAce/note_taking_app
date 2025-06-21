import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Modern Notes',
  description: 'A minimal note taking app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
