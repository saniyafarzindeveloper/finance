'use client';

import Image from 'next/image';
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader2 } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Sign-In Section */}
      <div className="h-full flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2a2e47]">Welcome Back!!</h1>
          <p className='text-base text-[#7e8ca0]'>
            Log in or create new account to get back to your dasboard
          </p>
        </div>
        <div className="w-full max-w-md mt-6">
          <ClerkLoaded><SignIn path="/sign-in" /></ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin '/>
          </ClerkLoading>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="relative hidden lg:block h-full">
        <Image
          src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Nature background"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
