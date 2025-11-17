"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/data";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/hero-bg.jpg"}
          width={100}
          height={100}
          alt="Background Image"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Abbas Anandwala
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Full-Stack Web Developer & Content Creator
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Building the future, one line of code at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-smooth hover:text-primary"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href={links.linkdin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-smooth hover:text-primary"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href={links.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-glow transition-smooth hover:text-primary"
            >
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 left-20 w-2 h-2 bg-primary rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
    </section>
  );
};

export default HeroSection;
