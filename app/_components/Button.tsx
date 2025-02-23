import React, { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from 'react'

interface ButtonProps {
    inputProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    children: string | ReactElement<ReactNode>;
    type?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
    size?: 'S' | 'M' | 'L';
}

const Button: FC<ButtonProps> = ({
    inputProps,
    children,
    type = 'primary',
    className = '',
    size = 'M'
}) => {

    const typeStyles: { [key: string]: string } = {
        primary: 'bg-[#2194F2]',
        secondary: 'bg-black',
        tertiary: 'bg-[transparent] border border-white'
    }

    const sizeStyles: { [key: string]: string } = {
        S: 'py-2 px-3 text-sm',
        M: 'py-3 px-4 text-base',
        L: 'py-4 px-5 text-lg',
    }

    return (
        <button
            type={inputProps?.type || 'button'}
            className={`rounded-xl ${sizeStyles[size]} ${typeStyles[type]} ${className}`}
        >{children}</button>
    )
}

export default Button