import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube, TrendingUp } from "lucide-react";
import { youtubeVideos } from "@/lib/data";

const YouTubeSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Youtube className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span>ADev </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tutorials
              </span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers learning modern web development through
            practical tutorials and in-depth coding sessions.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>50K+ subscribers</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-primary" />
              <span>100+ tutorials</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {youtubeVideos.map((video, index) => (
            <Card
              key={video.id}
              className="group hover-glow transition-smooth shadow-card bg-card/50 backdrop-blur-sm animate-scale-in overflow-hidden border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <Button
                    variant="hero"
                    size="icon"
                    className="rounded-full w-16 h-16"
                    asChild
                  >
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Play className="w-6 h-6" />
                    </a>
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth line-clamp-2">
                  {video.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-3">
                  {video.description}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {video.views}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://youtube.com/@adevtutorials"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5" />
              Subscribe for More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
