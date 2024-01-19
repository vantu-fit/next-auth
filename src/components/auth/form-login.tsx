"use client"
import React, { useTransition  , useState, useEffect } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { loginFormSchema } from '@/schema/auth-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { loginEmail } from '@/actions/auth-actions'
import ErrorTriangle from './error-triagle'
import SuccessTick from './success-tick'
import { useSearchParams } from 'next/navigation'

function FormLogin() {
    const [pending , startTransaction ] = useTransition()
    const [error , setError] = useState<string | null>(null)
    const [success , setSuccess] = useState<string | null>(null)
    const searchParams = useSearchParams()
    const isAccountNotLinked = !!(searchParams.get("error") === "OAuthAccountNotLinked")
    useEffect(() => {
        if(isAccountNotLinked){
            setError("Account is not linked")
        }
    } , [])
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const  onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
        setError("")
        setSuccess("")

        startTransaction(
            async () => {
                const res = await loginEmail(data)
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
                    name='email'
                    disabled={pending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Email </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="Email" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>

                    )} />
                <FormField
                    control={form.control}
                    name='password'
                    disabled={pending}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel > Password </FormLabel>
                            <FormControl >
                                <Input {...field} placeholder="*********" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>

                    )} />
                <ErrorTriangle message={error}/>
                <SuccessTick message={success}/>

                <Button type='submit' className='w-full'>
                    Login
                </Button>

            </form>
        </Form>
    )
}

export default FormLogin