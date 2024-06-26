import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'
import Logout from '../logout'
import prisma from '../../../prisma/client'
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { FaUserCircle } from "react-icons/fa"
import Image from 'next/image'
import { Metadata } from 'next'

interface Props {
  params: string
}

export default async function UserPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email,
    },
  })

  if (!user) {
    redirect("/login")
  }

  const vagas = await prisma.vaga.findMany({
    where: {
      createdById: user.id,
    },
  })

  return (
    <div className="flex flex-col w-full">
      <header className="bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-10">
        <div className="container mx-auto flex items-center gap-6">
          <FaUserCircle className='h-16 w-16 md:h-20 md:w-20' />
          <Avatar className="h-16 w-16 md:h-20 md:w-20">
          </Avatar>
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">Seu resumo:</p>
          </div>
          <div className='ml-auto'>
            <Logout />
          </div>
        </div>
      </header>
      <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="container mx-auto flex items-center gap-6 py-3 px-6 md:px-10">
          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="flex items-center w-full ">
              <TabsTrigger className='px-20' value="posts">Vagas Anunciadas</TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
                {vagas.map(post => (
                  <Card key={post.id}>
                    <CardHeader>
                    <h3 className="text-lg font-semibold">{post.name}</h3>
                      <Image
                        src="/static/images/cards/temos-vagas.png"
                        width="400"
                        height="225"
                        alt="Post Image"
                        className="rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400 ">
                        {post.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4" />
                        <span className="text-sm">{new Date(post.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </nav>
    </div>
  )
}

function CalendarDaysIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}

export async function generateMetadata(){
  const session = await getServerSession()
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return {
      title: 'VagaNet',
      description: 'Página do usuário'
    }
  }

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    }
  })

  return {
    title: 'VagaNet - ' + user?.name,
    description: 'Página do usuário'
  }
}