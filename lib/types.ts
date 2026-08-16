export type Tone = "blush" | "lavender" | "mint" | "butter" | "peach";

export interface Project {
  id: number;
  title: string;
  /** Short category label shown above the title, e.g. "Video & Collaboration". */
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  /** Background wash behind the screenshot on the work card. */
  tone: Tone;
  /** Optional — highlights the card as the lead case study. */
  featured?: boolean;
}

export interface YouTubeVideo {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
}
