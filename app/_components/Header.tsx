'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40)

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`
                text-white flex py-5 px-20 items-center justify-between sticky top-0 z-50 transition-all duration-300 ease-in-out shadow-sm
                ${isScrolled && 'backdrop-blur-2xl py-[14px]'}
            `}
        >
            <div>
                WeTradeSolutions LOGO
            </div>
            <div>
                <ul className='flex gap-x-9 items-center'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#aboutus">About Us</a></li>
                    <li>
                        <Button
                            size={isScrolled ? 'S' : 'M'}
                            type={isScrolled ? 'tertiary' : 'primary'}
                            className='border-black'
                        >Get Started</Button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header