import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://app.hotspringmaps.com'),
  title: 'HotSpringMaps.com — Find, Share & Soak',
  description:
    'Discover natural hot springs around the world. Plan trips, read reviews, and connect with the soaking community.',
  openGraph: {
    title: 'HotSpringMaps.com — Find, Share & Soak',
    description:
      'Discover natural hot springs around the world. Plan trips, read reviews, and connect with the soaking community.',
    type: 'website',
    url: 'https://app.hotspringmaps.com',
    siteName: 'HotSpringMaps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HotSpringMaps.com — Find, Share & Soak',
    description:
      'Discover natural hot springs around the world. Plan trips, read reviews, and connect with the soaking community.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {/* Header appears on every page */}
        <Header />

        {/* Main page content area */}
        <main className="container py-10">{children}</main>

        {/* Footer appears site-wide */}
        <Footer />
      </body>
    </html>
  )
}
