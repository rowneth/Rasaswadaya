import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-card/50 border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/signup" className="hover:text-white transition-colors">Sign Up</Link>
        </div>
        <div className="text-xs text-gray-600">
          © 2025 Rasaswadaya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
