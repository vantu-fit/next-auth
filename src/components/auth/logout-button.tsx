import React from 'react'
import { signOut } from '@/auth'
import { Button } from '../ui/button'

function LogoutButton() {

    return (
        <form action={async () => {
            "use server"
            await signOut()
        }}>
            <Button type='submit' className='w-full'>
                Logout
            </Button>
        </form>
    )
}

export default LogoutButton