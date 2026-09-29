# For Semim — a birthday site

A private, cinematic birthday website. Built with Next.js, TypeScript,
Tailwind CSS, and Framer Motion.

## 1. Run it

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. Changes you make to the
code will hot-reload automatically.

When you're happy with it and ready to deploy:

```bash
npm run build
npm start
```

## 2. Add your photos

Put your images in `public/photos/`, named to match what's already
referenced in `data/birthdayContent.ts`:

```
public/photos/
  photo01.jpg   → Hero section
  photo02.jpg   → Story, chapter 01
  photo03.jpg   → Story, chapter 02
  photo04.jpg   → Story, chapter 03
  photo05.jpg   → Story, chapter 04
  photo06.jpg – photo11.jpg → Memory Wall (6 photos)
  photo12.jpg   → Final reveal
  album-art.jpg → Our Song section
  secret.jpg    → the hidden reveal at the end of the secret game
```

The site currently ships with soft placeholder images in those exact
filenames, so it renders correctly out of the box — just overwrite each
file with your own photo of the same name. Any aspect ratio works, but
photos close to a 4:5 or square crop will look best. If you'd rather use
different filenames or add more, update the paths in
`data/birthdayContent.ts` to match.

## 3. Add your music

Drop your song in `public/music/our-song.mp3`. That's it — the player
in the "Our Song" section is already wired to that path. To use a
different filename, update `song.src` in `data/birthdayContent.ts`.

Music never autoplays — she has to press play herself.

## 4. Edit the personal messages

Everything you'd want to rewrite — both names, the intro lines, the
"Our Story" chapters, memory captions, the flip-card notes, the song
title/artist, the secret's hidden message, the letter, and the closing
lines — lives in one file:

```
data/birthdayContent.ts
```

Nothing else needs to change. Open that file, replace the placeholder
text (it's all in plain, labelled fields), save, and refresh.

A few things worth knowing:
- The **letter** (`letter.paragraphs`) is an array — each string
  becomes its own paragraph, so just add or remove entries as needed.
- The **secret game** hides five small symbols (a star, heart, moon,
  camera, and lock) across the page — in the Hero, Story, Memory Wall,
  Love Notes, and Music sections. Finding all five reveals the hidden
  message in `secret.revealText` and `secret.revealPhoto`. You can
  change how many symbols there are by editing `SECRET_IDS` in
  `components/SecretContext.tsx`, but five is a good number — enough
  to feel like a discovery, not a chore.
- The **time-based greeting** under the "Enter" button on the intro
  screen reads the visitor's own device clock — no setup needed.

## 5. Deploy it

The simplest option is [Vercel](https://vercel.com) (made by the
creators of Next.js) — it's free for a personal project like this:

1. Push this folder to a GitHub repository (keep it **private** if you
   don't want anyone stumbling onto it).
2. Go to vercel.com, sign in with GitHub, and import that repository.
3. Leave all settings on their defaults and click Deploy.
4. You'll get a private link (e.g. `for-semim.vercel.app`) to send her.

Alternatively, `npm run build` produces a production build you can host
anywhere that runs Node.js (Netlify, Render, your own server, etc.).

## Project structure

```
app/
  layout.tsx        → fonts, global page shell
  page.tsx           → assembles the whole experience, intro → final reveal
  globals.css         → grain overlay, paper texture, base styles

components/
  Intro.tsx            → the opening "I wanted to give you something..." sequence
  Hero.tsx              → "Some people enter your life..."
  Story.tsx              → the four-chapter cinematic timeline
  MemoryWall.tsx          → scattered clickable Polaroids
  LoveCards.tsx            → "Things I Never Say Enough" flip cards
  MusicPlayer.tsx           → "Our Song" audio player
  SecretGame.tsx             → the secret-discovery reveal section
  SecretContext.tsx           → the hidden-symbol game logic, shared across sections
  Letter.tsx                   → the handwritten letter
  FinalReveal.tsx                → the closing screen

data/
  birthdayContent.ts   → all personal text, dates, and photo/audio paths — edit this

public/
  photos/    → your images go here
  music/     → your song goes here
```

Everything respects `prefers-reduced-motion`, is keyboard-accessible,
and is built mobile-first since that's most likely how she'll open it.
