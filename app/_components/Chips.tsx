import React, { FC } from 'react'

interface ChipsProps {
    title: string;
}

const Chips: FC<ChipsProps> = ({ title }) => {
    return (
        <div className='py-3 px-4 h-11 rounded-xl border border-[#3D4A52] font-[500] text-[14px] leading-5 content__center'>{title}</div>
    )
}

export default Chips