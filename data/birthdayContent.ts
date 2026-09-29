// ─────────────────────────────────────────────────────────────────────────
// HIMSHIKHA'S BIRTHDAY
// ─────────────────────────────────────────────────────────────────────────

export const names = {
  her: "Himshi",
  me: "Kalparitam",
};

// ── Intro ───────────────────────────────────────────────────────────────
export const intro = {
  lineOne: "I wanted to give you something...",
  lineTwo: "...that could never fit into a message.",
  revealName: names.her,
  subline: "Happy Birthday, Himshikha.",
  enterLabel: "Enter my little universe",
};

// ── Hero ────────────────────────────────────────────────────────────────
export const hero = {
  statement: [
    "Some people take years to become important.",
    "You somehow did it in a little over a month.",
  ],
  paragraph:
    "We started talking on August 25th, and somewhere between all the conversations, laughs, random moments and little things, you became one of the most important people in my life.",
  photo: "/photos/photo01.jpeg",
};

// ── Our Story: cinematic chapters ───────────────────────────────────────
export type StoryChapter = {
  number: string;
  title: string;
  date: string;
  photo: string;
  text: string;
};

export const storyChapters: StoryChapter[] = [
  {
    number: "01",
    title: "A Match That Became Something More",
    date: "25 August 2026",
    photo: "/photos/photo02.jpeg",
    text:
      "We met on Hinge. It was supposed to be just another conversation, another person you might talk to for a while and eventually forget. But somehow, that didn't happen with us. We just kept talking, and without either of us really noticing, we became incredibly close.",
  },
  {
    number: "02",
    title: "Somewhere Along the Way",
    date: "August 2026",
    photo: "/photos/photo03.jpeg",
    text:
      "I don't think there was one particular moment when you suddenly became important to me. It happened quietly, in all the little conversations and random jokes and comfortable silences. One day I just realised that talking to you had become one of my favourite parts of my day.",
  },
  {
    number: "03",
    title: "That First Time We Met",
    date: "30 August 2026",
    photo: "/photos/photo04.jpeg",
    text:
      "Meeting you for the first time is one of those memories I know I'll keep for a very long time. There was something so strangely comfortable about being around you, like we had known each other for much longer than we actually had. And then there was us singing together — me playing the guitar while you sang Pehli Nazar Mein. I don't think you realised how special that moment felt to me.",
  },
  {
    number: "04",
    title: "And Then There Was Us",
    date: "September 2026",
    photo: "/photos/photo05.jpeg",
    text:
      "I don't know what the future has written for us. We're not dating, and maybe tomorrow, next month or next year will look completely different. But I do know what is true right now: you matter to me more than I know how to explain, and I'm incredibly grateful that somehow, out of all the people I could have met, I met you.",
  },
];

// ── Memory Wall ─────────────────────────────────────────────────────────
export type Memory = {
  photo: string;
  date: string;
  caption: string;
  note: string;
  rotate: number;
};

export const memories: Memory[] = [
  {
    photo: "/photos/photo06.jpeg",
    date: "30 August 2026",
    caption: "The first time.",
    note:
      "The day I finally met the girl behind all those conversations. Somehow, being around you felt easier than it probably should have for two people who had only recently met.",
    rotate: -4,
  },
  {
    photo: "/photos/photo07.jpeg",
    date: "August 2026",
    caption: "We got close too fast.",
    note:
      "We probably didn't even realise how quickly we were becoming important to each other. It just happened, naturally and effortlessly.",
    rotate: 3,
  },
  {
    photo: "/photos/photo08.jpeg",
    date: "30 August 2026",
    caption: "Pehli Nazar Mein.",
    note:
      "Me with the guitar, you singing Pehli Nazar Mein... I don't know if you remember exactly how that moment felt, but I do. And I think I always will.",
    rotate: -2,
  },
  {
    photo: "/photos/photo09.jpeg",
    date: "September 2026",
    caption: "My favourite person.",
    note:
      "Somehow you became the person I look forward to talking to. Your presence has found its way into my everyday life without even asking permission.",
    rotate: 5,
  },
  {
    photo: "/photos/photo10.jpeg",
    date: "September 2026",
    caption: "Your drinking era 🍻",
    note:
      "At this point, I'm convinced you've made drinking your full-time personality. But somehow, you're still ridiculously cute while doing it.",
    rotate: -5,
  },
  {
    photo: "/photos/photo11.jpeg",
    date: "September 2026",
    caption: "Just you.",
    note:
      "There doesn't always have to be a big memory. Sometimes just having you around is enough to make an ordinary day feel a little better.",
    rotate: 2,
  },
];

// ── Things I never say enough ──────────────────────────────────────────
export type LoveCard = {
  front: string;
  back: string;
};

export const loveCards: LoveCard[] = [
  {
    front: "Your straightforwardness",
    back:
      "I love that you don't pretend to be someone you're not. You say what you think, exactly as you think it.",
  },
  {
    front: "Your nonchalant side",
    back:
      "You can act like you don't care about anything, and somehow that makes the moments when you actually care feel even more special.",
  },
  {
    front: "Your cuteness",
    back:
      "You probably don't realise how cute you are. And honestly, I think that's part of what makes it even cuter.",
  },
  {
    front: "Your laugh",
    back:
      "There are some sounds you hear and immediately feel a little happier. Yours is one of them.",
  },
  {
    front: "Your eyes",
    back:
      "There's something about the way you look at things that I could probably keep noticing forever.",
  },
  {
    front: "Your stubbornness",
    back:
      "You can be unbelievably stubborn. It's annoying sometimes. But somehow, it's also one of the things I adore about you.",
  },
  {
    front: "Your drinking era 🍻",
    back:
      "At this point, I'm convinced you've made drinking your full-time personality. But somehow, you're still ridiculously cute while doing it.",
  },
  {
    front: "The way you are",
    back:
      "You don't have to change anything about yourself to be worthy of being loved. I love the person you are including all the little things you probably think are flaws.",
  },
  {
    front: "Your little moments",
    back:
      "It's not always the big things. Sometimes it's something you say randomly, a silly joke, or a tiny moment that stays in my head for the rest of the day.",
  },
  {
    front: "You",
    back:
      "If I tried to make a list of everything I love about you, I think I'd eventually run out of ways to write it down.",
  },
];

// ── Our Song ────────────────────────────────────────────────────────────
export const song = {
  title: "Adhore",
  artist: "Prabin Borah",
  artwork: "/photos/album-art.jpeg",
  src: "/music/our-song.mp3",
  heading: "our song...",
};

// ── Secret discovery ───────────────────────────────────────────────────
export const secret = {
  introLine: "There's one more thing...",
  challengeLine: "But you'll have to find it.",
  unlockedLine: "SECRET UNLOCKED",
  revealTitle: "You found it.",
  revealText:
    "Himshiii, I don't know what the future holds for us. I don't know where this story is going to take us, or what we will eventually become. But I know how much you mean to me right now. You have become one of the most important people in my life in such a short amount of time, and I love and adore you more than I probably know how to put into words. I hope you never doubt how deeply I care about you. Whatever happens, I will always be grateful that I met you.",
  revealPhoto: "/photos/secret.jpeg",
};

// ── The Letter ───────────────────────────────────────────────────────────
export const letter = {
  heading: `For you, ${names.her}.`,

  paragraphs: [
    "Himshikha, I honestly don't know how to write this without sounding like I'm trying to put everything I've felt into a few paragraphs. Because somehow, in such a short amount of time, you've become incredibly important to me.",

    "We started talking on August 25th. Just two people who happened to find each other on Hinge. I don't think either of us could have guessed that we'd become this close. It happened so naturally that we didn't even realise it was happening. One conversation became another, then another, and somewhere along the way, you became someone I genuinely look forward to having in my life.",

    "I still think about the first time we met on August 30th. And I especially think about that moment when I was playing the guitar and you sang Pehli Nazar Mein. It was such a simple moment, but somehow it became one of my favourite memories of us. Maybe because it wasn't planned. It was just you, me, a guitar and a song  and somehow, that was enough.",

    "There are so many things I love about you. I love how straightforward you are. I love that you can be completely nonchalant one moment and ridiculously cute the next. I love your little quirks, your stubbornness, your random jokes, and all those tiny things that make you exactly who you are.",

    "And I know we're not dating. I know we're in this strange little space where we don't really know what the future is going to look like. Maybe one day we'll look back at this and laugh about how complicated everything felt. Maybe life will take us somewhere neither of us expects. I don't know. And for once, I don't want to pretend that I know.",

    "What I do know is that you are important to me. Very important. And I know you're still healing from things that I may never completely understand. I don't want to rush you, fix you, or ask you to feel something you're not ready to feel. I just want you to know that you don't have to go through everything alone. I'll be here, and I'll respect whatever space you need, even when that means giving you space.",

    "I don't love you because I know what we're going to become. I love you because of who you are right now. And I adore the person I've had the privilege of getting to know. Whatever happens in the future, meeting you has already become one of the most beautiful unexpected things that has happened to me.",

    "So on your birthday, I don't want to ask you for anything. I just want to wish you a year filled with peace, happiness, laughter, and all the little things that make you genuinely happy. I hope you heal at your own pace. I hope you learn to see yourself the way the people who love you see you. And I hope you always remember that somewhere out there is a boy who is incredibly grateful that a random Hinge match turned into you.",

    "Happy Birthday, Himshikha. Thank you for becoming such a beautiful part of my life, even if neither of us planned for it.",
  ],

  signOff: "Always here,",
  signature: names.me,
};

// ── Quote ───────────────────────────────────────────────────────────────
export const quote = {
  text:
    "“Some people come into our lives for a moment, but somehow leave a forever-shaped place in our hearts.”",
  author: "— Unknown",
};

// ── Final Reveal ────────────────────────────────────────────────────────
export const finalReveal = {
  before: "Before you leave...",
  headline: `Happy Birthday, ${names.her}.`,
  lines: [
    "I hope this year is gentle with you.",
    "I hope you heal, laugh more, dream bigger, and find every reason to smile.",
    "And whatever the future holds for us, I'm really glad that I met you.",
  ],
  photo: "/photos/photo12.jpeg",
};

// ── Time-based greeting ────────────────────────────────────────────────
export const timeGreetings = {
  morning: "Good morning, birthday girl ❤️",
  afternoon: "Happy birthday, Himshikha. I hope you're smiling today.",
  evening: "Your birthday night has officially begun ❤️",
  lateNight:
    "Still awake? Of course you are. I have one more thing to tell you...",
};