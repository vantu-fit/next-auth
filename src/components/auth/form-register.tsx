"use client"
import React, { useState, useTransition } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { registerFormSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { registerEmail } from '@/actions/auth-actions'
import ErrorTriangle from './error-triagle'
import SuccessTick from './success-tick'

function FormRegister() {
    const [pending, startTransaction] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const form = useForm<z.infer<typeof registerFormSchema>>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit = (data: z.infer<typeof registerFormSchema>) => {
        setError("")
        setSuccess("")

        startTransaction(
            async () => {
                const res = await registerEmail(data)
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
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Name </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="Name" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )} />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Email </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="Email" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )} />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Password </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="*********" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>

                    )} />

                <ErrorTriangle message={error} />
                <SuccessTick message={success} />

                <Button type='submit' className='w-full'>
                    Sign Up
                </Button>

            </form>

        </Form>
    )
}

export default FormRegister