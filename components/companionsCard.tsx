import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
interface CompanionsCardProps {
    id : string;
    name : string;
    topic : string;
    subject : string;
    duration : number;
    color : string;
}

const CompanionsCard = ({ id, name, topic, subject, duration, color }: CompanionsCardProps) => {
    
  return (
    <article className='campanion-card' style={{backgroundColor: color}}>
        <div className='flex jutsify-between items-center '>
            <h1 className='bg-black text-white rounded-4xl text-sm py-1 px-2 capitalize'>{subject}</h1>
            <Button className='flex items-center h-full bg-black px-2 rounded-4xl aspect-square cursor-pointer'>
                <Image
                    src='/icons/bookmark.svg'
                    alt='bookmark icon'
                    width={12.5}
                    height={12.5}
                />
            </Button>
        </div>
        <h2 className='text-lg font-semibold '>{topic}</h2>
    </article>
  )
}

export default CompanionsCard