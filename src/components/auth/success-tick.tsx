import React from 'react'
import { FiCheckCircle } from 'react-icons/fi'

interface SuccessTickProps {
    message?: string | null
}
function SuccessTick({ message }: SuccessTickProps) {
    if (!message) return <></>
    return (
        <div className="flex items-center justify-center bg-green-200 py-2 rounded-md gap-4">
            <FiCheckCircle className="text-green-500 w-5 h-5" />
            <p className="text-green-500 text-sm ml-2 font-semibold">{message}</p>
        </div>
    )
}

export default SuccessTick