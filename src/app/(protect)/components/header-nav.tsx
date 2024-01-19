"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonCusProps {
    label: string
    href: string
    isActive?: boolean

}

const ButtonCus = ({ href, label , isActive }: ButtonCusProps) => {
    return (
        <Button variant={!isActive ? 'outline' : 'default'} className='py-2 px-4 mx-4'>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}

const buttonUrl = { 
    setting: '/setting',
    user: '/user',
    admin: '/admin'
}

const buttonLabel = {
    setting: 'Setting',
    user: 'User',
    admin: 'Admin'
}



function HeaderNav() {
    const route = useRouter()
    const pathname = usePathname()
    // console.log(route)
    console.log(pathname)
    
    return (
        <Card className='mt-10'>
            <CardHeader>
                
            </CardHeader>
            <CardContent>
                <ButtonCus href={buttonUrl.setting} label={buttonLabel.setting} isActive={pathname === buttonUrl.setting }/>
                <ButtonCus href={buttonUrl.user} label={buttonLabel.user}  isActive={pathname === buttonUrl.user }  />
                <ButtonCus href={buttonUrl.admin} label={buttonLabel.admin}  isActive={pathname === buttonUrl.admin } />
            </CardContent>
        </Card>
    )
}

export default HeaderNav