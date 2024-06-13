
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from 'react'
import Image from "next/image"

const Follow = () => {
  return (
    <div>
        <TabsContent value="followers">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
              <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="followers">Followers</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
                <Card>
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <Image src="/placeholder.svg" alt="@shadcn" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Software Engineer</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </CardFooter>
                </Card>
                
              </div>
            </TabsContent>
            <TabsContent value="following">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
                <Card>
                  <CardHeader>
                    <Avatar className="h-12 w-12">
                      <Image src="/placeholder.svg" alt="@shadcn" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1">
                      <div className="font-semibold">John Doe</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">Software Engineer</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Unfollow
                    </Button>
                  </CardFooter>
                </Card>
                
              </div>
            </TabsContent>
    </div>
  )
}

export default Follow



