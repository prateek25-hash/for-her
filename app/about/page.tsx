import Link from "next/link";
import { Heart, MessageSquare, Music, ImageIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            For Her, With Love
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/letters"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Letters
            </Link>
            <Link
              href="/gallery"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/playlist"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Playlist
            </Link>
            <Link
              href="/memories"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Memories
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full">
              <Heart className="w-12 h-12 text-primary-foreground fill-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">
              About This Collection
            </h1>
          </section>

          {/* Main Description */}
          <section className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-sm space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              This is a digital collection of letters made with love, for every
              emotion you feel. Each message has been carefully crafted to meet
              you exactly where you are—in joy and sorrow, in strength and
              vulnerability, in the quiet moments and the celebrations.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Whether you're experiencing a moment of doubt, a sleepless night,
              overwhelming stress, or pure joy, there's a letter waiting for you
              here. These aren't just words on a screen—they're reminders that
              you are loved, valued, and never truly alone.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              This space exists to celebrate every facet of the human heart. To
              acknowledge that feeling is strength. To remind you that in your
              darkest moments, light is never far away. To hold you gently
              through the spectrum of human emotion.
            </p>
          </section>

          {/* Features Section */}
          <section className="grid md:grid-cols-2 gap-6">
            {/* Letters Feature */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-serif text-xl text-foreground">
                  23 Letters
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Each letter is dedicated to a different emotion or life
                situation, created to provide comfort, encouragement, or
                celebration when you need it most.
              </p>
            </div>

            {/* Gallery Feature */}
            <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3">
                <ImageIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-serif text-xl text-foreground">
                  Photo Gallery
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A curated collection of visual moments that complement the
                emotions expressed in the letters, creating a multi-sensory
                experience.
              </p>
            </div>

            {/* Playlist Feature */}
            <div className="bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Music className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-serif text-xl text-foreground">
                  Curated Playlist
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A carefully selected soundtrack of songs that capture the
                essence of love, loss, joy, and connection. Music that speaks to
                the soul.
              </p>
            </div>

            {/* Love Feature */}
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border border-border p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary flex-shrink-0 fill-primary" />
                <h3 className="font-serif text-xl text-foreground">
                  Made With Love
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every word, every note, every image has been selected or created
                with the deepest intention—to remind you that you matter.
              </p>
            </div>
          </section>

          {/* Closing Section */}
          <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-2xl border border-border p-8 md:p-12 text-center space-y-4">
            <p className="text-lg text-foreground leading-relaxed font-serif">
              "In the quiet moments, when words feel impossible and emotions run
              deep, know that you are held. You are loved. You matter."
            </p>
            <p className="text-muted-foreground">– From me, always</p>
            <Heart className="w-6 h-6 text-primary fill-primary mx-auto mt-4" />
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6">
            <p className="text-foreground">
              Ready to open a letter? Start with what you need right now.
            </p>
            <Link
              href="/letters"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Explore Letters</span>
              <MessageSquare className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <p className="text-foreground font-serif text-lg">
            For Her, With Love
          </p>
          <p className="text-muted-foreground text-sm">
            A digital collection of letters made with love, for every emotion.
          </p>
          <p className="text-muted-foreground text-xs">
            © 2025 For Her, With Love. Made with love and care.
          </p>
        </div>
      </footer>
    </div>
  );
}
