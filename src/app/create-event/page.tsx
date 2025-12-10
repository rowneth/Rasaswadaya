import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header variant="private" />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Create Event</h1>
        <p className="text-gray-400 mb-8">Host your own cultural show, concert, or festival.</p>
        <div className="p-8 border border-white/10 rounded-2xl bg-card max-w-md w-full">
          <p className="text-gray-500 mb-4">Event creation form coming soon...</p>
          <Link 
            href="/login"
            className="block w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-colors"
          >
            Login to Create Event
          </Link>
        </div>
        <Link href="/" className="mt-8 text-primary hover:text-primary-hover">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
