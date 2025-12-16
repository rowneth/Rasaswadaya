"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    title: "සිංහබාහු",
    date: "Dec 18, 2025",
    time: "6:30 PM",
    venue: "Lionel Wendt, Colombo 7",
    image: "https://lh5.googleusercontent.com/proxy/k7PlYmqTzYhGuxY4dfMZPYW-UuomGetxxRbNbR99livcJasWT8xEdCOtQZfd6lUAjFrgf-e0CUEJL7EH2eAWeB97W9_Iy0bpJ7whS4l3xNzKJ_wi3udS",
    link: "/events/sinha-bahu-1",
    category: "Drama"
  },
  {
    id: 2,
    title: "Rhythm of the Dance",
    date: "Dec 20, 2025",
    time: "7:00 PM",
    venue: "Nelum Pokuna, Colombo 7",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2938&auto=format&fit=crop", // Placeholder
    link: "/events/rhythm-dance-2",
    category: "Dance"
  },
  {
    id: 3,
    title: "Classical Sitar Recital",
    date: "Dec 22, 2025",
    time: "6:00 PM",
    venue: "Bishop's College Auditorium",
    image: "https://viewcy-heroku-production.s3.amazonaws.com/courses/featured_images/000/011/938/original/Deepshankar.jpeg?1710723270",
    link: "/events/sitar-recital-3",
    category: "Music"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg shadow-brand-500/10 group">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider mb-4">
              {slide.category}
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight max-w-3xl font-sinhala">
              {slide.title}
            </h2>
            
            <div className="flex flex-wrap gap-6 text-sm lg:text-base text-slate-200 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-400" />
                <span>{slide.date} • {slide.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-400" />
                <span>{slide.venue}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link 
                href={slide.link}
                className="bg-brand-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30"
              >
                View Event
              </Link>
              <Link 
                href="/events"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors"
              >
                See All Events
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-brand-600 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-brand-600 transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? "bg-brand-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
