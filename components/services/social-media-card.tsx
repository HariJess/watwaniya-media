'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

interface SocialMediaCardProps {
  icon: string
  title: string
  description: string
}

export function SocialMediaCard({ icon, title, description }: SocialMediaCardProps) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl border border-[#2a2a2a] p-5 hover:border-[#3a3a3a] hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 flex h-10 w-10 items-center justify-center">
       <Image
        src={icon}
                 alt={title}
                 width={50}
                 height={50}
                 className="w-10 h-10 object-contain"
               />
      </div>
      <h3 className="mb-4 text-md font-bold text-white">
        {title}
      </h3>
      <p className="mr-2 text-sm leading-relaxed text-white">
        {description}
      </p>
    </div>
  )
}
