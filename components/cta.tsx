import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
const Cta = () => {
  return (
    <section className="border-2 border-black cta-section">
        <div className="bg-[#FFDA6E] rounded-xl p-2">
            <p className="text-black">Start learning your way</p>

        </div>
        <h1>
            Build a Personalize  Learning Companion
        </h1>
        <p>Pick a name, subject, voice, & personality — and start learning through 
            voice conversations that feel natural and fun.
        </p>
        <Image
            src="/images/cta.svg"
            alt="Call to Action"
            width={400}
            height={400}
            className="mt-4"
        />
        <Button className='bg-[#FE5933] rounded-lg w-full py-5 hover:bg-[#FE5933]/90 cursor-pointer'>
            <Image
                src="/icons/plus.svg"
                alt="Get Started Button"
                width={14}
                height={14}
            
            />
            <Link href="/campanions/new">
                <p>Build New Companion</p>
            </Link>
        </Button>
    </section>

  )
}

export default Cta