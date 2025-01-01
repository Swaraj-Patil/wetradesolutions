import React from 'react'
import Button from './Button'

const Header = () => {
    return (
        <header className='text-white flex py-5 px-20 items-center justify-between border-b border-white'>
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
                    <li><Button>Get Started</Button></li>
                </ul>
            </div>
        </header>
    )
}

export default Header