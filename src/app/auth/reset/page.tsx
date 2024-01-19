import { CardWrapper } from '@/components/auth/card-wrapper'
import FormReset from '@/components/auth/form-reset'
import React from 'react'

function ResetPassword() {
    return (
        <CardWrapper
            backButtonHref='/auth/login'
            backButtonLabel='Back to login'
            headerLabel='Reset password'
            showSocial={false}
        >
            <FormReset />
        </CardWrapper>
    )
}

export default ResetPassword