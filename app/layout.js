import { Archivo, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata = {
  title: 'Duty Group LLC',
  description: 'Our duty is to make people CHOOSE GREATNESS everytime.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${sourceSerif.variable}`}>
        {children}
      </body>
    </html>
  )
}
