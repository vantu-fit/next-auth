import { CardWrapper } from '@/components/auth/card-wrapper'
import FormRegister from '@/components/auth/form-register'
import React from 'react'

function LoginPage() {
  return (
    <div>
      <CardWrapper
        backButtonHref="/auth/login"
        backButtonLabel="You have an account? Login here"
        headerLabel="Create an account"
        showSocial={true}
        resetPassword={true}
      >
        <FormRegister />
      </CardWrapper>
    </div>
  )
}

export default LoginPage