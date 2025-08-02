'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Lightbulb className="w-16 h-16 text-innovation" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <Rocket className="w-20 h-20 text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-success rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-up">
            <span className="text-primary font-medium text-sm">
              Raghu Engineering College's Official Entrepreneurship Cell
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up leading-tight">
            Where Campus Ideas
            <span className="block bg-hero-gradient bg-clip-text text-transparent">
              Ignite Global Ventures
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Join India's most dynamic entrepreneurship ecosystem. From ideation to execution, we're here to transform your startup dreams into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-hero-gradient hover:opacity-90 text-lg px-8 py-6 transition-all duration-300 animate-pulse-glow group"
            >
              Join E-Cell
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Start a Startup
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-innovation mb-2">15+</div>
              <div className="text-muted-foreground">Startups Incubated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-success mb-2">25+</div>
              <div className="text-muted-foreground">Events Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₹10L+</div>
              <div className="text-muted-foreground">Funding Secured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;