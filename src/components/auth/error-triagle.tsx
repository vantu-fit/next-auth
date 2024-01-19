import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";

interface ErrorTriangleProps {
    message: string | null
}

function ErrorTriangle({ message } : ErrorTriangleProps) {
    if (!message) return <></>
    return (
        <div className="flex items-center justify-center bg-red-200 py-2 rounded-md gap-4">
            <FiAlertTriangle className="text-red-500 w-5 h-5"/>
            <p className="text-red-500 text-sm ml-2 font-semibold">{message}</p>
        </div>
    )
}

export default ErrorTriangle