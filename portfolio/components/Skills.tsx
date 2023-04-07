import React from 'react'
import  {motion} from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> hover over a skill for corrency proficiency</h3>
        <div className="grid grid-cols-3 gap-5 mt-[100px]">
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            {/* <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill /> */}
        </div>
    </motion.div>
  )
}

export default Skills