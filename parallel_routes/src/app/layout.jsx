import { Inter } from 'next/font/google'
import Header from '@/components/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children,
  team,
  dashboard
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        <Header />

        <main className='container'>
          <section className='py-6'>{children}</section>

          <section className='flex gap-6'>
            {team}
            {dashboard}
          </section>
        </main>
        
      </body>
    </html>
  )
}