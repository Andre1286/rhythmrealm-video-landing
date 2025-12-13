# Rhythm Realm Video Landing Page

A production-ready, modern music landing page built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion. Designed to drive traffic to RhythmRealm.net with a featured YouTube video and strong CTAs.

## Features

- 🎬 Featured YouTube video embed (privacy-enhanced with youtube-nocookie.com)
- 🎨 Modern, cinematic, clean design
- 📱 Fully responsive and mobile-first
- ⚡ Fast and optimized with Next.js App Router
- 🔍 SEO optimized with metadata and JSON-LD schema
- ♿ Accessible with semantic HTML and ARIA labels
- 🎭 Smooth animations with Framer Motion

## Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Update content placeholders:**
   - Open `app/page.tsx`
   - Edit the content placeholders at the top of the file:
     - `artistName`
     - `projectName`
     - `headline`
     - `songTitle`
     - `youtubeVideoId` (replace with your actual YouTube video ID)
     - `rhythmRealmUrl`
     - `socialLinks` (update with your actual social media URLs)

3. **Update SEO metadata:**
   - Open `app/layout.tsx`
   - Update the metadata object with your specific information
   - Replace `/og.png` with your actual Open Graph image path (or generate one)

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure environment variables (if needed):**
   - Add any environment variables in the Vercel dashboard
   - Redeploy if necessary

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to your Vercel account
   - Confirm project settings
   - Deploy!

### Post-Deployment Checklist

- [ ] Update `youtubeVideoId` in `app/page.tsx` with your actual video ID
- [ ] Update social media URLs in `app/page.tsx`
- [ ] Create and upload an Open Graph image (`/public/og.png`)
- [ ] Test all links and CTAs
- [ ] Verify SEO metadata in the deployed version
- [ ] Test on mobile devices
- [ ] Verify analytics tracking (if added)

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx        # Main landing page component
│   └── globals.css     # Global styles with Tailwind
├── public/             # Static assets (add og.png here)
├── next.config.js      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## Customization

### Content
All content placeholders are at the top of `app/page.tsx` for easy editing.

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline Tailwind classes in `app/page.tsx`

### SEO
- Metadata: `app/layout.tsx`
- JSON-LD Schema: Embedded in `app/page.tsx`

## Technologies

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library

## License

MIT

---

Built with ❤️ for Rhythm Realm

