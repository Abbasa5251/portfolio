export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
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

export interface TechSkill {
  name: string;
}

export interface TechCategory {
  title: string;
  skills: TechSkill[];
}
