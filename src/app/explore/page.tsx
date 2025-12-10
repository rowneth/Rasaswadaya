import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Explore Events</h1>
        <p className="text-gray-400 mb-8">Discover all the amazing events happening around you.</p>
        <div className="p-8 border border-white/10 rounded-2xl bg-card">
          <p className="text-gray-500">Event listing functionality coming soon...</p>
        </div>
        <Link href="/" className="mt-8 text-primary hover:text-primary-hover">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
