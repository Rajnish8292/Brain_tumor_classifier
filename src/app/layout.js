'use client'

import { RecoilRoot } from 'recoil'
import './globals.css'
import SmoothScroll from '@/component/SmoothScroll/SmoothScroll'
import TopNav from '@/component/TopNav/TopNav'
import Logo from '@/component/Logo/Logo'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <RecoilRoot>
      <TopNav />
      <Logo />
      <SmoothScroll>
      {children}
      </SmoothScroll>
      </RecoilRoot>

 
      </body>
    </html>
  )
}
