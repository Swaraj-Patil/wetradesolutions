import React, { FC } from 'react'
import { InfoLabel } from './Utils'
import { FaArrowRight, FaRegCircleCheck } from 'react-icons/fa6'

interface PriceCardProps {
    title: string;
    subtitle: string;
    features: string[];
    featureTitle: string;
    monthly: number;
    yearly?: number;
    savings?: number;
    bgImage: string;
    main?: boolean;
}

const PriceCard: FC<PriceCardProps> = ({ features, title, monthly, yearly, savings, bgImage, subtitle, featureTitle, main }) => {
    return (
        <div
            className='flex-1 w-full overflow-hidden border border-[#394259]'
            style={{
                background: `url('${bgImage}') no-repeat right top`,
                backgroundPosition: 'right top',
                backgroundColor: '#1C2131',
                borderRadius: '1.5rem'
            }}
        >
            <div className='' style={{
                padding: '20px 36px'
            }}>
                <p className='text-2xl font-normal' style={{ fontSize: '1.5rem' }}>{title}</p>

                {main && <div className='absolute' style={{ marginTop: '8px' }}><InfoLabel label='Popular' fontSize={16} /></div>}

                <div className='mt-16'>
                    <span className='text-2xl'>$</span>
                    <span className='text-6xl'>{monthly.toLocaleString()}</span>
                    <span className='text-lg'>/mo</span>
                </div>

                {yearly && <span className='text-lg' style={{ color: '#80899F' }}>{`$${yearly?.toLocaleString()}/yr`}</span>}

                <div className='content__center flex-col' style={{ marginTop: '4px' }}>
                    {yearly && savings && <InfoLabel label={`You save ${savings}% a year`} fontSize={16} />}
                    <p className='font-medium text-xs text-balance text-center' style={{ width: '250px', marginTop: '12px' }}>{subtitle}</p>
                </div>
            </div>

            <div
                className='rounded-t-3xl'
                style={{
                    backgroundColor: main ? '#FFF' : '#252C3F',
                    color: main ? 'black' : 'white',
                    padding: '20px 36px',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                }}
            >
                <p className='text-base mb-2'>{featureTitle}:</p>
                <ul className='text-xs'>
                    {features?.map((feature: string, index: number) =>
                        <li className='flex items-center mb-3'>
                            <span style={{ fontSize: '18px' }}>
                                {main && index === 0 ? <span style={{ marginLeft: '-4px', marginRight: '6px' }}>✨</span> : <FaRegCircleCheck color='#22C55E' fontSize={18} style={{ marginRight: '10px' }} />}
                            </span>
                            {feature}
                        </li>)}
                </ul>

                <div className='content__center flex-col gap-y-4 mt-10'>
                    <button
                        className='relative flex items-center rounded-full border overflow-hidden button__parent'
                        style={{
                            borderColor: '#80899F',
                            padding: '10px 20px'
                        }}
                    >
                        <span className='button__child rounded-full inset-0'
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#394259',
                                top: 0,
                                left: 0,
                                transform: 'scale(0) translateX(-30px)',
                                transformOrigin: 'left',
                                inset: 0,
                                transition: 'all 200ms'
                            }}
                        ></span>
                        <span className="relative z-10 flex items-center" style={{ gap: '8px' }}>Subscribe <FaArrowRight /></span>
                    </button>
                    <p className='text-xs' style={{ color: '#80899F' }}>30-day money-back guarantee</p>
                </div>

            </div>
        </div>
    )
}

export default PriceCard