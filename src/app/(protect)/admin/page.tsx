"use client"
import React from 'react'
import useCurrent from '@/hooks/use-current'

function AdminPage() {
  const user = useCurrent()
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default AdminPage