import { Project, YouTubeVideo } from "./types";

export const projects: Project[] = [
  {
    id: 0,
    title: "Salon Ledger",
    category: "Mobile App",
    description:
      "A local-first ledger for the salon counter: staff log services in seconds, the owner sees collections, margins and commissions behind a PIN. Runs entirely on-device — no server, no accounts.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite"],
    liveUrl: null,
    githubUrl: null,
    image: "",
    phoneScreens: [
      { src: "/salon-entry.webp", label: "New Entry" },
      { src: "/salon-leaderboard.webp", label: "Leaderboard" },
      { src: "/salon-owner.webp", label: "Owner Dashboard" },
    ],
    tone: "mint",
    featured: true,
  },
  {
    id: 1,
    title: "Klassic Tile Adhesives",
    category: "Marketing Website",
    description:
      "A marketing website for Klassic Tile Adhesives, a company that sells tile adhesives.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://klassictilesadhesives.com/",
    githubUrl: null,
    image: "/klassictileadhesives.webp",
    tone: "butter",
    featured: true,
  },
  {
    id: 2,
    title: "ADev Zoom",
    category: "Video & Collaboration",
    description:
      "A collaborative video conferencing app with real-time rooms, scheduled meetings and recordings.",
    tech: ["Next.js", "TypeScript", "Stream.io", "Tailwind CSS", "Clerk"],
    liveUrl: null,
    githubUrl: "https://github.com/Abbasa5251/zoom-clone",
    image: "/zoom-clone.webp",
    tone: "lavender",
    featured: true,
  },
  {
    id: 3,
    title: "ADev Devsearch",
    category: "Developer Community",
    description:
      "A platform where developers publish projects, collect peer reviews and connect with each other.",
    tech: ["Python", "Django", "PostgreSQL", "DRF", "JWT", "AWS S3"],
    liveUrl: "",
    githubUrl: "https://github.com/Abbasa5251/adev-devsearch",
    image: "/devsearch.webp",
    tone: "blush",
  },
  {
    id: 4,
    title: "AI Resume Scanner",
    category: "AI & Automation",
    description:
      "Parses a resume, scores it against a job description and suggests roles that actually fit.",
    tech: ["Streamlit", "Python", "OpenAI API"],
    liveUrl: "",
    githubUrl: "https://github.com/Abbasa5251/ai-resume-scanner",
    image: "/AI-resume-scanner.webp",
    tone: "mint",
  },
];

/**
 * Hand-maintained for now. To pull these live, fetch the uploads playlist from
 * the YouTube Data API v3 in a server component and cache the result — the key
 * already lives in `.env` as `YOUTUBE_API_KEY`.
 */
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 1,
    title: "Getting Started with Python for Beginners — Installing Python",
    description:
      "Start learning Python from scratch. Install the latest version of Python on Windows and run your first script from the command prompt.",
    views: "195 views",
    duration: "3:21",
    thumbnail:
      "https://i.ytimg.com/vi/2a0eTiMUh9k/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtAzSZ0AUSfmUSSk8KyfVhVANpvw",
    url: "https://www.youtube.com/watch?v=2a0eTiMUh9k",
  },
  {
    id: 2,
    title: "Download Instagram Profile Pictures using Python",
    description:
      "Download the profile picture of any Instagram user from their username, using Python's Requests module.",
    views: "596 views",
    duration: "10:06",
    thumbnail:
      "https://i.ytimg.com/vi/uMtZlrP5LOw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQC1Y5_2IxGMV48gnBPKwsB1y6Vw",
    url: "https://www.youtube.com/watch?v=uMtZlrP5LOw",
  },
  {
    id: 3,
    title: "Getting started with Django",
    description:
      "A walkthrough of getting up and running with Django, the Python web framework built for rapid, clean development.",
    views: "99 views",
    duration: "5:29",
    thumbnail:
      "https://i.ytimg.com/vi/oQt9yRXn_d4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIfZ8BlXqJtQY83aHfl52IuRYv_Q",
    url: "https://www.youtube.com/watch?v=oQt9yRXn_d4",
  },
];
