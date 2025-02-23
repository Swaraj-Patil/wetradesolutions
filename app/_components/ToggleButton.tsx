import React, { FC } from 'react'

interface ToggleButtonProps {
    value: string;
    onChange: (newValue: string) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ value, onChange }) => {
    return (
        <div className='text-white border border-[#555E76] rounded-full flex items-center justify-between overflow-hidden w-max'>
            <p
                className={`cursor-pointer ${value === 'Monthly' ? 'bg-[#394259] hover:bg-[#555E76]' : 'bg-[#1C2131] hover:bg-[#252C3F]'} focus:bg-[#1A1F2D] active:bg-[#1A1F2D] py-2 px-5 border-r border-[#555E76]`}
                onClick={() => onChange('Monthly')}
            >Monthly</p>
            <p
                className={`cursor-pointer ${value === 'Yearly' ? 'bg-[#394259] hover:bg-[#555E76]' : 'bg-[#1C2131] hover:bg-[#252C3F]'} focus:bg-[#1A1F2D] active:bg-[#1A1F2D] py-2 px-5`}
                onClick={() => onChange('Yearly')}
            >Yearly</p>
        </div>
    )
}

export default ToggleButton