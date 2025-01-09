import React, { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from 'react'

interface ButtonProps {
    inputProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    children: string | ReactElement<ReactNode>;
    type?: 'primary' | 'secondary' | 'tertiary';
    className?: string;
}

const Button: FC<ButtonProps> = ({
    inputProps,
    children,
    type = 'primary',
    className = '',
}) => {
    const buttonStyle = () => {
        switch (type) {
            case 'primary':
                return 'bg-[#2194F2]'
            case 'secondary':
                return 'bg-black'
            case 'tertiary':
                return 'bg-[transparent] border border-white'
        }
    }
    return (
        <button
            type={inputProps?.type || 'button'}
            className={`py-3 px-4 rounded-xl ${buttonStyle()} ${className}`}
        >{children}</button>
    )
}

export default Button