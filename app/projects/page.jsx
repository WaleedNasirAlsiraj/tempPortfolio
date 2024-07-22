
import ProjectsPage from '@/components/Projects/ProjectsPage'
import { NeonGradientCard } from '@/components/ui/NeonCard'
import Particles from '@/components/ui/particles'
import React from 'react'

const page = () => {
  return (
    <main className="w-full p-2 justify-center items-center flex flex-col">
    <div className=" w-full max-w-[1300px] py-5 flex flex-col justify-center items-center gap-5">
          <NeonGradientCard>
          <ProjectsPage/>
        </NeonGradientCard>
        <Particles
          className="fixed top-0 opacity-50 !h-full z-0 inset-0"
          quantity={1000}
          ease={40}
          refresh
        />
    </div>
 </main>
  )
}

export default page