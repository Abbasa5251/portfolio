import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Server,
  Smartphone,
  Database,
  Cloud,
  Palette,
} from "lucide-react";
import abbasHeadshot from "@/public/abbas-headshot.png";
import Image from "next/image";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-5 h-5" />,
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    technologies: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    technologies: ["React Native", "Flutter", "Expo", "iOS", "Android"],
  },
  {
    category: "Database",
    icon: <Database className="w-5 h-5" />,
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Supabase",
      "Firebase",
    ],
  },
  {
    category: "DevOps",
    icon: <Cloud className="w-5 h-5" />,
    technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
  },
  {
    category: "Design",
    icon: <Palette className="w-5 h-5" />,
    technologies: [
      "Figma",
      "Adobe XD",
      "UI/UX",
      "Responsive Design",
      "Design Systems",
    ],
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <Image
                src={abbasHeadshot}
                alt="Abbas Anandwala"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated hover:shadow-glow transition-smooth"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float"
                style={{ animationDelay: "2s" }}
              />
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span>About </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hey there! I'm Abbas, a passionate full-stack developer with
                over 5 years of experience building modern web applications that
                solve real-world problems.
              </p>
              <p>
                My journey started with a curiosity about how things work on the
                web, and it has evolved into a deep love for creating seamless
                user experiences backed by robust, scalable architectures.
              </p>
              <p>
                When I'm not coding, you'll find me creating educational content
                on my YouTube channel "ADev Tutorials," where I share my
                knowledge with the developer community and help others grow
                their skills.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies and best practices in
                the ever-evolving world of web development.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span>Technical </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Expertise
              </span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.category}
                className="group hover-glow transition-smooth shadow-card bg-card/50 backdrop-blur-sm animate-scale-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
