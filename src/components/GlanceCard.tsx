"use client"

import { ReactNode } from "react"

interface GlanceCardProps {
  icon: ReactNode
  number: string
  title: string
  description: string
}

export default function GlanceCard({ icon, number, title, description }: GlanceCardProps) {
  return (
    <div className="group flex flex-col items-center justify-center text-center p-4 rounded-lg transition transform hover:scale-105 hover:shadow-md">
      <div className="bg-purple-100 text-purple-700 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl transition-colors duration-300 group-hover:bg-purple-200 group-hover:text-purple-900">
        {icon}
      </div>
      <span className="text-purple-700 font-semibold text-2xl mb-1">{number}</span>
      <h3 className="font-semibold text-gray-800 text-base mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
