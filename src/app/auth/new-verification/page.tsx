"use client"
import { CardWrapper } from '@/components/auth/card-wrapper'
import { BeatLoader } from 'react-spinners'
import SuccessTick from '@/components/auth/success-tick'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { getVerificationTokenByToken } from '@/actions/new-verification'
import { set } from 'zod'
import ErrorTriangle from '@/components/auth/error-triagle'

function NewVerificationPage() {
    const searchParams = useSearchParams()
    const [error, setError] = useState<string | null>("")
    const [success, setSuccess] = useState<string | undefined>("")
    const token = searchParams.get('token')

    const onsubmit = useCallback(() => {
        console.log(token)
        if (!token) return setError("Invalid token")
        getVerificationTokenByToken(token).then((res) => {
            if (res.error) {
                setError(res.error)
            } else {
                setSuccess(res.success)
            }
        }).catch((err) => {
            console.log(err)
            setError("Something went wrong")
        })
    } , [token])
    useEffect(() => {
        onsubmit()
    } , [onsubmit])
    return (
        <CardWrapper
            backButtonHref='/auth/login'
            backButtonLabel='Back to login'
            headerLabel='Verify your email address'
            showSocial={false}
        >
            {!(success || error)?  <div className="w-full flex items-center justify-center"> <BeatLoader /></div> : <></>}

            <SuccessTick message={success} />
            <ErrorTriangle message={error} />

        </CardWrapper>
    )
}

export default NewVerificationPage