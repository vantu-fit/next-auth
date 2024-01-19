import { CardWrapper } from '@/components/auth/card-wrapper'
import FormLogin from '@/components/auth/form-login'
import React from 'react'

function LoginPage() {
  return (
    <div>
      <CardWrapper 
            backButtonHref="/auth/register"
            backButtonLabel="Don't have an account? Register here"
            headerLabel="Welcome Back!"
            showSocial={true}
            resetPassword={true}
        >
            <FormLogin />

        </CardWrapper>
    </div>
  )
}

export default LoginPage