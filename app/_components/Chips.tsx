import React, { FC } from 'react'

interface ChipsProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Chips: FC<ChipsProps> = ({ title, isActive = false, onClick }) => {
    return (
        <div
            className={`cursor-pointer py-3 px-4 h-11 rounded-xl border ${isActive ? 'border-[#c6a933b2]' : 'border-[#3D4A52]'} font-[500] text-[14px] ${isActive && 'text-[#c6a933b2]'} leading-5 content__center`}
            onClick={onClick && onClick}
        >{title}</div>
    )
}

export default Chips