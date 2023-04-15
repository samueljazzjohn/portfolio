import React from 'react'
import { motion } from 'framer-motion'
import { Pageinfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageinfo: Pageinfo
}

export default function About({pageinfo }: Props) {
    return (
        <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-3 md:px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>About</h3>
            <motion.img 
                className='-mb-[100px] md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0, opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
                viewport={{
                    once: true
                }}
                src={urlFor(pageinfo?.profilePic).url()}
            />
        <div className='-mb-[100px] md:mb-0 space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-sm md:text-base'>{pageinfo.backgroundInformation}</p>
        </div>
        </motion.div>
    )
}