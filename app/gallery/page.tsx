"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/image 1.jpg"
  },
  { id: 2, src: "/image 2.jpg" },
  { id: 3, src: "/image 3.jpg" },
  { id: 4, src: "/image 4.jpg" },
  { id: 5, src: "/image 5.jpg" },
  { id: 6, src: "/image 6.jpg" },
  { id: 7, src: "/image 7.jpg" },
  { id: 8, src: "/image 8.png" },
  { id: 9, src: "/image 9.jpg" },
  { id: 10, src: "/image 10.jpg" },
  { id: 11, src: "/image 11.jpg" },
  { id: 12, src: "/image 12.jpeg" },
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
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
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Title */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Our Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of precious moments and memories, each one telling a
            story of love. (WE NEED MORE PICS TOGETHER CUTUUUUUU)
          </p>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <div className="relative w-full h-auto bg-muted overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-serif text-lg">
                      Click to enlarge
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative bg-card rounded-2xl overflow-hidden">
              <img
                src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                className="w-full h-auto"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={goToPrevious}
                className="text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <p className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>

              <button
                onClick={goToNext}
                className="text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Image Caption */}
            <p className="text-white text-center mt-4 text-sm">
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
