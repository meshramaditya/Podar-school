"use client"

import { ReactNode } from "react"

interface WhyCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function WhyCard({ icon, title, description }: WhyCardProps) {
  return (
    <div className="group bg-white border rounded-lg shadow w-64 h-64 flex flex-col items-center justify-center text-center p-6 transition transform hover:scale-105 hover:shadow-lg">
      {/* Icon with glow on card hover */}
      <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-purple-100 text-purple-700
                      transition-all duration-300
                      group-hover:bg-yellow-100
                      group-hover:shadow-[0_0_15px_3px_rgba(255,255,0,0.5)]">
        {icon}
      </div>

      <h2 className="font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
