import { auth  } from '@/auth'
import LogoutButton from '@/components/auth/logout-button'
import React from 'react'
import HeaderNav from '../components/header-nav'

async function SettingPage() {
  const session =await auth()  
  return (
    <> Setting</>
    
  )
}

export default SettingPage