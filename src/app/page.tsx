'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, ArrowUpRight, CreditCard, Calendar, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-12 pb-20 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                The Biggest <br />
                <span className="text-primary">Cultural Events</span> <br />
                of the year
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                Discover the rhythm of Sri Lanka. From university festivals to grand musical concerts, find your vibe here.
              </p>
              <Link 
                href="/explore"
                className="inline-block px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25"
              >
                Explore Events
              </Link>
            </div>
            
            <div className="relative">
              {/* Abstract Shapes */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-20"></div>
              
              {/* Hero Image */}
              <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/5] relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop" 
                    alt="Concert Crowd"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-yellow-400 w-16 h-16 rounded-2xl rotate-12 opacity-80"></div>
                <div className="absolute bottom-12 left-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                    <p className="text-white font-bold">Live Now</p>
                    <p className="text-xs text-gray-300">Colombo, LK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-primary py-20 px-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Create Your Online <br />
                Event Only 5 Minute
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Create Your Event</h3>
                <p className="text-white/80 leading-relaxed">
                  Host your cultural show, concert or uni fest. Get your crowd hyped and sell tickets like a boss.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowUpRight className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Multiple Events</h3>
                <p className="text-white/80 leading-relaxed">
                  From baila nights to dance battles. Find every vibe happening across the island, all in one spot.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Easy To Join</h3>
                <p className="text-white/80 leading-relaxed">
                  Book tickets quick, get updates fast, and never miss the hottest events in town.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-12">Our Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Placeholders for Logos */}
              {['UOC Arts', 'MoraSpirit', 'Japura Flames', 'Kelaniya Vibes', 'Red Bull'].map((partner, i) => (
                <div key={i} className="flex items-center justify-center h-12">
                  <span className="text-xl font-bold text-white">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Listing Section */}
        <section className="py-16 px-6 bg-[#050511]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Trusted by</h2>
              <h2 className="text-3xl font-bold text-white">Thousand of Events</h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12">
              {['All', 'Music', 'Dance', 'Theatre', 'University', 'Festivals'].map((filter, i) => (
                <button 
                  key={filter}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {events.map((event, i) => (
                <div key={i} className="group bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-white border border-white/10">
                      {event.price}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{event.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </div>
                    <button className="text-sm text-white/60 hover:text-primary transition-colors font-medium">
                      See More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/explore"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-bold transition-all shadow-lg shadow-primary/25"
              >
                See More
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

const events = [
  {
    title: "Ridma Weera 2025 - University of Colombo",
    date: "Mon, Oct 25, 6:30 PM",
    location: "Nelum Pokuna, Colombo",
    price: "LKR 1500",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e3726?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Talents of Japura - Annual Talent Show",
    date: "Fri, Nov 12, 5:00 PM",
    location: "University Grounds",
    price: "Free",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Traditional Dance Night - Kandy",
    date: "Sat, Dec 05, 7:00 PM",
    location: "Kandy City Centre",
    price: "LKR 2000",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Baila Night with Marians",
    date: "Sun, Dec 10, 8:00 PM",
    location: "Galle Face Green",
    price: "LKR 1000",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Drama Festival 2025",
    date: "Wed, Oct 28, 4:30 PM",
    location: "Lionel Wendt Theatre",
    price: "LKR 800",
    image: "https://images.unsplash.com/photo-1503095392213-2e6d338dbbf0?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Freshers' Night - UOM",
    date: "Fri, Nov 20, 9:00 PM",
    location: "University of Moratuwa",
    price: "Students Only",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Sarasavi Gee Sisila",
    date: "Sat, Nov 28, 6:00 PM",
    location: "BMICH, Colombo",
    price: "LKR 2500",
    image: "https://images.unsplash.com/photo-1459749411177-2a296581dca5?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Street Food & Music Festival",
    date: "Sun, Dec 15, 10:00 AM",
    location: "Viharamahadevi Park",
    price: "Free Entry",
    image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=800&auto=format&fit=crop"
  }
];
