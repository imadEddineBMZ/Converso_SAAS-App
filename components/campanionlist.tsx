import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { getSubjectColor } from '@/lib/utils'
interface CompanionlistProps {
  titre: string;
  companions?: Companion[];
  className?: string;
}

const Companionlist = ({ titre, companions, className }: CompanionlistProps) => {
  return (
   <article className={cn('companion-list', className)}>
    <h2 className='font-bold text-3xl'>Recent Sessions</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-lg w-2/3">Lessons</TableHead>
          <TableHead className="text-lg text-center">Subject</TableHead>
          <TableHead className="text-lg  text-center">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companions?.map(({id,name,subject,topic,duration}) =>(
          <TableRow key={id}>
            <TableCell >
              <div className='flex items-center gap-4'>
                <div className='w-[60px] flex items-center max-md:hidden justify-center rounded-lg p-2' style={{backgroundColor: getSubjectColor(subject)}}>
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt={"ok"}
                    width={35}
                    height={35}
                  />  
                </div>
                <div className='flex flex-col items-'>

                  <p className='text-2xl font-bold'>{name}</p>
                  <p className='text-lg '>{topic}</p>
                </div>
              </div>
            </TableCell>
            <TableCell >
              <div className="subject-badge w-full text-center max-md:hidden text-gray-600" style={{backgroundColor: getSubjectColor(subject)}}>
                                    {subject}
              </div>
              <div className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden" style={{backgroundColor: getSubjectColor(subject)}}>
                <Image
                    src={`/icons/${subject}.svg`}
                    alt={subject}
                    width={18}
                    height={18}
                />
              </div>
            </TableCell>
            <TableCell>
              <div className='flex items-center justify-center gap-1'>
                <p className='text-lg '>
                  {duration} {" "}
                </p> 
                <span className='text-lg max-md:hidden'>
                  mins
                </span>
                <div>
                  <Image
                    src='/icons/clock.svg'
                    alt='clock icon'
                    width={13.5}
                    height={13.5}
                    className='md:hidden'
                  />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          
        </TableRow>
      </TableFooter>
    </Table>
   </article>
  )
}

export default Companionlist