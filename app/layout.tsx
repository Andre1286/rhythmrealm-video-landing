import type { Metadata } from 'next'
import './globals.css'

// Content placeholders - update these as needed
const artistName = 'Andre Washington'
const projectName = 'Rhythm Realm'
const songTitle = 'Fractured Light'
const description = `Watch ${artistName}'s latest music video "${songTitle}" from ${projectName}. Discover more music on RhythmRealm.net.`

export const metadata: Metadata = {
  title: `${songTitle} | ${projectName} by ${artistName}`,
  description: description,
  keywords: ['music', 'video', 'Rhythm Realm', artistName, songTitle],
  authors: [{ name: artistName }],
  openGraph: {
    title: `${songTitle} | ${projectName}`,
    description: description,
    url: 'https://rhythmrealm.net',
    siteName: projectName,
    type: 'website',
    // TODO: Replace with actual OG image path once generated
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${songTitle} - ${projectName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${songTitle} | ${projectName}`,
    description: description,
    // TODO: Replace with actual Twitter image path once generated
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

