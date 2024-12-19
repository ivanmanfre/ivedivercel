import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IVEDI - Agencia de Marketing para Profesionales de la Salud',
  description: 'Transforma tu práctica médica con soluciones de marketing digital inteligentes y automatizadas. Atrae y retén más pacientes con IVEDI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

