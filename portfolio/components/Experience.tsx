import React from 'react'
import ExperienceCard from './ExperienceCard'
import {motion} from 'framer-motion'
import { Experience } from '@/typings'

type Props = {
  experience : Experience[]
}

export default function Experiences({experience}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{opacity:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center' >
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Experience</h3>
        <div className='h-5/6 absolute bottom-0 w-full flex '>
        <div className='w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin px-10 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            {experience?.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />
            ))}
        </div>
    </div>
    </motion.div>
  )
}