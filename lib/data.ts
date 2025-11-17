import { Project, YouTubeVideo, TechCategory } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "ADev Zoom",
    description:
      "A collaborative video conferencing application with real-time updates and team collaboration features.",
    tech: ["Next.js", "TypeScript", "Stream.io", "TailwindCSS", "Clerk"],
    liveUrl: "https://zoom-clone-chi-swart.vercel.app/",
    githubUrl: "https://github.com/Abbasa5251/zoom-clone",
    image: "/zoom-clone.png",
  },
  {
    id: 2,
    title: "ADev Devsearch",
    description:
      "A collaborative platform for developers to showcase projects and connect with other developers.",
    tech: ["Python", "Django", "PostgreSQL", "DRF", "JWT", "AWS S3"],
    liveUrl: "",
    githubUrl: "https://github.com/Abbasa5251/adev-devsearch",
    image: "/devsearch.png",
  },
  {
    id: 3,
    title: "AI-Powered Resume Scanner",
    description: "AI-powered resume scanner, with job role suggestions.",
    tech: ["Streamlit", "Python", "OpenAI API"],
    liveUrl: "",
    githubUrl: "https://github.com/Abbasa5251/ai-resume-scanner",
    image: "/AI-resume-scanner.png",
  },
];

// This will be dynamically fetched from YouTube API
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 1,
    title:
      "Getting Started with Python for Beginners - Installing Python on Windows | ADev Tutorials",
    description:
      "If you want to start learning python from scratch, this is the right place. You will learn how to install latest version of Python i.e Python 3.9.0 on windows 10 and also how to run python from command prompt",
    views: "195 views",
    duration: "3:21",
    thumbnail:
      "https://i.ytimg.com/vi/2a0eTiMUh9k/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCtAzSZ0AUSfmUSSk8KyfVhVANpvw",
    url: "https://www.youtube.com/watch?v=2a0eTiMUh9k",
  },
  {
    id: 2,
    title: "Download Instagram Profile Pictures using Python | ADev Tutorials",
    description:
      "In this video I will show you how to download Instagram Profile Picture for any user by giving Instagram username using python. we will make use of python's Requests module for the same.",
    views: "596 views",
    duration: "10:06",
    thumbnail:
      "https://i.ytimg.com/vi/uMtZlrP5LOw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAQC1Y5_2IxGMV48gnBPKwsB1y6Vw",
    url: "https://www.youtube.com/watch?v=uMtZlrP5LOw",
  },
  {
    id: 3,
    title: "Getting started with Django | ADev Tutorials",
    description:
      "Welcome to our Django tutorial! In this video, we'll guide you through the process of getting started with Django, a powerful Python web framework designed for rapid development and clean, pragmatic design. Whether you're a beginner in web development or an experienced developer looking to explore Django, this tutorial has got you covered.",
    views: "99 views",
    duration: "5:29",
    thumbnail:
      "https://i.ytimg.com/vi/oQt9yRXn_d4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIfZ8BlXqJtQY83aHfl52IuRYv_Q",
    url: "https://www.youtube.com/watch?v=oQt9yRXn_d4",
  },
];

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vue.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'Python' },
      { name: 'Django' },
      { name: 'Fast API' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native' },
      { name: 'Flutter' },
      { name: 'Expo' },
      { name: 'iOS' },
      { name: 'Android' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
      { name: 'Redis' },
      { name: 'Prisma' },
      { name: 'Supabase' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'CI/CD' },
      { name: 'Vercel' },
      { name: 'Netlify' },
    ],
  },
  {
    title: 'Design',
    skills: [
      { name: 'Figma' },
      { name: 'Adobe XD' },
      { name: 'UI/UX' },
      { name: 'Responsive Design' },
      { name: 'Design Systems' },
    ],
  },
];

export const links = {
  github: "https://github.com/Abbasa5251",
  linkdin: "https://www.linkedin.com/in/abbasanandwala/",
  youtube: "https://www.youtube.com/@adevtutorials",
  email: "abbasa5251@hotmail.com"
}