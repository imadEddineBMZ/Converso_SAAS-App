import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
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
    <article className='companion-card' style={{backgroundColor: color}}>
            <div className='flex items-center justify-between'>
                <h1 className='bg-black text-white rounded-4xl text-sm py-1 px-2 capitalize'>{subject}</h1>
                <Button className='px-2 bg-black rounded-4xl flex items-center h-full aspect-square cursor-pointer'>
                    <Image
                        src='/icons/bookmark.svg'
                        alt='bookmark icon'
                        width={12.5}
                        height={12.5}
                    />
                </Button>
            </div>

        <h2 className='text-lg font-semibold '>{name}</h2>
        <p>{topic}</p>
        <div className='flex items-center justif-start gap-1'>
            <Image
                src='/icons/clock.svg'
                alt='clock icon'
                width={13.5}
                height={13.5}
            />
            <span className='text-sm'>{duration} mins</span>
        </div>
        <Link href={`/campanions/${id}`} >
            <Button className='btn-primary w-full'>
                Start Session
            </Button>
        </Link>
    </article>
  )
}

export default CompanionsCard