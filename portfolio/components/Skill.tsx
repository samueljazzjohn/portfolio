import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  DirectionLeft?:boolean,
  skill: Skill
}

const Skill = ({DirectionLeft,skill}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x:DirectionLeft ? -200 :200,
        opacity : 0
        
      }}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1}}
      src={urlFor(skill.image).url()}
      className='rounded-full border border-gray-500 object-fill w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    <motion.div initial={{
        x:DirectionLeft ? -200 :200
      }}
      whileInView={{x:0}}
      transition={{duration:1}} className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
      </div>
    </motion.div>
    </div>
  )
}

export default Skill