import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Entrepreneurship Club at ANU is fuelling Australia's future and is a need for Canberra's startup ecosystem.",
      author: "Sarah Wilson",
      role: "Managing Partner, Tech Startups",
      avatar: "SW",
      rating: 5
    },
    {
      quote: "Great club to be a part of, super interesting events which are good to meet new people, helps with networking and sharing ideas",
      author: "David Chen",
      role: "Alumni & Startup Founder",
      avatar: "DC",
      rating: 5
    },
    {
      quote: "ANU E-Club has been instrumental in connecting me with like-minded entrepreneurs and providing valuable insights into the startup world.",
      author: "Priya Sharma",
      role: "Final Year Student",
      avatar: "PS",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Don't take our word for it
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our community members, mentors, and startup founders have to say about their experience with E-Cell REC.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:shadow-lg transition-all duration-300 group hover:scale-105">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/40" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-innovation text-innovation" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;