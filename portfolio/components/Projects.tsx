import React from 'react'
import {motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
    projects : Project[]
}

const Projects = ({projects}: Props) => {

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly max-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' >
            {projects.map((project,i)=>(
                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{y:-300,opacity:0}}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className='w-50 h-60' src={urlFor(project.image).url()} alt="" />
                    
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}: </span>{project.title}
                        </h4>
                        <div className='flex items-center justify-center space-x-4'>
                            {project.technologies.map((tech)=>(
                                <img key={tech._id} className='h-10 w-10 rounded-full' src={urlFor(tech.image).url()} alt="" />
                                ))}
                        </div>
                        <p className='text-lg text-center md:text-left'>
                        {project.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects