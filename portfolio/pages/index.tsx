import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title> Jazz </title>
        </Head>
        
        {/* Header*/}
        <Header/>

        {/* Hero*/}

        {/* About*/}

        {/* Ecperience */}

        {/* Skills*/}

        {/* Projects*/}

        {/* Contact Me*/}
      </div>
    </>
  )
}
