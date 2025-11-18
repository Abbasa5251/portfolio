import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/projects-section";
import YouTubeSection from "@/components/youtube-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <YouTubeSection />
        <div id="about">
          <AboutSection />
        </div>
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Abbas Anandwala. Built with 💙 by ADev Tutorials.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
