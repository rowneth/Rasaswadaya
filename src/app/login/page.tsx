'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md bg-white dark:bg-card rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-white/5 text-center">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Login</h1>
          <p className="text-gray-500 dark:text-gray-400">Login with your email account</p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2 text-left">
            <label className="text-sm text-gray-500 dark:text-gray-400 ml-1">Email address</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 dark:bg-[#2c2c2e] border border-gray-200 dark:border-[#3a3a3c] rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="name@example.com"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Login with email
          </button>

          <Link 
            href="/signup"
            className="block w-full bg-transparent border border-primary text-primary hover:bg-primary/10 font-bold py-3.5 rounded-xl transition-all"
          >
            Sign Up
          </Link>

          <div className="pt-4">
            <button type="button" className="text-foreground hover:text-primary transition-colors font-medium">
              Sign in manually
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
