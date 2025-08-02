'use client'

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Target, TrendingUp, ArrowRight, ExternalLink, CheckCircle } from "lucide-react";

export default function Startups() {
  const processSteps = [
    {
      step: "01",
      title: "Ideation",
      description: "Brainstorm, validate, and refine your startup idea with our expert mentors",
      features: ["Idea Validation Workshops", "Market Research Support", "Mentor Guidance"],
      icon: Lightbulb,
      color: "text-innovation bg-innovation/10"
    },
    {
      step: "02", 
      title: "Validation",
      description: "Build MVP, test with real users, and iterate based on feedback",
      features: ["MVP Development", "User Testing", "Product-Market Fit"],
      icon: Target,
      color: "text-primary bg-primary/10"
    },
    {
      step: "03",
      title: "Growth",
      description: "Scale your startup with funding support and business development",
      features: ["Funding Assistance", "Business Development", "Investor Connections"],
      icon: TrendingUp,
      color: "text-success bg-success/10"
    }
  ];

  const startupStories = [
    {
      name: "AvatAQ",
      founder: "Rahul Sharma",
      description: "AI-powered water quality monitoring system for smart cities",
      status: "Incubated",
      badge: "NSIC Shortlisted",
      funding: "₹15L Raised",
      logo: "AQ",
      achievements: ["50+ Installations", "3 City Partnerships", "IoT Innovation Award"]
    },
    {
      name: "EduTech Solutions",
      founder: "Priya Patel",
      description: "Personalized learning platform for rural education",
      status: "Prototype Ready",
      badge: "Prototype Ready",
      funding: "₹5L Seeking",
      logo: "ES",
      achievements: ["1000+ Students", "5 Schools", "Education Excellence Award"]
    },
    {
      name: "GreenTech Innovations",
      founder: "Arjun Kumar",
      description: "Sustainable packaging solutions for e-commerce",
      status: "Early Stage",
      badge: "Incubated",
      funding: "₹8L Raised",
      logo: "GT",
      achievements: ["Zero Waste Goal", "B2B Partnerships", "Sustainability Award"]
    },
    {
      name: "HealthAI",
      founder: "Sneha Reddy",
      description: "AI-driven diagnostic tool for remote healthcare",
      status: "Growth Stage",
      badge: "NSIC Shortlisted",
      funding: "₹25L Raised",
      logo: "HA",
      achievements: ["FDA Approved", "10K+ Diagnoses", "Healthcare Innovation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Startup Assistance
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Have a startup idea? We'll help you build it from concept to reality
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 animate-fade-up" 
              style={{ animationDelay: '0.4s' }}
            >
              Apply for Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our 3-Stage Support Program
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to transform your idea into a thriving business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 relative overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/20">
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-6">{step.description}</p>

                <div className="space-y-3">
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Startup Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the innovative startups built by our community members
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {startupStories.map((startup, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-hero-gradient rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {startup.logo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{startup.name}</h3>
                      <p className="text-muted-foreground">by {startup.founder}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={startup.badge === "NSIC Shortlisted" ? "default" : "secondary"}
                    className={startup.badge === "NSIC Shortlisted" ? "bg-success text-success-foreground" : ""}
                  >
                    {startup.badge}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{startup.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className="font-semibold text-foreground">{startup.status}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Funding</div>
                      <div className="font-semibold text-primary">{startup.funding}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {startup.achievements.map((achievement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group/btn">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hero-gradient rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Startup?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join our next cohort of entrepreneurs and get the support you need to turn your idea into reality
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹50L+</div>
                <div className="opacity-90">Total Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div className="opacity-90">Success Rate</div>
              </div>
            </div>

            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
