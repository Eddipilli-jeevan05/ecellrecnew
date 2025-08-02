'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Trophy, Clock, ArrowRight } from "lucide-react";

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      title: "IdeaSprint 2024",
      date: "March 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      type: "Flagship",
      description: "48-hour innovation hackathon bringing together the brightest minds",
      participants: 200,
      status: "Register Now"
    },
    {
      title: "Startup Bootcamp",
      date: "March 22, 2024",
      time: "2:00 PM",
      location: "Innovation Lab",
      type: "Workshop",
      description: "Intensive 3-day program on startup fundamentals",
      participants: 50,
      status: "Early Bird"
    },
    {
      title: "Investor Connect",
      date: "April 5, 2024",
      time: "6:00 PM",
      location: "Conference Hall",
      type: "Networking",
      description: "Meet leading investors and pitch your ideas",
      participants: 100,
      status: "Apply Now"
    }
  ];

  const pastEvents = [
    {
      title: "E-Summit 2023",
      date: "November 20, 2023",
      location: "Main Campus",
      type: "Flagship",
      description: "Annual entrepreneurship summit with industry leaders",
      participants: 500,
      status: "Completed",
      highlights: ["50+ Speakers", "₹10L+ Funding Announced", "300+ Startups"]
    },
    {
      title: "Tech Talk Series",
      date: "October 15, 2023",
      location: "Seminar Hall",
      type: "Workshop",
      description: "Weekly sessions on emerging technologies",
      participants: 150,
      status: "Completed",
      highlights: ["AI/ML Focus", "Industry Experts", "Hands-on Labs"]
    },
    {
      title: "Pitch Perfect",
      date: "September 10, 2023",
      location: "Innovation Center",
      type: "Competition",
      description: "Startup pitch competition with cash prizes",
      participants: 75,
      status: "Completed",
      highlights: ["₹1L Prize Pool", "15 Finalists", "Investor Jury"]
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
              Our Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Where innovation meets opportunity - join our exciting lineup of events
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 animate-fade-up" 
              style={{ animationDelay: '0.4s' }}
            >
              Propose an Event
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Event Tabs */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 bg-background rounded-lg p-1">
              {[
                { id: "upcoming", label: "Upcoming Events" },
                { id: "past", label: "Past Events" },
                { id: "flagship", label: "Flagship Programs" }
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className="transition-all duration-300"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group hover:scale-105">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant={event.type === "Flagship" ? "default" : "secondary"}
                        className={event.type === "Flagship" ? "bg-innovation text-innovation-foreground" : ""}
                      >
                        {event.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {event.participants}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>

                    <Button className="w-full bg-hero-gradient hover:opacity-90 group/btn">
                      {event.status}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-success text-success">
                        {event.status}
                      </Badge>
                      <Badge variant="secondary">{event.type}</Badge>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {event.participants} participants
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.highlights.map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Flagship Programs */}
      {activeTab === "flagship" && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "IdeaSprint",
                  subtitle: "Annual Innovation Hackathon",
                  description: "Our flagship 48-hour hackathon where students transform ideas into prototypes",
                  features: ["₹2L Prize Pool", "Industry Mentors", "Investor Pitches", "200+ Participants"],
                  icon: "🚀"
                },
                {
                  title: "E-Summit",
                  subtitle: "Entrepreneurship Summit",
                  description: "The biggest entrepreneurship event featuring top industry leaders and investors",
                  features: ["50+ Speakers", "Startup Expo", "Funding Opportunities", "500+ Attendees"],
                  icon: "🏆"
                }
              ].map((program, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-6xl mb-6">{program.icon}</div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{program.title}</h3>
                  <p className="text-lg text-primary mb-4">{program.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-hero-gradient hover:opacity-90">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
