# Sashank Badri Narayan — Portfolio

Personal portfolio for **Sashank Badri Narayan**, M.S. Computer Science @ NYU (May 2026).  
Built as a premium, production-quality engineering portfolio targeting Backend, Platform, Cloud, and Security roles.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion v12
- **Icons**: Lucide React
- **Fonts**: Geist Sans + Geist Mono (Google Fonts)

---

## Local Development

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/bsashank2710/sashank-portfolio.git
cd sashank-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Run production build locally |
| `npm run lint` | Run ESLint checks |

---

## Deployment (Vercel — Free)

This site is optimized for **zero-cost Vercel deployment**.

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app` within ~60 seconds.

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time — follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

No environment variables are required for the base portfolio.

If you add a contact form (Formspree, Resend, etc.), add your keys in the Vercel dashboard under **Settings → Environment Variables**.

### Custom Domain

1. In Vercel dashboard → **Settings → Domains**
2. Add your domain (e.g. `sashankbn.dev`)
3. Follow DNS configuration instructions for your registrar

---

## Project Structure

```
sashank-portfolio/
├── app/
│   ├── globals.css          # Design system, tokens, utilities
│   ├── layout.tsx           # Root layout, metadata, Open Graph
│   └── page.tsx             # Main page composition
├── components/
│   ├── ui/
│   │   └── SectionLabel.tsx # Reusable section header component
│   ├── Navbar.tsx           # Sticky nav with active section tracking
│   ├── Hero.tsx             # Full-screen hero with cursor spotlight
│   ├── About.tsx            # Bio, stats, education, work auth
│   ├── Experience.tsx       # Professional timeline
│   ├── Projects.tsx         # Featured + grid project case studies
│   ├── Skills.tsx           # Tech stack by category
│   ├── Certs.tsx            # Certifications & publication
│   ├── Resumes.tsx          # Tailored resume downloads
│   └── Contact.tsx          # Contact links + footer
├── lib/
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── public/
│   └── resumes/             # Place your PDF files here
│       ├── Sashank_SWE_SDE.pdf
│       ├── Sashank_AIML.pdf
│       ├── Sashank_DataScience.pdf
│       ├── Sashank_Cybersecurity.pdf
│       └── Sashank_Cloud_DevOps.pdf
└── vercel.json
```

---

## Adding Your Resume PDFs

Place your PDF files in `public/resumes/` with these exact names:

```
public/resumes/Sashank_SWE_SDE.pdf
public/resumes/Sashank_AIML.pdf
public/resumes/Sashank_DataScience.pdf
public/resumes/Sashank_Cybersecurity.pdf
public/resumes/Sashank_Cloud_DevOps.pdf
```

---

## Updating Content

All content is co-located with each component (no CMS or separate data file).  
Open the relevant component in `components/` and edit the data arrays at the top of each file.

| Section | File |
|---------|------|
| Hero copy | `components/Hero.tsx` |
| Bio, stats, education | `components/About.tsx` |
| Work experience | `components/Experience.tsx` |
| Projects | `components/Projects.tsx` |
| Skills | `components/Skills.tsx` |
| Certifications | `components/Certs.tsx` |
| Resume tracks | `components/Resumes.tsx` |
| Contact links | `components/Contact.tsx` |

---

## Performance

- **Static export** — fully prerendered, zero server runtime cost
- **Framer Motion** lazy-loaded per section via `useInView`
- **No canvas / WebGL** — background effects are pure CSS
- **Font display: swap** — no FOUT blocking
- Targets **Lighthouse 95+** on desktop

---

## License

Personal portfolio — all rights reserved.  
Design and code by Sashank Badri Narayan.
