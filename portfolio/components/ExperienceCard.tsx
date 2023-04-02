import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center  flex-shrink-0 w-[500px] md:w-[600px] lg:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial ={{
        y:-100,
        opacity : 0
      }}
      transition ={{duration:1.2}}
      whileInView = {{opacity:1,y:0}}
      viewport ={{once:true}}
      className='rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center'
      src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      alt=''
      >
      </motion.img>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Emojipedia</h4>
        <p className='font-bold text-2xl mt-1'></p>
        <div className='flex space-x-1 my-2'>
          <img className='h-7 w-7 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
          <img className='h-7 w-7 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
          <img className='h-7 w-7 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
          <img className='h-7 w-7 rounded-full' src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" />
        </div>
        <p className='uppercase py-5 text-gray-300'>started.... ended....</p>
        <ul className='list-disc text-lg space-y-4 ml-5'>
          <li>somethint point</li>
          <li>somethint point</li>
          <li>somethint point</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard