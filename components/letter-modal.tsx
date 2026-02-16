"use client"

import { X, Heart } from "lucide-react"

interface LetterModalProps {
  letter: {
    id: number
    title: string
    icon: string
    content: string
  }
  onClose: () => void
}

export function LetterModal({ letter, onClose }: LetterModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border px-8 py-6 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="text-5xl">{letter.icon}</div>
            <div>
              <h2 className="font-serif text-2xl text-foreground">{letter.title}</h2>
              <p className="text-muted-foreground text-sm mt-1">Written with love</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-foreground hover:text-primary transition-colors p-2 hover:bg-foreground/5 rounded-full"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-10 space-y-6">
          {/* Letter Text */}
          <p className="text-foreground leading-relaxed text-lg font-serif">{letter.content}</p>

          {/* Signature */}
          <div className="pt-6 border-t border-border space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <Heart className="w-4 h-4 fill-primary" />
              <span className="font-serif text-lg">Always yours</span>
            </div>
            <p className="text-muted-foreground text-sm">– with all my love</p>
          </div>

          {/* Footer CTA */}
          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Close Letter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
