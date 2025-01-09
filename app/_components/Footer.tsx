import React from 'react'
import SubscriptionForm from '@/utils/SubscriptionForm'

const Footer = () => {

    return (
        <div className='flex items-start justify-evenly py-10 bg-[#091017]'>
            <div className='max-w-52'>
                <div>WTS LOGO</div>
                <p className='text-[#fffde6] my-16'>A full service branding platform for the visionaries.</p>

                <ul className='flex flex-col gap-y-2 uppercase text-[14px]'>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>
            </div>

            <div className='uppercase text-[#fffde6]'>
                <p className='font-[700] mb-8 text-white'>Get in touch</p>

                <div className='mb-8'>
                    <p>Monday - Friday</p>
                    <p>10AM - 4PM IST</p>
                </div>

                <ul className='flex flex-col gap-y-2'>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Pinterest</a></li>
                </ul>
            </div>

            <SubscriptionForm />

            <div className='uppercase'>
                <p className='font-[700] mb-8'>Explore</p>

                <ul className='flex flex-col gap-y-4 text-[#fffde6]'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Glossary</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer