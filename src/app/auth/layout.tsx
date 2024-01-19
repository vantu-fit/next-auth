import React from 'react'

function AuthLayout( {children}  : {children: React.ReactNode}) {
  return (
    <div className='flex h-full items-center justify-center bg-sky-400'>{children}</div>
  )
}

export default AuthLayout