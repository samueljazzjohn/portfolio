import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi I am Samuel J", "Tech-Addict", "<Loves to code more>"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img className='relative rounded-full h-32 w-32 mx-auto object-fill' src="https://lh3.googleusercontent.com/K3pDxvDv8kdjReVnFo7j8CpL8luZejLLF1tSLzTICcSy_RaHPoVQBs4l5mBo50RPtTnEhRfFgVXsLZWIQ9EhtxIphz5X4GnyOvcmOfHcB6zEI9_5ELsfJGVx8gmruFNmFzlUYPpZSd558RdYziZZsOXkG-XmKuy-NIMRAY6BCFdIpxK2AEMDpErbhpUn54uTcyxBuFyi1LnzvF2U_AaJDCKcwKhfH3dOOe7j_ZoN6k0XKYR2w3lnEPpxNbaKCVN6_JGzwDMKJpmHC776s2afEwzzEr4uT4D75nANsNg2DedHjkSHVHNW5LjSOGTIl1yO5DfSkghMjyHtc54DH9E0RH9o9ZKI259eOKGnnnyTwnJO3jeSOGnnEsK5mIgexCWjBez7FQekrhgq0iDpYrc3gI1l7KqDKNI5KWsX4d7hZLqzFAPUBe0Dizpmea3TjQZd7AFJXTcAkABTY_d8C32Dc8pq8ryvAisneEcvZ51D5dGodbi8xaSzfRqYwJsSKQFBrHIwfHuFMjOprga21KoqW_aQN5Rxbpdm39rDs-AcvW8Trs2C92CYwhSbU-7BRnKtOxkXpFyiAsRGMlbrtImX9kQ0Mex4-JETyflKGrMHxruPkwT4gKrp6PuZC0hiLpOPU44htyrFePFLC2o_zY5i-_1YN5TJHvC4MLNi4hZScd9XC6wfQPJIpv7IZPy6hf-l-1WR1WjowOweOEMbqYYO7Zqs81pbxTvut34FayFWiZZdxM3CkIFhCZXj8ZgcidRPxMAGlJc-52FBfW4N2hjLgJ_ggF9sAljdV3nMN3nXuOMXYrkLA_3ts8y8KvgoQ5TzFE21fyFZnpIg9p4xCE-7yLq0O2JpXTEau6nnCMTC39v9vdiklih5dndhP6_GpVEUF9bCVh7S8r6tcJN0nM0exMBAUoipHkZ2nAXqnrbQawAjbW37KUJ2nTcCSUQS9w9wpnEXNNURX4BeH7hFvrm5Qq9rLthLD5ORquAzLoVucQ_CNzbaZ4XKEewA=w455-h543-no?authuser=0" alt="" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Software engineer
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