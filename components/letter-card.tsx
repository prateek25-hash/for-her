"use client"

import { Heart } from "lucide-react"

interface LetterCardProps {
  letter: {
    id: number
    title: string
    icon: string
    content: string
  }
  onClick: () => void
}

export function LetterCard({ letter, onClick }: LetterCardProps) {
  const gradientClass = "bg-gradient-to-br from-(--letter-card-from) to-(--letter-card-to)"

  return (
    <button
      onClick={onClick}
      className={`group relative h-48 ${gradientClass} rounded-2xl p-6 border border-white/30 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Envelope Icon */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{letter.icon}</div>

        {/* Title */}
        <h3 className="font-serif text-lg leading-tight text-gray-800 text-left group-hover:text-gray-900 transition-colors duration-300">
          {letter.title}
        </h3>

        {/* Envelope Outline */}
        <div className="absolute bottom-4 right-4 w-8 h-6 border-2 border-gray-700/40 group-hover:border-gray-800/60 rounded-sm transition-all duration-300" />

        {/* Heart Hover Effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
        </div>
      </div>
    </button>
  )
}
