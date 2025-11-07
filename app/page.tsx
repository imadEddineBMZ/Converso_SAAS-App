import React from 'react'
import CompanionsCard from '@/components/companionsCard'
const Page = () => {
  return (
    <main className='bg-background min-h-screen w-full border-2 border-red-500'>
      <h1 className='text-2xl underline '>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionsCard 
          id='1'
          name='countsy the number wizard'
          topic='Derivation & Integrals' 
          subject='math'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionsCard />
        <CompanionsCard />
      </section>


    </main>
  )
}

export default Page