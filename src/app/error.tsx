'use strict'
'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-eb-garamond text-4xl lg:text-6xl mb-4">Something went wrong!</h2>
        <p className="font-libre-baskerville text-lg mb-8 text-gray-600">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="py-3 px-8 bg-black text-background rounded-full hover:opacity-85 transition duration-300 font-medium"
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  )
}
