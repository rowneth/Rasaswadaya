'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Music, User, Users, Video, Facebook, Instagram, Youtube } from 'lucide-react';

type UserType = 'user' | 'artist';
type ArtistType = 'musician' | 'dancer';
type SubCategory = 'solo' | 'group' | 'band';

export default function SignupPage() {
  const [userType, setUserType] = useState<UserType>('user');
  const [showPassword, setShowPassword] = useState(false);
  
  // Artist specific states
  const [artistType, setArtistType] = useState<ArtistType>('musician');
  const [subCategory, setSubCategory] = useState<SubCategory>('solo');

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-2xl bg-card rounded-3xl p-8 shadow-2xl border border-white/5">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-400">Join the Rasasvadya community today</p>
        </div>

        {/* User Type Toggle */}
        <div className="flex p-1 bg-input-bg rounded-full mb-8 relative">
          <div 
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-all duration-300 ease-in-out ${userType === 'artist' ? 'left-[calc(50%+2px)]' : 'left-1'}`}
          />
          <button
            onClick={() => setUserType('user')}
            className={`flex-1 relative z-10 py-3 text-sm font-medium transition-colors duration-300 ${userType === 'user' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Normal User
          </button>
          <button
            onClick={() => setUserType('artist')}
            className={`flex-1 relative z-10 py-3 text-sm font-medium transition-colors duration-300 ${userType === 'artist' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Artist
          </button>
        </div>

        <form className="space-y-6">
          {/* Common Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Age</label>
              <input 
                type="number" 
                className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="25"
              />
            </div>
          </div>

          {userType === 'user' ? (
            /* Normal User Specific Fields */
            <>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Address</label>
                <input 
                  type="text" 
                  className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Colombo, Sri Lanka"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Personal Preferences <span className="text-xs text-gray-500">(Select all that apply)</span></label>
                <div className="grid grid-cols-2 gap-3">
                  {['Music', 'Dance', 'Theatre', 'Festivals', 'Cultural', 'University Events'].map((pref) => (
                    <label key={pref} className="flex items-center space-x-3 p-3 bg-input-bg border border-input-border rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-primary focus:ring-primary bg-transparent" />
                      <span className="text-sm text-gray-300">{pref}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">* You can change these later in your profile</p>
              </div>
            </>
          ) : (
            /* Artist Specific Fields */
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">NIC Number</label>
                  <input 
                    type="text" 
                    className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="123456789V"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="artist@example.com"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm text-gray-400">Artist Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setArtistType('musician')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${artistType === 'musician' ? 'bg-primary/20 border-primary text-white' : 'bg-input-bg border-input-border text-gray-400 hover:border-gray-500'}`}
                  >
                    <Music className="w-6 h-6" />
                    <span>Musician</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setArtistType('dancer')}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${artistType === 'dancer' ? 'bg-primary/20 border-primary text-white' : 'bg-input-bg border-input-border text-gray-400 hover:border-gray-500'}`}
                  >
                    <Users className="w-6 h-6" />
                    <span>Dancer</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Category</label>
                <div className="flex bg-input-bg rounded-xl p-1">
                  {(['solo', 'group', 'band'] as SubCategory[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSubCategory(cat)}
                      className={`flex-1 py-2 text-sm rounded-lg capitalize transition-all ${subCategory === cat ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm text-gray-400">Social Links</label>
                <div className="space-y-3">
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-500">
                      <Video className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-input-bg border border-input-border rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="TikTok Profile URL"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-500">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-input-bg border border-input-border rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Instagram Profile URL"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-500">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-input-bg border border-input-border rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Facebook Profile URL"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-gray-500">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <input 
                      type="text" 
                      className="w-full bg-input-bg border border-input-border rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="YouTube Channel URL"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Password Field (Common) */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full bg-input-bg border border-input-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Create a password"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
          >
            Create Account
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:text-primary-hover font-medium transition-colors">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
