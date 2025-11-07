import React from 'react'
import CompanionsCard from '@/components/companionsCard'
const Page = () => {
  return (
    <main className='bg-background min-h-screen w-full'>
      <h1 className='text-2xl underline '>Popular Companions</h1>
      
      <section className='home-section'>
        <CompanionsCard 
          id='1'
          name='Neura The Brainy Explorer'
          topic='Neural Network Of The Brain ' 
          subject='Science'
          duration={45}
          color='#ffde6e'
        />
        <CompanionsCard
          id='2'
          name='countsy the number wizard'
          topic='Derivation & Integrals' 
          subject='math'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionsCard
          id='1'
          name='Verba The Vocabulary Builder'
          topic='English Literature' 
          subject='Language'
          duration={30}
          color='#bde7ff'
        />
      </section>


    </main>
  )
}

export default Page