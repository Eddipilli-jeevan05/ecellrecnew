'use client'

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, FileText, Book, DollarSign, Users, Send, ExternalLink } from "lucide-react";

export default function Resources() {
  const [suggestion, setSuggestion] = useState("");

  const resourceCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Users,
      resources: [
        {
          title: "Entrepreneur's Handbook",
          description: "Complete guide to starting your entrepreneurial journey",
          type: "PDF",
          size: "2.5 MB",
          downloads: 1250
        },
        {
          title: "Market Research Template",
          description: "Structured approach to understanding your target market",
          type: "DOCX",
          size: "890 KB",
          downloads: 980
        },
        {
          title: "Business Model Canvas",
          description: "Visual template for developing business models",
          type: "PDF",
          size: "1.2 MB",
          downloads: 1890
        }
      ]
    },
    {
      id: "pitch-decks",
      title: "Pitch Deck Templates",
      icon: FileText,
      resources: [
        {
          title: "Investor Pitch Template",
          description: "Professional template for investor presentations",
          type: "PPTX",
          size: "3.1 MB",
          downloads: 2100
        },
        {
          title: "Demo Day Template",
          description: "Optimized for 5-minute demo presentations",
          type: "PPTX",
          size: "2.8 MB",
          downloads: 1650
        },
        {
          title: "Product Pitch Guide",
          description: "Step-by-step guide to creating compelling pitches",
          type: "PDF",
          size: "1.8 MB",
          downloads: 1420
        }
      ]
    },
    {
      id: "funding",
      title: "Funding Checklists",
      icon: DollarSign,
      resources: [
        {
          title: "Funding Readiness Checklist",
          description: "Ensure you're prepared before approaching investors",
          type: "PDF",
          size: "950 KB",
          downloads: 1340
        },
        {
          title: "Government Schemes Guide",
          description: "Complete list of startup-friendly government programs",
          type: "PDF",
          size: "2.2 MB",
          downloads: 1780
        },
        {
          title: "Term Sheet Template",
          description: "Standard term sheet template with explanations",
          type: "DOCX",
          size: "650 KB",
          downloads: 890
        }
      ]
    },
    {
      id: "recommended-reads",
      title: "Recommended Reads",
      icon: Book,
      resources: [
        {
          title: "Lean Startup Methodology",
          description: "Essential reading on building sustainable startups",
          type: "Link",
          size: "External",
          downloads: 3200
        },
        {
          title: "The Hard Thing About Hard Things",
          description: "Building a business when there are no easy answers",
          type: "Link", 
          size: "External",
          downloads: 2800
        },
        {
          title: "Zero to One",
          description: "Notes on startups and building the future",
          type: "Link",
          size: "External",
          downloads: 3100
        }
      ]
    }
  ];

  const handleSuggestion = () => {
    if (suggestion.trim()) {
      // Handle suggestion submission
      setSuggestion("");
      // Show success toast
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
              Resources Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Everything you need to build and scale your startup - from templates to expert guides
            </p>
            <div className="flex items-center justify-center space-x-8 text-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="opacity-80">Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15K+</div>
                <div className="opacity-80">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="opacity-80">Free</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {resourceCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {resourceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {resource.type === "PDF" && <FileText className="w-6 h-6 text-primary" />}
                          {resource.type === "DOCX" && <FileText className="w-6 h-6 text-innovation" />}
                          {resource.type === "PPTX" && <FileText className="w-6 h-6 text-success" />}
                          {resource.type === "Link" && <ExternalLink className="w-6 h-6 text-primary" />}
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div>{resource.type}</div>
                          <div>{resource.size}</div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{resource.description}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Download className="w-4 h-4 mr-1" />
                          {resource.downloads.toLocaleString()} downloads
                        </div>
                        <Button size="sm" className="group/btn">
                          {resource.type === "Link" ? "Visit" : "Download"}
                          {resource.type === "Link" ? 
                            <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" /> :
                            <Download className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          }
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Suggestion Box */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Suggest a Resource
                </h2>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Let us know what resources would be helpful for your entrepreneurial journey.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Resource Suggestion
                  </label>
                  <Textarea
                    placeholder="Describe the resource you'd like to see (e.g., 'Legal checklist for startups', 'Marketing strategy template')"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  onClick={handleSuggestion}
                  className="w-full bg-hero-gradient hover:opacity-90"
                  disabled={!suggestion.trim()}
                >
                  Submit Suggestion
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quick Access
            </h2>
            <p className="text-lg text-muted-foreground">
              Most popular resources to get you started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Startup Toolkit",
                description: "Complete package with all essential templates",
                icon: "🎯",
                downloads: "5.2K"
              },
              {
                title: "Funding Guide 2024",
                description: "Latest funding landscape and opportunities",
                icon: "💰",
                downloads: "3.8K"
              },
              {
                title: "Tech Stack Guide",
                description: "Best practices for technical co-founders",
                icon: "⚡",
                downloads: "4.1K"
              }
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="text-sm text-muted-foreground mb-4">
                  {item.downloads} downloads
                </div>
                <Button className="w-full group/btn">
                  Download
                  <Download className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
