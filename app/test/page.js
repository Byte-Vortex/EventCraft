import React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'

export default function page(){
  return (
    <div className='min-h-screen flex bg-red-300'>
      <AspectRatio ratio={4/ 9} className="bg-muted">
        <Image 
        alt='nothing'
        src="/6.jpg"
        height={700}
        width={700}
        className=" w-full rounded-md object-cover"
        />
      </AspectRatio>
      <h1>Hello</h1>

    </div>
  )
};