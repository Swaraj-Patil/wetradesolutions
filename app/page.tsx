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
import ToggleButton from "./_components/ToggleButton"
import PriceCard from "@/utils/PriceCard"
import { InfoLabel } from "@/utils/Utils"

const performanceData = [
  { id: 1, name: 'Stocks' },
  { id: 2, name: 'Crypto' },
  { id: 3, name: 'Forex' },
  { id: 4, name: 'Commodities' },
]

const essentialFeatures = [
  'Price Action Concepts toolkit + screener',
  'Community access w/ price action alerts',
  'Custom Alert Creator for PAC toolkit',
  'Alert Scripting for Price Action Concepts',
  '24/7 support & active toolkit updates'
]

const premiumFeatures = [
  'Signals & Overlays toolkit + screener',
  'Oscillator Matrix toolkit + screener',
  'Full scanner alerts & user strategies',
  'Custom Alert Creator for all 3 toolkits',
  'Alert Scripting functionality for all 3 toolkits'
]

const ultimateFeatures = [
  'AI Backtesting Assistant platform access',
  'Full suite w/ 3 Backtesters on TradingView',
  'Deep optimization engine for signal settings',
  'Scanners, bots, & backtests shared weekly',
  'Priority 24/7 support & active product updates'
]

// const pricing = [
//   {
//     id: 1,
//     title: 'Monthly',
//     cost: 99,
//     tags: ['Most popular'],
//     benefits: [
//       'Unlimited access to the Universal Indicator',
//       'Real-time sentiment data',
//       'AI-driven predictions',
//       'Simple and intuitive design'
//     ]
//   },
//   {
//     id: 2,
//     title: 'Quarterly',
//     cost: 270,
//     benefits: [
//       'Unlimited access to the Universal Indicator',
//       'Real-time sentiment data',
//       'AI-driven predictions',
//       'Simple and intuitive design'
//     ]
//   },
//   {
//     id: 3,
//     title: 'Yearly',
//     cost: 960,
//     benefits: [
//       'Unlimited access to the Universal Indicator',
//       'Real-time sentiment data',
//       'AI-driven predictions',
//       'Simple and intuitive design'
//     ]
//   },
// ]

export default function Home() {

  const [selectedData, setSelectedData] = useState<string>('Stocks')
  const [selectedDataImage, setSelectedDataImage] = useState(dataStocks)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [selectedPrice, setSelectedPrice] = useState<'Monthly' | 'Yearly'>('Yearly')

  const handlePriceChange = (newValue: string) => {
    setSelectedPrice(newValue as 'Monthly' | 'Yearly')
  }

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

      {/* <section className="py-9 px-44">
        <p className="font-[700] text-[22px] leading-7 mb-4">Pricing</p>

        <div className="flex items-center gap-x-3 mb-10">
          {pricing.map(eachPrice =>
            <div key={eachPrice.id} className="w-[300px] h-[250px] rounded-xl border border-[#3D4A52] bg-[#1C2126] p-[24px]">
              <div className="content__between mb-2">
                <p className="font-[700] text-base">{eachPrice.title}</p>
                {eachPrice.tags?.length && <div className="h-6 rounded-xl bg-[#1C8CD6] text-xs font-[500] px-3 py-1">{eachPrice.tags[0]}</div>}
              </div>

              <p className="text-4xl font-[900] mb-4">{`$${eachPrice.cost.toLocaleString()}`}<span className="font-[700] text-base ml-1">{`/${eachPrice.title.toLowerCase().slice(0, -2)}`}</span></p>

              <div className="mb-3 text-[13px] font-[400]">
                {eachPrice.benefits?.map((benefit, i) => <p key={i} className="flex items-center gap-x-3 mb-2"><FaCheck fontSize={18} />{benefit}</p>)}
              </div>
            </div>
          )}
        </div>
      </section> */}

      <section className="mb-10">
        <h1 className="text-6xl text-center">Plans for every style of trading</h1>
        <div className="text-center mt-14 mb-6">
          <InfoLabel label='Pay yearly and get up to 50% off!' />
        </div>


        <div className="content__center flex-col">
          <div className="relative mb-16">
            <ToggleButton value={selectedPrice} onChange={handlePriceChange} />
            <div className="absolute top-0 -right-12">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyan-500">
                <path d="M2.9024 21.8531C11.5 20 22.5 13.5 26.9999 1.56055" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7.34144 14.8779C7.34144 14.8779 4.80486 19.9511 1 22.4877C3.5 22.4877 11.5 23 13.6829 24.3901" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </div>

          </div>
          <div className="flex gap-x-8 w-full px-44">
            <PriceCard
              title='Essentials'
              subtitle='Start out strong & automate price action, the most essential part of your charts.'
              features={essentialFeatures}
              featureTitle='All Essential features'
              monthly={selectedPrice === 'Monthly' ? 39.99 : 24.99}
              yearly={selectedPrice === 'Yearly' ? 299.89 : undefined}
              savings={35}
              bgImage="https://www.luxalgo.com/images/graphics/top_right_cyan_square.svg"
            />
            <PriceCard
              title='Premium'
              subtitle="The most powerful set of tools & signals ever created for technical traders."
              features={premiumFeatures}
              featureTitle='All features from Essential, plus'
              monthly={selectedPrice === 'Monthly' ? 67.99 : 39.99}
              yearly={selectedPrice === 'Yearly' ? 479.88 : undefined}
              savings={40}
              bgImage="https://www.luxalgo.com/images/graphics/top_right_cobalt_diamond.svg"
            />
            <PriceCard
              main
              title='Ultimate'
              subtitle="For data-driven traders who want professional backtesting with AI."
              features={ultimateFeatures}
              featureTitle='All features from Premium, plus'
              monthly={selectedPrice === 'Monthly' ? 119.99 : 59.99}
              yearly={selectedPrice === 'Yearly' ? 719.88 : undefined}
              savings={50}
              bgImage="https://www.luxalgo.com/images/graphics/top_right_purple_stars.svg"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
