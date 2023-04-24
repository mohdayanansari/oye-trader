import React from 'react'

type Props = {
    title:string
}

const SectionHeading = ({title}: Props) => {
  return (
    <h2 className='text-[32px] font-black text-[#252525] text-center'>{title}</h2>
  )
}

export default SectionHeading