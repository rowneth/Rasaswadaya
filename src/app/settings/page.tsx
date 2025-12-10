'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Camera, Edit2, Music, Users, Video, Facebook, Instagram, Youtube } from 'lucide-react';

type UserType = 'user' | 'artist';

export default function SettingsPage() {
  const [userType, setUserType] = useState<UserType>('user');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Account Settings</h1>
          
          {/* Dev Toggle */}
          <div className="flex bg-input-bg rounded-lg p-1">
            <button
              onClick={() => setUserType('user')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${userType === 'user' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            >
              View as User
            </button>
            <button
              onClick={() => setUserType('artist')}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${userType === 'artist' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            >
              View as Artist
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Picture Section */}
          <section className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-white/5">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Don" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-primary rounded-full text-white shadow-lg hover:bg-primary-hover transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-white mb-1">Profile Picture</h3>
              <p className="text-sm text-gray-400 mb-4">File format (PNG, JPEG, SVG)</p>
              <button className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors">
                Change Profile Picture
              </button>
            </div>
          </section>

          {/* Basic Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {/* Username */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-base font-medium text-white">Username</label>
                <button className="text-sm text-primary hover:text-primary-hover">Change username</button>
              </div>
              <p className="text-sm text-gray-400 mb-2">Change your username</p>
              <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                Jaludetya
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-base font-medium text-white">Email</label>
                <button className="text-sm text-primary hover:text-primary-hover">Change email</button>
              </div>
              <p className="text-sm text-gray-400 mb-2">Change your email here</p>
              <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                jalubold@gmail.com
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-base font-medium text-white">Password</label>
                <button className="text-sm text-primary hover:text-primary-hover">Change password</button>
              </div>
              <p className="text-sm text-gray-400 mb-2">Change password</p>
              <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white tracking-widest">
                ••••••
              </div>
            </div>

            {/* Age (Common) */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-base font-medium text-white">Age</label>
                <button className="text-sm text-primary hover:text-primary-hover">Edit</button>
              </div>
              <p className="text-sm text-gray-400 mb-2">Your age</p>
              <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                24
              </div>
            </div>
          </div>

          {/* User Specific Settings */}
          {userType === 'user' && (
            <div className="pt-8 border-t border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Personal Details</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-base font-medium text-white">Address</label>
                    <button className="text-sm text-primary hover:text-primary-hover">Edit</button>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Your residential address</p>
                  <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                    123, Temple Road, Colombo 07
                  </div>
                </div>

                <div className="space-y-2 lg:col-span-2">
                  <div className="flex justify-between">
                    <label className="text-base font-medium text-white">Preferences</label>
                    <button className="text-sm text-primary hover:text-primary-hover">Edit Preferences</button>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Your interests</p>
                  <div className="flex flex-wrap gap-2">
                    {['Music', 'Cultural Events', 'Festivals'].map((pref) => (
                      <span key={pref} className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm">
                        {pref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Artist Specific Settings */}
          {userType === 'artist' && (
            <div className="pt-8 border-t border-white/5">
              <h2 className="text-xl font-bold text-white mb-6">Artist Profile</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-base font-medium text-white">NIC Number</label>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">National Identity Card</p>
                  <div className="bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-gray-400 cursor-not-allowed">
                    199912345678
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-base font-medium text-white">Artist Type</label>
                    <button className="text-sm text-primary hover:text-primary-hover">Edit</button>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Your performance category</p>
                  <div className="flex items-center gap-3 bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                    <Music className="w-4 h-4 text-primary" />
                    <span>Musician (Solo)</span>
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-2">
                  <div className="flex justify-between">
                    <label className="text-base font-medium text-white">Social Links</label>
                    <button className="text-sm text-primary hover:text-primary-hover">Update Links</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <span className="text-sm">@jaludetya_music</span>
                    </div>
                    <div className="flex items-center gap-3 bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <span className="text-sm">Jaludetya Official</span>
                    </div>
                    <div className="flex items-center gap-3 bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                      <Video className="w-5 h-5 text-white" />
                      <span className="text-sm">@jaludetya_tiktok</span>
                    </div>
                    <div className="flex items-center gap-3 bg-input-bg border border-white/5 rounded-xl px-4 py-3 text-white">
                      <Facebook className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Jaludetya Music</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
