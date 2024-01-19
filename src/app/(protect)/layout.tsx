import React from 'react'
import HeaderNav from './components/header-nav'
import { SessionProvider } from 'next-auth/react'



function layout({ children } : { children: React.ReactNode }) {
  return (
    <main className='flex flex-col justify-center items-center w-full'>
      <SessionProvider session={null}>
        <HeaderNav />
        {children}
      </SessionProvider>
    </main>
  )
}

export default layout