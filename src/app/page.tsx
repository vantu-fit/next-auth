import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'

export default function Home() {

  
  return (
    <main className='flex h-full flex-col items-center justify-center bg-sky-400'>
      <div className="space-y-6">
        <h1 className='text-6xl font-semibold text-white drop-shadow-md'>  🗝️ Auth </h1>
        <p className='text-white'> A simple authentication vervice </p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant={'outline'} >
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>



    </main>

  )
}
