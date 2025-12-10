import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Rasasvadya.lk</h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl">
        The ultimate Sri Lankan entertainment hub. Discover university events, cultural shows, musical concerts, and more.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/login"
          className="px-8 py-4 bg-card border border-white/10 hover:border-primary text-white rounded-xl font-bold transition-all hover:scale-105"
        >
          Login
        </Link>
        <Link 
          href="/signup"
          className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
}
