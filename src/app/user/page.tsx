import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const UserPage = async() => {
  const session = await getServerSession()
  if (session) {
  }
  return (
    <div>UsersPage</div>
  )
}

export default UserPage