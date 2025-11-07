"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
const navItems =[
    {label :'Home', path: '/'},
    {label :'Campanions', path: '/campanions'},
    {label :'My Journey', path: '/my-journey'},
    {label :'Sign In', path: '/sign-in'},  

]

const NavItems = () => {
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center gap-4">
      {navItems.map((item) => (
        <Link href={item.path} key={item.label} className={cn(pathname=== item.path && 'text-violet-500 text-lg font-bold')}>
          {item.label}
        </Link>
      ))}

    </nav>
  )
}

export default NavItems