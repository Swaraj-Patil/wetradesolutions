'use client'
import React, { FormEvent, useState } from 'react'
import './Utils.css'
import { Button } from '@/app/_components'

const SubscriptionForm = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const handleSubscription = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('name', name)
        console.log('email', email)
    }

    return (
        <div className='uppercase'>
            <p className='font-[700] mb-8'>Join our mailing list</p>

            <form onSubmit={e => handleSubscription(e)}>
                <div className='subscription-input mb-8'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                <div className='subscription-input mb-8'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <Button type='tertiary' className=''>SUBSCRIBE</Button>
            </form>
        </div>
    )
}

export default SubscriptionForm