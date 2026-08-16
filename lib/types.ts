export type Tone = "blush" | "lavender" | "mint" | "butter" | "peach";

export interface PhoneScreen {
  src: string;
  /** Screen name, e.g. "Leaderboard". Used to build the group's alt text. */
  label: string;
}

export interface Project {
  id: number;
  title: string;
  /** Short category label shown above the title, e.g. "Video & Collaboration". */
  category: string;
  description: string;
  /**
   * The landscape screenshot. Ignored when `phoneScreens` is set — a mobile app
   * has no browser view worth capturing.
   */
  image: string;
  /**
   * Set this instead of relying on `image` for mobile projects: three portrait
   * captures, ordered left → centre → right, rendered as a fanned trio that
   * composes to the same 16:10 box every other card uses. A single portrait
   * capture in that box would show only its top ~29%.
   */
  phoneScreens?: [PhoneScreen, PhoneScreen, PhoneScreen];
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
