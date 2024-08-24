import React, { useEffect, useState } from 'react'
import  {motion} from 'framer-motion'
import SkillCard from './Skill'
import { Skill } from '@/typings'


type Props = {
  initialSkills: Skill[];
};

const Skills: React.FC<Props> = ({ initialSkills }) => {
  const [skills, setSkills] = useState<Skill[]>([]);

  // Shuffle array function
  const shuffleArray = (array: Skill[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Check screensize and set initial skills
  useEffect(() => {
    const screenSize = window.innerWidth;
    let displayedSkills = [];

    if (screenSize >= 2000) {
      displayedSkills = shuffleArray([...initialSkills]).slice(0, 20);
    } else if (screenSize <= 768) {
      displayedSkills = shuffleArray([...initialSkills]).slice(0, 12);
    } else {
      displayedSkills = shuffleArray([...initialSkills]).slice(0, 16);
    }

    setSkills(displayedSkills);
  }, [initialSkills]);

  
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'> hover over a skill for corrency proficiency</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-[100px]">
          {skills?.slice(0,skills.length/2).map((skill)=><SkillCard key={skill._id} DirectionLeft={false} skill={skill} />)}
          {skills?.slice(skills.length/2,skills.length).map((skill)=><SkillCard key={skill._id} skill={skill} DirectionLeft={true} />)}
        </div>
    </motion.div>
  )
}

export default Skills