import { urlFor } from '@/sanity'
import { Pageinfo } from '@/typings'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {
    pageinfo : Pageinfo
}

export default function Hero({pageinfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi I am ${pageinfo?.name}`, "Tech-Addict", "<Loves to code more>"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-fill' src={urlFor(pageinfo?.heroImage).url()} alt="hero image" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageinfo.role}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'> {text} </span>
                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <button className='heroButton'>Experience</button>
                <Link href='#experience'>
                </Link>
                <Link href='#skills'>
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'>
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    )
}