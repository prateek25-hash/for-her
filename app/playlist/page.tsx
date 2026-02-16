"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Heart, Music } from "lucide-react";

// Using free music URLs from open sources (Pixabay, etc.)
const playlist = [
  {
    id: 1,
    title: "Enchanted",
    artist: "Taylor Swift",
    duration: "5:53",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Dooron Dooron",
    artist: "Paresh Pahuja",
    duration: "5:32",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Kuch is Tarah",
    artist: "Atif Aslam",
    duration: "5:13",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Chaandaniya",
    artist: "Mohan Kannan, Yashita Sharma",
    duration: "4:07",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "The Fate of Ophelia",
    artist: "Taylor Swift",
    duration: "3:46",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 6,
    title: "Saathiya Tune Kya Kiya",
    artist: "S.P. Balasubrahmanyam, K.S. Chithra",
    duration: "5:10",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    id: 7,
    title: "Mann Mera",
    artist: "Gajendra Verma",
    duration: "3:48",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: 8,
    title: "About You",
    artist: "The 1975",
    duration: "5:26",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    id: 9,
    title: "I think They Call This Love",
    artist: "Matthew Ifield",
    duration: "3:16",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    id: 10,
    title: "Tum Ho",
    artist: "Mohit Chauhan",
    duration: "5:16",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
  {
    id: 11,
    title: "Love Story",
    artist: "Taylor Swift",
    duration: "3:56",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  },
  {
    id: 12,
    title: "Lover",
    artist: "Taylor Swift",
    duration: "3:43",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 13,
    title: "Hale Dil",
    artist: "Harshit Saxena",
    duration: "5:46",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 14,
    title: "Fearless",
    artist: "Taylor Swift",
    duration: "4:01",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 15,
    title: "Tum se hi",
    artist: "Mohit Chauhan",
    duration: "5:21",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 16,
    title: "Wo Lamhe wo Baatein",
    artist: "Atif Aslam",
    duration: "5:20",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 17,
    title: "So High School",
    artist: "Taylor Swift",
    duration: "3:48",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 18,
    title: "Paper Rings",
    artist: "Taylor Swift",
    duration: "3:42",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 19,
    title: "Dewaana Kar Raha Hai",
    artist: "Javed Ali",
    duration: "5:38",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 20,
    title: "You Belong With Me",
    artist: "Taylor Swift",
    duration: "3:51",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 21,
    title: "Back to Friends",
    artist: "Sombr",
    duration: "3:19",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 22,
    title: "Willow",
    artist: "Taylor Swift",
    duration: "3:34",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 23,
    title: "August",
    artist: "Taylor Swift",
    duration: "4:21",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 24,
    title: "Love Me Not",
    artist: "Ravyn Lenae",
    duration: "3:33",
    url: "https://youtu.be/cswfR85D7jM?si=2H8fXwz8NzTyasOB",
  },
  {
    id: 25,
    title: "Opalite",
    artist: "Taylor Swift",
    duration: "3:55",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 26,
    title: "Made in Japan",
    artist: "Buck Owens",
    duration: "2:43",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 27,
    title: "Invisible String",
    artist: "Taylor Swift",
    duration: "4:12",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 28,
    title: "Back to December",
    artist: "Taylor Swift",
    duration: "4:54",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 29,
    title: "Last Kiss",
    artist: "Taylor Swift",
    duration: "6:09",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
  {
    id: 30,
    title: "Tu Chaiye",
    artist: "Atif Aslam",
    duration: "4:32",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  },
];

export default function PlaylistPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentTrack].url;
    audio.volume = volume;

    if (isPlaying) {
      audio.play().catch((err) => console.log("[v0] Playback error:", err));
    }

    return () => {
      audio.pause();
    };
  }, [currentTrack, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.log("[v0] Playback error:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  };

  const handleEnded = () => {
    playNext();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const playPrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        crossOrigin="anonymous"
      />

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
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Songs for You
          </h1>
          <p className="text-muted-foreground">
            A carefully curated playlist of songs that capture the essence of
            love. (WE WILL ADD MORE SONGS AS WE DISCOVER NEW FAVS TOGETHER CUTUUUUU)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Playlist */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Playlist
            </h3>
            <div className="space-y-3">
              {playlist.map((song, index) => (
                <div
                  key={song.id}
                  className={`group p-4 rounded-xl border transition-all duration-300 cursor-pointer ${index === currentTrack
                    ? "bg-primary/10 border-primary shadow-md"
                    : "bg-card border-border hover:bg-secondary/50 hover:border-primary/50"
                    }`}
                  onClick={() => playTrack(index)}
                >
                  <div className="flex items-center justify-between">
                    {/* Left Side */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Play Icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {index === currentTrack && isPlaying ? (
                          <Music className="w-5 h-5 text-primary animate-pulse" />
                        ) : (
                          <span className="text-sm text-muted-foreground font-medium">
                            {index + 1}
                          </span>
                        )}
                      </div>

                      {/* Song Info */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-foreground truncate">
                          {song.title}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                      {/* Duration */}
                      <span className="text-sm text-muted-foreground font-medium">
                        {song.duration}
                      </span>

                      {/* Heart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(song.id);
                        }}
                        className="text-foreground hover:text-primary transition-colors p-2 hover:bg-foreground/5 rounded-lg"
                        aria-label="Add to favorites"
                      >
                        <Heart
                          className={`w-5 h-5 ${favorites.includes(song.id)
                            ? "fill-primary text-primary"
                            : ""
                            }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
