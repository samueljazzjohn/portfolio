import React from 'react'
import {motion} from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
  experience : Experience
}

function ExperienceCard({experience}: Props) {
  console.log(experience)
  return (
    <article className='flex flex-col rounded-lg items-center  flex-shrink-0  w-[400px] md:w-[500px] lg:w-[700px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial ={{
        y:-100,
        opacity : 0
      }}
      transition ={{duration:1.2}}
      whileInView = {{opacity:1,y:0}}
      viewport ={{once:true}}
      className='rounded-full w-24 h-24 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
      src={urlFor(experience?.companyImage).url()}
      alt=''
      >
      </motion.img>
      <div className='px-2 mt-4  md:px-10'>
        <h4 className='text-4xl font-light mx-auto text-center md:text-left'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-4'>{experience.company}</p>
        <div className='flex space-x-1 my-2'>
          {experience?.technologies.map((tech)=><img key={tech._id} className='h-7 w-7 rounded-full' src={urlFor(tech.image).url()} alt="" />)}
        </div>
        <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString() } -{" "} { experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
        <ul className='list-disc text-lg space-y-4 ml-5 overflow-y-scroll'>
          {experience.points.map((point,i)=><li key={i}>{point}</li>)}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard