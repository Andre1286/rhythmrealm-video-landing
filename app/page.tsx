'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// ============================================================================
// CONTENT PLACEHOLDERS - Edit these values at the top of this file
// ============================================================================
const artistName = 'Andre Washington'
const projectName = 'Rhythm Realm'
const headline = 'Watch the latest video'
const songTitle = 'Fractured Light'
const youtubeVideoId = 'qG1xjRuh8yY'
const rhythmRealmUrl = 'https://RhythmRealm.net'
const utm = '?utm_source=vercel_landing&utm_medium=landing_page&utm_campaign=music_video'

// Social media URLs
const socialLinks = {
  youtube: 'https://youtu.be/qG1xjRuh8yY',
  instagram: 'https://www.instagram.com/andredeewashington/',
  facebook: 'https://www.facebook.com/andre.d.washington',
  x: 'https://x.com/AndreWa44970640',
} as const

// What you'll get bullets
const benefits = [
  'Exclusive music releases and early access',
  'High-quality audio and video content',
  'Direct connection with the artist',
  'Latest updates and behind-the-scenes content',
  'Join a community of music lovers',
]

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

// YouTube embed component
function YouTubeEmbed({ videoId }: { videoId: string }) {
  if (!videoId || videoId === 'YOUR_YOUTUBE_VIDEO_ID') {
    return (
      <div className="w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">Replace youtubeVideoId with your actual YouTube video ID</p>
      </div>
    )
  }

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-2xl">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={`${songTitle} - ${projectName}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
        aria-label={`${songTitle} music video`}
      />
    </div>
  )
}

// Social icon component
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center text-white hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
    >
      {children}
    </a>
  )
}

export default function Home() {
  const ctaUrl = `${rhythmRealmUrl}${utm}`

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MusicRecording',
        '@id': `${rhythmRealmUrl}/#music`,
        name: songTitle,
        byArtist: {
          '@type': 'Person',
          name: artistName,
        },
        inAlbum: {
          '@type': 'MusicAlbum',
          name: projectName,
        },
        url: rhythmRealmUrl,
      },
      {
        '@type': 'VideoObject',
        '@id': `${rhythmRealmUrl}/#video`,
        name: `${songTitle} - ${projectName}`,
        description: `Watch ${artistName}'s latest music video "${songTitle}" from ${projectName}.`,
        thumbnailUrl: `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`,
        uploadDate: new Date().toISOString(),
        contentUrl: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${youtubeVideoId}`,
      },
    ],
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen flex flex-col">
        {/* Top Bar */}
        <header className="w-full border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <h1 className="text-xl md:text-2xl font-bold text-white">
                {projectName}
              </h1>
              <Link
                href={ctaUrl}
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm md:text-base"
              >
                Go to RhythmRealm.net
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-2">
              {songTitle}
            </p>
            <p className="text-base md:text-lg text-gray-400">
              by {artistName}
            </p>
          </motion.div>
        </section>

        {/* Featured Video */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <YouTubeEmbed videoId={youtubeVideoId} />
          </motion.div>
        </section>

        {/* Primary CTA Block */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Discover More Music
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Explore the full collection of music and exclusive content on RhythmRealm.net
            </p>
            <Link
              href={ctaUrl}
              className="inline-block px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg md:text-xl rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105"
            >
              Visit RhythmRealm.net
            </Link>
          </motion.div>
        </section>

        {/* What you'll get */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-gray-900/30">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ ...fadeInUp.transition, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
              What you&apos;ll get
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-start"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Social Links */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 1.2 }}
            className="flex justify-center items-center gap-4"
          >
            <SocialIcon href={socialLinks.youtube} label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href={socialLinks.instagram} label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
              </svg>
            </SocialIcon>
            <SocialIcon href={socialLinks.facebook} label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/>
              </svg>
            </SocialIcon>
            <SocialIcon href={socialLinks.x} label="X (Twitter)">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialIcon>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 border-t border-gray-800 mt-auto">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 1.4 }}
            className="text-center space-y-4"
          >
            <p className="text-gray-400">
              Discover more on RhythmRealm.net — Thank you for listening.
            </p>
            <p className="text-gray-500 text-sm">
              #RhythmRealmNet
            </p>
          </motion.div>
        </footer>
      </div>
    </>
  )
}

