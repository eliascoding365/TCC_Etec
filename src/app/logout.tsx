'use client'

import { signOut } from "next-auth/react"

export default function Logout() {
  return (
    <button className="bg-red-500 opacity-90 py-1 px-3 rounded-lg text-white" onClick={() => {
      signOut()
    }}>
      Sair
    </button>
  )
} 