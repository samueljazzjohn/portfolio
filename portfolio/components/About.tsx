import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
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
        className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>About</h3>
            <motion.img
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
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
                src="https://lh3.googleusercontent.com/59cSS6LlxNMbs_f6KRJvun5WgmjB8syxn2Gajv3bqpTxwWa1fBKhamA1JE1wij1yQM1Zymf8PbPgMLWTDK2MNrhGLl8Oh58zQqqpra1Ni2TNvFtWbHkX8xG4RVW0OhjFPElE8KNovIWUeDT0FfpI6Uax9kYmTOH9bZtyLFkI7t8IzKVGbdwAG3ItbULAeToaCOeTGGGD_8LOJ0So6X5Cmy9XdkpUyYekwur6cvVpSMHTsAnZRh3_aUwFoZNyqlzqdIjW_KpESQ1AQSi_Y7GqfCF1zX-rCcMHEJKU582xqC_yWUrK3WFp9O46INBZx6RiPQoe-_xFJEo1e4YnC3aYdMbchrdsPGylCnwM9ouJ9HCuvomJOhwpw6lpBdbqB0q0A7wNzab0k6_P9ODlkLtb22qV-sWdo1NVzvB6L6K9S_7yyaLZibSPcGy3Bq-So-DQsEx7ahokAiHwQ6HYiTrLDC7zKXQ1UqpVuu5Tomi-c-fQmjBhijiZ_-oZlQhLR7dGkzOSNvaGBWcBmxfAhqy8xMkxOWIiuIvqcvxvVjr8udW4MpzeFneIOCbFqe0yzn6NVTTxL6tb-z-03z4SzKS2cpeGKNFtqWDHEd7WGOZo2DvN_WT-6O9E54SvZD7WigN0ycQ6ED20UHqdwGZgo2r3Nw_yKlIYtPHG_ft5fj-rGPEaUst-AB5IbVsfn-ZNJ7Hnb96np2p0pMxQKHNxIy2xQOss509Sy4icV0vRT5c7oWYoMXPhE7oTDFvOmohNHH3RPcZj9vI7rLRnYxRDVsJ-FFuoFcxW-HgvDPsNLx78guCYlzF1YdW_FPB5cmrXHnPau12nxU6yUdfgbB2OQRueS5JlDSd5MZuEWYIaE9XbdCRVUpNHVgVtaoa4V9PJajOc1Jic0uYOTLzLHszTgqaDiR_gCS_xX3Y-WDtlKvhWi5ZSvm2DL_QrbUyvpHWYdVwOi7n2-wO_4VaEBouVQ3wFzsx1wMTnfgH0FDBXdGmKczTf2Hq3PIE4kUoe=w1214-h1618-no?authuser=0"
            />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
            <p className='text-sm md:text-base'>I'm Sam. I am a Software Engineer, here is a little bit about me... I have been coding for over 3 years now. During my studies I gained hands-on experience in Web Development by creating lot of websites. 
            Most of my works are in the MERN stack. I also have experience with DevOps and programming languages such as Java, Python and JavaScript, and i am also looking for oppertunities to expand my skillset. Outside of work I enjoy sports, which makes me more energized and inspired. </p>
        </div>
        </motion.div>
    )
}