import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experiences from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import { Skill,Project,Experience,Pageinfo,Social } from '@/typings'
import { GetStaticProps } from 'next'
import { fetchPageinfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchExperiences } from '@/utils/fetchExperience'
import { fetchProjects } from '@/utils/fetchProject'
import { fetchSocials } from '@/utils/fetchSocials'
import { urlFor } from '@/sanity'
import { Toaster } from 'react-hot-toast';


type Props = {
  pageInfo : Pageinfo;
  experience: Experience[];
  skill: Skill[];
  project:Project[];
  social:Social[];
}


const inter = Inter({ subsets: ['latin'] })

function Home({pageInfo,experience,skill,project,social}:Props) {
  return (
    <>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Head>
          <title> Jazz </title>
        </Head>
        
        <Header socials ={ social}/>

        <section id='hero' className='snap-start'>
          <Hero pageinfo={pageInfo}/>
        </section>

        <section id="about" className='snap-center'>
          <About pageinfo={pageInfo} />
        </section>

        <section id='experience' className='snap-center'>
          <Experiences experience={experience} />
        </section>

        <section id='skills' className='snap-start'>
          <Skills initialSkills={skill}/>
        </section>


        <section id='projects' className='snap-start'>
          <Projects projects={project} />
        </section>

        <section id='contact' className='snap-start'>
          <ContactMe details={pageInfo} />
        </section>

        <Link href='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer'>

          <div className='flex items-center justify-center'>
            <img className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer' src={urlFor(pageInfo.heroImage).url()} alt="" />
          </div>
          </footer>
        </Link>
        <Toaster />
      </div>
    </>
  )
}

export default Home



export const getStaticProps : GetStaticProps<Props> = async ()=>{
  const pageInfo : Pageinfo  = await fetchPageinfo()
  const experience : Experience[]  = await fetchExperiences() 
  const skill : Skill[]  = await fetchSkills() 
  const project : Project[]  = await fetchProjects() 
  const social : Social[]  = await fetchSocials() 

  return {
    props:{
      pageInfo,
      experience,
      skill,
      project,
      social
    },
    revalidate:10,
  }

}