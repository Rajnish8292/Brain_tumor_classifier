import { Roboto } from 'next/font/google'
import './globals.css'

// const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })
import TopNav from '@/component/TopNav/TopNav'
import Logo from '@/component/Logo/Logo'
export const metadata = {
  title: 'Brain tumor classifer',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <TopNav />
      <Logo />
      {children}
      </body>
    </html>
  )
}
