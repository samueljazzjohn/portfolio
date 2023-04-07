import React from 'react'
import {motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {

    const projects = [1,2,3,4,5]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly max-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20' >
            {projects.map((project,i)=>(
                <div className='w-screen flex-shrink-0 snap-center flex flex-col items-center space-y-5 justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{y:-300,opacity:0}}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className='w-50 h-60' src="https://img.freepik.com/premium-vector/chat-bot-dialog-windows-computer-tablet-laptop-screen_88138-612.jpg?w=1800" alt="" />
                    
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length}: </span>PGM App
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        It is basically a Web Application for a Christian organisation to manage churches and a study centre of it. MERN stack with redux toolkit is used to develop this application.
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