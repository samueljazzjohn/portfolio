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
    <article className='flex flex-col rounded-lg mb-16 items-center flex-shrink-0 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[700px] snap-center bg-[#292929] p-6 sm:p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden '>
  <motion.img
    initial={{
      y: -100,
      opacity: 0
    }}
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='rounded-full w-24 h-24 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
    src={urlFor(experience?.companyImage).url()}
    alt=''
  />
  <div className='px-2 mt-4 sm:px-4 md:px-10 flex-grow flex flex-col h-4/5'>
    <h4 className='text-2xl sm:text-3xl md:text-4xl font-light text-center md:text-left'>{experience.jobTitle}</h4>
    <p className='font-bold text-xl sm:text-2xl mt-2 sm:mt-4 text-center md:text-left'>{experience.company}</p>
    <div className='flex flex-wrap justify-center md:justify-start space-x-2 my-2'>
      {experience?.technologies.map((tech) => (
        <img key={tech._id} className='h-7 w-7 rounded-full' src={urlFor(tech.image).url()} alt={tech.name} title={tech.name} />
      ))}
    </div>
    <p className='uppercase py-2 sm:py-5 text-gray-300 text-center md:text-left'>
      {new Date(experience.dateStarted).toDateString()} -{" "} 
      {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
    </p>
    <ul className='list-disc text-sm sm:text-lg space-y-2 sm:space-y-4 ml-5 max-h-5/6 md:max-h-5/6 lg:max-h-5/6 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      {experience.points.map((point, i) => <li key={i}>{point}</li>)}
    </ul>
  </div>
</article>
  )
}

export default ExperienceCard