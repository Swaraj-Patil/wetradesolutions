import React, { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from 'react'

interface ButtonProps {
    inputProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    children: string | ReactElement<ReactNode>;
    type?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
    inputProps,
    children,
    type = 'primary',
}) => {
    return (
        <button
            type={inputProps?.type || 'button'}
            className={`py-3 px-4 rounded-xl ${type === 'primary' ? 'bg-[#2194F2]' : '#000'}`}
        >{children}</button>
    )
}

export default Button