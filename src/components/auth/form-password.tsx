"use client"
import React, { useTransition  , useState} from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {  resetPasswordSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ErrorTriangle from './error-triagle'
import SuccessTick from './success-tick'
import { resetPassword } from '@/actions/reset-password'
import { useSearchParams } from 'next/navigation'

function FormPassword() {
    const [pending , startTransaction ] = useTransition()
    const [error , setError] = useState<string | null>(null)
    const [success , setSuccess] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const form = useForm<z.infer<typeof resetPasswordSchema>>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof resetPasswordSchema>) => {
        setError("")
        setSuccess("")

        startTransaction(
            async () => {
                const res = await resetPassword(data.password , token || "")
                console.log("res " , res)
                setError(res.error || "")
                setSuccess(res.success || "")
            }
        )
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                <FormField
                    control={form.control}
                    name='password'
                    disabled={pending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Password </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="**********" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>

                    )} />
                <ErrorTriangle message={error}/>
                <SuccessTick message={success}/>

                <Button type='submit' className='w-full'>
                    Reset Password
                </Button>

            </form>
        </Form>
    )
}

export default FormPassword