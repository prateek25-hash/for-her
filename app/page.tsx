import Link from "next/link"
import { Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="font-serif text-2xl font-bold text-primary">For Her, With Love</div>
          <div className="flex items-center gap-8">
            <Link href="/letters" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Letters
            </Link>
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Gallery
            </Link>
            <Link href="/playlist" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Playlist
            </Link>
            <Link href="/memories" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Memories
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="text-center max-w-2xl mx-auto space-y-8">
            {/* Decorative Heart */}
            <div className="flex justify-center">
              <div className="relative">
                <Heart className="w-16 h-16 text-primary fill-primary animate-pulse" />
              </div>
            </div>

            {/* Main Quote */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
              A letter for every mood, written with love
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover heartfelt messages crafted for every emotion you feel. From joy to solace, from laughter to
              tears, there's a letter waiting for you.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="/letters"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span>Open the Letters</span>
                <Heart className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Decorative Envelope */}
          <div className="mt-20 relative">
            <svg
              className="w-48 h-48 text-accent/30 animate-bounce"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="60" width="160" height="100" fill="none" stroke="currentColor" strokeWidth="2" rx="4" />
              <path d="M20 60L100 120L180 60" stroke="currentColor" strokeWidth="2" />
              <line x1="100" y1="120" x2="100" y2="160" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 px-6 bg-card/50 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">What awaits inside</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all">
                <div className="text-4xl mb-4">💌</div>
                <h3 className="font-serif text-xl text-foreground mb-3">23 Handcrafted Letters</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Each letter is thoughtfully written for different moments in life, from joy to comfort.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all">
                <div className="text-4xl mb-4">🖼</div>
                <h3 className="font-serif text-xl text-foreground mb-3">Beautiful Gallery</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A curated collection of memories and moments, displayed with elegance and care.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="font-serif text-xl text-foreground mb-3">Curated Playlist</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A soundtrack of songs that capture the essence of love and all its emotions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">For Her, With Love — A collection of heartfelt messages</p>
          <p className="text-muted-foreground text-xs mt-2">Made with love for every emotion</p>
        </div>
      </footer>
    </div>
  )
}
