import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="font-eb-garamond text-6xl lg:text-8xl mb-4">404</h2>
        <p className="font-inter text-base mb-8 text-gray-600">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="py-3 px-8 bg-black text-background rounded-full hover:opacity-85 transition duration-300 font-medium"
        >
          Return Home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
