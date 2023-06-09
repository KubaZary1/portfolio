import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'

import './globals.css'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Kuba Musielski Portfolio',
  description: 'This is portfolio of young developer in next js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontMontserrat.className}>
        <Navbar />
        <div className='content'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
