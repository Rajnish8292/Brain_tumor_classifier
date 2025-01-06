
import './globals.css'
import SmoothScroll from '@/component/SmoothScroll/SmoothScroll'
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
      <SmoothScroll>
      {children}
      </SmoothScroll>
 
      </body>
    </html>
  )
}
