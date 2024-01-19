import { CardWrapper } from '@/components/auth/card-wrapper'
import FormPassword from '@/components/auth/form-password'
import React from 'react'

function ResetPage() {
  return (
    <CardWrapper 
    backButtonHref='/auth/login'
    headerLabel='Reset Password'
    backButtonLabel='Back to login'
    showSocial={false}
    >
        <FormPassword />
    </CardWrapper>
  )
}

export default ResetPage