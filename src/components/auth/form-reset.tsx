"use client"
import { sendmailPassWordSchema } from '@/schema/auth-schema'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ErrorTriangle from './error-triagle'
import SuccessTick from './success-tick'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendmailPassword } from '@/actions/reset-password'
function FormReset() {
    const [pending, startTransaction] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const form = useForm<z.infer<typeof sendmailPassWordSchema>>({
        resolver: zodResolver(sendmailPassWordSchema),
        defaultValues: {
            email: '',
        }
    })

    const onSubmit = async (data: z.infer<typeof sendmailPassWordSchema>) => {
        setError("")
        setSuccess("")

        startTransaction(
            async () => {
                const res = await sendmailPassword(data.email)
                console.log("res ", res)
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
                    name='email'
                    disabled={pending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Email </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="Email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )} />
                <ErrorTriangle message={error} />
                <SuccessTick message={success} />

                <Button type='submit' className='w-full'>
                    Send reset password
                </Button>

            </form>
        </Form>
    )
}

export default FormReset