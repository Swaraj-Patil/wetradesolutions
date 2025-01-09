'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Chips } from "./_components"
import heroImage from '@/public/media/hero-image.jpg'
import indicator1 from '@/public/media/indicator1.png'
import indicator2 from '@/public/media/indicator2.png'
import indicator3 from '@/public/media/indicator3.png'
import dataStocks from '@/public/media/data-stocks.jpg'
import dataCrypto from '@/public/media/data-crypto.jpg'
import dataCurrency from '@/public/media/data-currency.jpg'
import dataCommodities from '@/public/media/data-comodities.jpg'
import { FaCheck } from "react-icons/fa6";

const performanceData = [
  { id: 1, name: 'Stocks' },
  { id: 2, name: 'Crypto' },
  { id: 3, name: 'Forex' },
  { id: 4, name: 'Commodities' },
]

const pricing = [
  {
    id: 1,
    title: 'Monthly',
    cost: 99,
    tags: ['Most popular'],
    benefits: [
      'Unlimited access to the Universal Indicator',
      'Real-time sentiment data',
      'AI-driven predictions',
      'Simple and intuitive design'
    ]
  },
  {
    id: 2,
    title: 'Quarterly',
    cost: 270,
    benefits: [
      'Unlimited access to the Universal Indicator',
      'Real-time sentiment data',
      'AI-driven predictions',
      'Simple and intuitive design'
    ]
  },
  {
    id: 3,
    title: 'Yearly',
    cost: 960,
    benefits: [
      'Unlimited access to the Universal Indicator',
      'Real-time sentiment data',
      'AI-driven predictions',
      'Simple and intuitive design'
    ]
  },
]

export default function Home() {

  const [selectedData, setSelectedData] = useState<string>('Stocks')
  const [selectedDataImage, setSelectedDataImage] = useState(dataStocks)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
    switch (selectedData) {
      case 'Stocks':
        setSelectedDataImage(dataStocks)
        break
      case 'Crypto':
        setSelectedDataImage(dataCrypto)
        break
      case 'Forex':
        setSelectedDataImage(dataCurrency)
        break
      case 'Commodities':
        setSelectedDataImage(dataCommodities)
        break
    }
  }, [selectedData])

  if (!isMounted) return null

  return (
    <div className="">
      <section className="py-9 px-44">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
          <Image
            priority
            src={heroImage}
            alt="hero"
            layout="fill"
            objectFit="cover"
          />

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 px-4">
            <p className="font-[900] text-5xl mb-2">Universal Indicator</p>
            <p className="font-[400] text-base w-max">Trade with confidence using our AI-driven Universal Indicator. It takes the guesswork out of trading by providing real-time sentiment data on any asset</p>
          </div>
        </div>
      </section>

      <section className="py-9 px-44">
        <p className="font-[700] text-[22px] leading-7 mb-4">Universal Indicator</p>

        <div className="flex items-center gap-x-3">
          <div className="w-[300px] h-[170px] relative rounded-xl overflow-hidden">
            <Image
              priority
              src={indicator1}
              alt="indicator"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[300px] h-[170px] relative rounded-xl overflow-hidden">
            <Image
              priority
              src={indicator2}
              alt="indicator"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[300px] h-[170px] relative rounded-xl overflow-hidden">
            <Image
              priority
              src={indicator3}
              alt="indicator"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="py-9 px-44">
        <p className="font-[700] text-[22px] leading-7 mb-4">Performance Data</p>

        <div className="flex items-center gap-x-3 mb-10">
          {performanceData.map(data =>
            <Chips
              key={data.id}
              title={data.name}
              isActive={selectedData === data.name}
              onClick={() => setSelectedData(data.name)}
            />)}
        </div>

        <div className="relative w-full h-[314px] rounded-xl overflow-hidden">
          <Image
            priority
            src={selectedDataImage}
            alt="hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      <section className="py-9 px-44">
        <p className="font-[700] text-[22px] leading-7 mb-4">Pricing</p>

        <div className="flex items-center gap-x-3 mb-10">
          {pricing.map(eachPrice =>
            <div key={eachPrice.id} className="w-[300px] h-[250px] rounded-xl border border-[#3D4A52] bg-[#1C2126] p-[24px]">
              <div className="content__between mb-2">
                <p className="font-[700] text-base">{eachPrice.title}</p>
                {eachPrice.tags?.length && <div className="h-6 rounded-xl bg-[#1C8CD6] text-xs font-[500] px-3 py-1">{eachPrice.tags[0]}</div>}
              </div>

              <p className="text-4xl font-[900] mb-4">{`$${eachPrice.cost.toLocaleString()}`}<span className="font-[700] text-base ml-1">{`/${eachPrice.title.toLowerCase().slice(0, -2)}`}</span></p>

              <div className="mb-3 text-[13px] font-[400]">{eachPrice.benefits?.map((benefit, i) => <p key={i} className="flex items-center gap-x-3 mb-2"><FaCheck fontSize={18} />{benefit}</p>)}</div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
