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

const performanceData = [
  { id: 1, name: 'Stocks' },
  { id: 2, name: 'Crypto' },
  { id: 3, name: 'Forex' },
  { id: 4, name: 'Commodities' },
]

export default function Home() {

  const [selectedData, setSelectedData] = useState<string>('Stocks')
  const [selectedDataImage, setSelectedDataImage] = useState(dataStocks)

  useEffect(() => {
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
    </div>
  )
}
