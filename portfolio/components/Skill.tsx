import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  DirectionLeft?:boolean
}

const Skill = ({DirectionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x:DirectionLeft ? -200 :200,
        opacity : 0
        
      }}
      whileInView={{opacity:1,x:0}}
      transition={{duration:1}}
      src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXwPi/3n5f////3oZnwOSnwOCf3o5vwOyvwNST1gHbxSTz3npb3mpLvLxv3nJP2kIfvMR72i4LzaV/yXVL3l4/94+HxTkHxRDXyWEz0dGrvKhTxU0f2lIv0enD83tz+8vHzZFn6wb35ta/1f3b0cGb96+n70c/7z8z+9fT4raj72NX6x8T83974sqz2hn3vJArIqhI2AAAIN0lEQVR4nO2da3OiPBSAEXJBAblIuYr1gq3tvqX//9+9gJcqQgClk9A5z5edndl1eExyTnIkiSQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDKUI4Ry1IP8TIUp5P9NgUIRVP147YTLNbHOZY0+T1Fl4korR6DXzlpOCMNMVheQoF45/c7Nw4SM8XkuKqBeapcukltJ0mSz8cUpSdZYuFdIgd6M5z9bjk0Tqwp606/1ITgMV8X7oHiC6drvqXSRdRxqLI+3td5QkujOOFIID8wG/o+MyUHk/fisUJU2hs5Nj5gveVXHskof9SkdljXlLsEDpEw14bsadJO5oxNlzDXiELH1BFSk1hxDMm1GLhRyM1B9IsBiMCwEVqTSYYK44WYgXb9CAgmUriqao2kMKFiFVsLGopsMK5orzmUgRFQ8umCuaAhlSaU+0wRVJIs4kNdrIv2A4IcLkDLyWf8VQ0X3eaiei/2T5q93wVIEqClIdFclUjJSh2rIsb9mGRcFGN6dJEobJLjO13LWLJgmEiDbWS264mbP0JmYa+EUpGJWFYRV562TZwVExRRiJOMkF5ZXe7OeGXrX2SxGmQaa05hiyEKARjbfCcN9gmPutpfpSIcWz1nqAsuSfMagnl0xqB6KiOawqIW5djwjQiBY5Gm7rBiIxZ+xoSHHIbkbF5h5Ov/dHw7qBSKbt5UG8aFGMOTci9eUT94Yk6fL9o5ip2O1DfhHVPRve5Quy6xYl0II1FhX9lw3aMP6dDavRtHsuY69MeGf9aH82rE7clO7rO5wx+qmy49pNqXeQ6xuROD0ezGcZ6lwNcSj/cD0SlWWfvsXsp8Tj2U3LWfcF7aefknW/GaXe3Iok5Tk5Pef7Iy/upQndfl0Lhc2NqGQ8u6mxuTaUN+ehSMKe3/tscvUiwy1kwrMNf5LF7dyNzHp+EEqnTeymfT9sSKK3W0OZzI+dtPeSoHyhqIHfePKuRJ8Vw0OpqAhSfhiAO8O8o+pFMhRhbT4INYZFuCG8FwTDEb3fG8rvbu9AIy6VbHHOi8r4X8k7Y33UGcryJOJfXxkGVa83lFdJ9DeCjZo1GMry5zr6CykDrRsNZfkttf5AX6UHhqL8mSFj7J01WrEMZfl1u/i2Ri3ZFEyv2H8EljG6N2Qv3CzyG3nZ7mLDUsdpGXUxzDm8fGXetzFCy+oKkd1hN7afW45rxoOdHoYFr//chWSoIxqY5Q+kPdm/TVI/skZiqZr9Dcu2/PxI6PcoLNG+XaeJPMhK4qeS25rpI5aJZ4g9K6hb6Pfj8KkvIoETCZo9a1iwcpG4Cy7LbRfowj9H2MVIr7TPYjU1xFxUUvrfQIryKvwWsq8i6XUoRfktMHjr1IGkJ7JilS9VxK6KZi1r4T68OCI2I0K1tdMHcb95+9RAoycnNzdsIhEnAFb89Ozmh08h9+khQxlO8UVIRcmIhxuNe0PEjipRYzaY40pMxTzixNuB8v9GxKRRQA3fHibmuBZvlyaoasUfQ8xyBNvfdQO1vj3tjfmzRgdeRMz8P1ArQqn+/lRbittPzyArkhb25oGS45GDqNueb0CqYdHk67Hg8yF8I56g2IqsVOnfZcfRiGewGqmLbLvqFX8E2FTSj6LLzhxSfSGumVXE+5EfoOiy3+uPjuEnEDgnMsmjbOx2iT6jiTU1UNUI3Nbqh+BZv41ccrFtURT4sJNuICNymUmE746LYbCsjNFZyYgH4g+qkTW24z9Rl4k9UaNlU6gZY0asxWqoKr+OPdL8gJfbOsMD131Bg0IVndTNWcXYlj8EPploes1c7s+8+k9jMskV72dyXPd2DQlyyv1d95PVkFfKnzF45FgSvDvu0XOrHZVTL6UeYeA+EBzU0y5ETa8k/56bGQeDuqzNrf23zVDv/Hla5QceXkfxMDcoP7CPHieXbZbzm98+uOVDxNq9q2j9P/CqTyyvh+KeVyilMfMwhL4B8BRJT/30evstv3kpZuxPzluxbzi9GdbXWZHf2gJPmYZZrzIgvt3sfN2I/NaHNGCeLtPr0IE899z+76ukyHGNj9jdVOn+2xj1qx+lbS+GHM8XvIrvtYpa12ejknn3XbnnVcaeY63trmtVFXWvUyvWHn56iTVfPMs0yGYfZaVoXc4hxd6y5mPm527Ka85WQpmn5xSKStj2njrFjlb7PZ3KNq9861C47tu/oThoneFIVd9uOJvOPb7Rwbmo39qIxZFtZkAbNgIhFGeNZ+/px7oU753v6n0QrHFchjGtnLtHKcazNesMfr3cCv/Ou1haVh46OCruzoml8hqd8kIdOlsn5px5duIxI6bcS/p41+2EXaU4/1Jz7SwrLtSZl8dfsptfK3ZvfgpQDb6bjTA1z3T4x+XUlGuqOME+b+0JCsONAE3YvZ/2NlQOB0F+OuwSTx9SPHQ8tu/XoT6rJvU45IN3prhA4/p513NwPzLxGhQ8eHsOS5DvUXRVcPD0/StVQdGuR0DBfFBFAa/UQV6PzN8uSIQTLCLqcrC8qExi8QSL1ULzSqgfZDkTYLJWB17PB7kPKRP3nVLkP9+MiiL2j9pq0OXAfIYfsVvOAOcORSl7Ycv2c9cC78s/g/1Qe8hRIXo6kmsekeT0v+RxRH4FSA0yra1McaOn2Ws8Hr8CqvqOrXe5i6So4JjpbATj7w6E/SC0NVbJqbh7RrNTD43rZKUraP7onrMzteq1zsqx1racOl61kjo+ipu58SxeOGkyte1liZlNQyfw8V+4m/vM6Xp19UR5vzrvZwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4K/xP/CSic35SLzPAAAAAElFTkSuQmCC'
      className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>100%</p>
      </div>
    </div>
    </div>
  )
}

export default Skill