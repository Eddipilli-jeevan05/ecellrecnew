'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Users, Filter } from "lucide-react";

export default function Team() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "WebTech", "Events", "Design", "Startup Support", "Alumni Relations"];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "President",
      domain: "Leadership",
      bio: "Leading innovation at E-Cell",
      avatar: "RK",
      linkedin: "#",
      category: "Leadership"
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      domain: "WebTech",
      bio: "Building digital solutions",
      avatar: "PS",
      linkedin: "#",
      category: "WebTech"
    },
    {
      name: "Amit Patel",
      role: "Events Head",
      domain: "Events",
      bio: "Creating memorable experiences",
      avatar: "AP",
      linkedin: "#",
      category: "Events"
    },
    {
      name: "Sarah Wilson",
      role: "Design Lead",
      domain: "Design",
      bio: "Designing the future",
      avatar: "SW",
      linkedin: "#",
      category: "Design"
    },
    {
      name: "David Chen",
      role: "Startup Mentor",
      domain: "Startup Support",
      bio: "Nurturing entrepreneurial dreams",
      avatar: "DC",
      linkedin: "#",
      category: "Startup Support"
    },
    {
      name: "Kavya Reddy",
      role: "Alumni Coordinator",
      domain: "Alumni Relations",
      bio: "Connecting past and present",
      avatar: "KR",
      linkedin: "#",
      category: "Alumni Relations"
    }
  ];

  const filteredMembers = activeFilter === "All" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Passionate students driving entrepreneurial excellence at REC
            </p>
            <div className="flex items-center justify-center space-x-4 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Users className="w-6 h-6" />
              <span>25+ Active Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Filter className="w-5 h-5 mr-2 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by domain:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="transition-all duration-300"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:scale-105 bg-card border-border"
              >
                <div className="w-20 h-20 bg-hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                
                <p className="text-muted-foreground mb-4 italic">"{member.bio}"</p>
                
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                  <span>Domain:</span>
                  <Badge variant="outline" className="text-primary border-primary">
                    {member.domain}
                  </Badge>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  Connect
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Legacy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honoring the leaders who built the foundation of E-Cell REC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2022, 2023, 2024].map((year, index) => (
              <Card key={year} className="p-6 bg-card border-border">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary mb-2">{year}</div>
                  <div className="text-sm text-muted-foreground">Founding Team</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      AT
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Alumni Team Lead</div>
                      <div className="text-sm text-muted-foreground">President {year}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
