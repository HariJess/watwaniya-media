'use client'

import Image from 'next/image'

interface DigitalContentCardProps {
  iconImage: string
  title: string
  description: string
}

export function DigitalContentCard({ iconImage, title, description }: DigitalContentCardProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl border border-[#2a2a2a] p-5 hover:border-[#3a3a3a] hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 flex h-10 w-10 items-center justify-center">
        <Image
          src={iconImage}
          alt="icon"
          width={50}
          height={50}
          className="w-10 h-10 object-contain"
        />
      </div>
      <h3 className="mb-2 text-[17px] font-bold text-white">
        {title}
      </h3>
      <p className="mr-2 text-sm leading-relaxed text-white">
        {description}
      </p>
    </div>
  )
}
