# McWoyage

A personal travel and outdoor adventure website documenting the walking trips of Fiona McKinney and Karol Wojasz. The site covers New Zealand's Great Walks, North Island and South Island tramping tracks, and international walking trips across Europe.

Built with Next.js 14 (App Router), MongoDB, and Tailwind CSS.

---

## Features

- **Great Walks** — New Zealand's iconic multi-day tracks
- **North Island** — NI tramping and walking trips
- **South Island** — SI tramping, with a focus on Fiordland and Southland
- **Overseas** — European adventures including Scotland, Poland, and Italy
- Per-trip detail pages with day-by-day photo galleries, embedded maps, and video links
- Flip card trip listings with location, date, duration, distance, cost, and difficulty
- Markdown-rendered trip descriptions
- Embedded Google Maps with links to journal, photos, video, and GPX track

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | MongoDB via Mongoose |
| Styling | Tailwind CSS |
| Icons | react-icons (Ionicons 5) |
| Markdown | react-markdown + remark-gfm + rehype-raw |
| Font | Josefin Sans (Google Fonts via next/font) |

---

## Project structure

```
app/
├── _components/       # Shared UI components
├── _config/           # MongoDB connection
├── _models/           # Mongoose models (GWTrip, NITrip, SITrip, OSTrip, ALLTrip)
├── _styles/           # Global CSS
├── api/               # REST API routes (used by external consumers)
├── greatwalks/        # Great Walks list + detail pages
├── north/             # North Island list + detail pages
├── south/             # South Island list + detail pages
├── overseas/          # Overseas trips list + detail pages
└── [id]/              # Top-level redirect for ALL trip entries
```

---

## Getting started

### Prerequisites

- Node.js 18+
- A running MongoDB instance (local or Atlas)

### Installation

```bash
git clone https://github.com/your-username/mcwoyage.git
cd mcwoyage
npm install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/mcwoyage
NEXT_PUBLIC_API_DOMAIN=http://localhost:3000/api
```

### Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for production

```bash
npm run build
npm start
```

---

## Data models

Each section of the site has its own Mongoose model with a consistent shape:

- **`card`** — image, title, slogan, comment, and icon metadata (location, date, duration, distance, cost, level)
- **`gallery_header`** — hero image, title, and text colour for the detail page header
- **`introduction`** — title, markdown text, and intro gallery images
- **`days`** — array of day entries, each with title, date, markdown comment, images, and optional video links
- **`map`** — embedded Google Maps iframe src plus optional links to journal, photos, video, and GPX track

---

## Deployment

The easiest way to deploy is via [Vercel](https://vercel.com). Connect your repository and add the environment variables above in the Vercel project settings.

Make sure `MONGODB_URI` points to a MongoDB Atlas cluster (or another externally accessible instance) — a local database will not be reachable from Vercel's servers.