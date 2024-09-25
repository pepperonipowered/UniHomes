import React from 'react'
import { Image, MapPin, MessageSquare, PhilippinePeso } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';

function Banner() {
  return (
      <div className='flex flex-row justify-between bg-muted-foreground rounded-xl p-5'>
          <div className="flex flex-row items-center gap-3">
              <Avatar className="h-20 w-auto">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                  <p className="text-xl leading-7 [&:not(:first-child)]:mt-6 text-primary-foreground">
                      Jose Rizzal
                  </p>
                  <p className="text-sm text-primary-foreground">
                      Owner / Manager / Executive
                  </p>
              </div>
          </div>
          <div className="flex flex-row items-center gap-3">
              <div className="flex flex-row gap-3">
                    <Button variant={'default'}>
                        <span className='flex flex-row gap-1'>
                            <MessageSquare className='w-5 h-auto' />
                            Message
                        </span>
                    </Button>
                    <Button variant={'secondary'}>Visit</Button>
              </div>
          </div>
      </div>
  );
}

export default Banner