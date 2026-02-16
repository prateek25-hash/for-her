// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Heart, MessageCircle, X } from "lucide-react"

// interface ChatMessage {
//   id: number
//   sender: "you" | "them"
//   message: string
//   time: string
// }

// interface Memory {
//   id: number
//   date: string
//   title: string
//   messages: ChatMessage[]
//   highlight: string
// }

// const memories: Memory[] = [
//   {
//     id: 1,
//     date: "March 15, 2024",
//     title: "Late Night Conversations",
//     highlight: "When you made me smile at midnight",
//     messages: [
//       { id: 1, sender: "them", message: "Can't sleep, thinking about you", time: "11:45 PM" },
//       { id: 2, sender: "you", message: "Me too, what's on your mind?", time: "11:47 PM" },
//       { id: 3, sender: "them", message: "Everything reminds me of you lately", time: "11:50 PM" },
//       { id: 4, sender: "you", message: "That's the sweetest thing I've heard 💕", time: "11:52 PM" },
//     ],
//   },
//   {
//     id: 2,
//     date: "February 28, 2024",
//     title: "Morning Coffee & Love",
//     highlight: "Our perfect morning started with your message",
//     messages: [
//       { id: 1, sender: "them", message: "Good morning, beautiful 🌅", time: "7:30 AM" },
//       { id: 2, sender: "you", message: "Good morning! Already missing you", time: "7:32 AM" },
//       { id: 3, sender: "them", message: "I'll be there in an hour. Let's get coffee", time: "7:35 AM" },
//       { id: 4, sender: "you", message: "Can't wait to see you ❤️", time: "7:36 AM" },
//     ],
//   },
//   {
//     id: 3,
//     date: "January 14, 2024",
//     title: "First 'I Love You'",
//     highlight: "The moment everything changed forever",
//     messages: [
//       { id: 1, sender: "you", message: "I need to tell you something", time: "9:15 PM" },
//       { id: 2, sender: "them", message: "Okay, I'm listening 💭", time: "9:16 PM" },
//       { id: 3, sender: "you", message: "I'm in love with you. Completely.", time: "9:18 PM" },
//       { id: 4, sender: "them", message: "I love you too. More than you know 💕", time: "9:20 PM" },
//     ],
//   },
//   {
//     id: 4,
//     date: "December 25, 2023",
//     title: "Christmas Morning Wishes",
//     highlight: "Waking up to your love on Christmas",
//     messages: [
//       { id: 1, sender: "them", message: "Merry Christmas, my love! 🎄", time: "8:00 AM" },
//       { id: 2, sender: "you", message: "Merry Christmas! You're my best gift 💝", time: "8:02 AM" },
//       { id: 3, sender: "them", message: "Forever grateful for you in my life", time: "8:05 AM" },
//       { id: 4, sender: "you", message: "Here's to many more Christmases together ✨", time: "8:07 AM" },
//     ],
//   },
// ]

// export default function MemoriesPage() {
//   const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-accent">
//       {/* Header Navigation */}
//       <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//         <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
//           <Link href="/" className="font-serif text-2xl font-bold text-primary">
//             For Her, With Love
//           </Link>
//           <div className="flex items-center gap-8">
//             <Link href="/letters" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
//               Letters
//             </Link>
//             <Link href="/gallery" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
//               Gallery
//             </Link>
//             <Link href="/playlist" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
//               Playlist
//             </Link>
//             <Link href="/memories" className="text-primary transition-colors text-sm font-medium">
//               Memories
//             </Link>
//             <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
//               About
//             </Link>
//           </div>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           {/* Page Header */}
//           <div className="text-center mb-16 space-y-4">
//             <div className="flex justify-center mb-4">
//               <MessageCircle className="w-16 h-16 text-primary fill-primary" />
//             </div>
//             <h1 className="font-serif text-5xl md:text-6xl text-foreground">Our Precious Moments</h1>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Conversations that made my heart skip a beat. Messages close to my heart. Every word, a memory forever.
//             </p>
//           </div>

//           {/* Memories Grid */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {memories.map((memory) => (
//               <div
//                 key={memory.id}
//                 onClick={() => setSelectedMemory(memory)}
//                 className="group cursor-pointer bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="flex items-start justify-between mb-4">
//                   <div>
//                     <p className="text-sm text-muted-foreground mb-2">{memory.date}</p>
//                     <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors">
//                       {memory.title}
//                     </h3>
//                   </div>
//                   <Heart className="w-6 h-6 text-primary/60 group-hover:text-primary group-hover:fill-primary transition-all" />
//                 </div>

//                 <p className="text-foreground/80 italic mb-6">"{memory.highlight}"</p>

//                 {/* Preview of Messages */}
//                 <div className="space-y-3 mb-6">
//                   {memory.messages.slice(0, 2).map((msg) => (
//                     <div key={msg.id} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
//                       <div
//                         className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
//                           msg.sender === "you"
//                             ? "bg-primary text-primary-foreground"
//                             : "bg-secondary text-secondary-foreground"
//                         }`}
//                       >
//                         {msg.message}
//                       </div>
//                     </div>
//                   ))}
//                   {memory.messages.length > 2 && (
//                     <p className="text-sm text-muted-foreground italic text-center">
//                       +{memory.messages.length - 2} more messages...
//                     </p>
//                   )}
//                 </div>

//                 <button className="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors">
//                   Read Full Conversation
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>

//       {/* Full Conversation Modal */}
//       {selectedMemory && (
//         <div
//           className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//           onClick={() => setSelectedMemory(null)}
//         >
//           <div
//             className="bg-background rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border shadow-xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 bg-background/95 backdrop-blur border-b border-border p-8 flex items-center justify-between">
//               <div>
//                 <p className="text-sm text-muted-foreground mb-2">{selectedMemory.date}</p>
//                 <h2 className="font-serif text-3xl text-foreground">{selectedMemory.title}</h2>
//               </div>
//               <button
//                 onClick={() => setSelectedMemory(null)}
//                 className="p-2 hover:bg-secondary rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-8">
//               <p className="text-lg text-foreground/80 italic mb-8">"{selectedMemory.highlight}"</p>

//               {/* Full Conversation */}
//               <div className="space-y-4">
//                 {selectedMemory.messages.map((msg) => (
//                   <div key={msg.id} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
//                     <div className="flex flex-col max-w-xs">
//                       <div
//                         className={`px-6 py-3 rounded-3xl ${
//                           msg.sender === "you"
//                             ? "bg-primary text-primary-foreground rounded-br-sm"
//                             : "bg-secondary text-secondary-foreground rounded-bl-sm"
//                         }`}
//                       >
//                         <p className="text-sm">{msg.message}</p>
//                       </div>
//                       <span
//                         className={`text-xs text-muted-foreground mt-1 ${msg.sender === "you" ? "text-right" : "text-left"}`}
//                       >
//                         {msg.time}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Close Button */}
//               <button
//                 onClick={() => setSelectedMemory(null)}
//                 className="w-full mt-8 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       <footer className="bg-secondary/50 border-t border-border py-8 px-6">
//         <div className="max-w-7xl mx-auto text-center">
//           <p className="text-muted-foreground text-sm">These moments, forever treasured in my heart</p>
//           <p className="text-muted-foreground text-xs mt-2">
//             Every message is a memory, every conversation a piece of forever
//           </p>
//         </div>
//       </footer>
//     </div>
//   )
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/convo 1.png",
  },
  { id: 2, src: "/convo 3.jpg" },
  { id: 3, src: "/convo 2.png" },
  { id: 4, src: "/convo 4.jpg" },
  { id: 5, src: "/convo 5.png" },
  { id: 6, src: "/convo 6.png" },
  { id: 7, src: "/convo 7.png" },
  { id: 8, src: "/convo 8.png" },
  { id: 9, src: "/convo 9.png" },
  { id: 10, src: "/convo 10.png" },
  { id: 11, src: "/convo 11.png" },
  { id: 12, src: "/convo 12.png" },
  { id: 13, src: "/convo 13.png" },
  { id: 14, src: "/convo 14.png" },
  { id: 15, src: "/convo 15.jpg" },
  { id: 16, src: "/convo 16.jpg" },
  { id: 17, src: "/convo 17.jpg" },
  { id: 18, src: "/convo 18.jpg" },
  { id: 19, src: "/convo 19.jpg" },
  { id: 20, src: "/convo 20.jpg" },
  { id: 21, src: "/convo 21.jpg" },
  { id: 22, src: "/convo 22.jpg" },
  { id: 23, src: "/convo 23.jpg" },
  { id: 24, src: "/convo 24.jpg" },
  { id: 25, src: "/convo 25.jpg" },
  { id: 26, src: "/convo 26.jpg" },
  { id: 27, src: "/convo 27.jpg" },
  { id: 28, src: "/convo 28.jpg" },
  { id: 29, src: "/convo 29.jpg" },
  { id: 30, src: "/convo 30.jpg" },
  { id: 31, src: "/31.jpg" },
  { id: 32, src: "/32.jpg" },
  { id: 33, src: "/33.jpg" },
  { id: 34, src: "/34.jpg" },
  { id: 35, src: "/35.jpg" },
  { id: 36, src: "/36.jpg" },
  { id: 37, src: "/37.jpg" },
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
      {/* Page Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="flex justify-center mb-4">
          <MessageCircle className="w-16 h-16 text-primary fill-primary" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground">
          Our Precious Moments
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conversations that made my heart skip a beat. Messages close to my
          heart. Every word, a memory forever.
        </p>
      </div>

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
          </div>
        </div>
      )}
    </div>
  );
}
