import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import weddingImg from "@/assets/portfolio-wedding.jpg";
import commercialImg from "@/assets/portfolio-commercial.jpg";
import droneImg from "@/assets/portfolio-drone.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Ancient Living - Handcrafted Beauty",
    category: "Commercial",
    image: commercialImg,
    description: "Commercial product photography showcasing artisanal beauty products with elegant lighting and composition."
  },
  {
    id: 2,
    title: "Love Till Death - Wedding Story",
    category: "Wedding",
    image: weddingImg,
    description: "Emotional wedding cinematography capturing the essence of eternal love with cinematic storytelling."
  },
  {
    id: 3,
    title: "Hyderabad Skylines",
    category: "Drone",
    image: droneImg,
    description: "Breathtaking aerial visuals of Hyderabad's architectural beauty captured during golden hour."
  },
  {
    id: 4,
    title: "Corporate Event Coverage",
    category: "Events",
    image: commercialImg,
    description: "Professional event documentation with dynamic angles and engaging visual narratives."
  },
  {
    id: 5,
    title: "Pre-Wedding Romance",
    category: "Wedding",
    image: weddingImg,
    description: "Romantic pre-wedding sessions capturing couple's chemistry in beautiful natural settings."
  },
  {
    id: 6,
    title: "Heritage Architecture",
    category: "Drone",
    image: droneImg,
    description: "Stunning drone footage showcasing Hyderabad's rich architectural heritage from unique perspectives."
  }
];

const categories = ["All", "Wedding", "Commercial", "Events", "Drone"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-warm-earth mb-6">
            My <span className="font-medium text-primary">Work</span>
          </h2>
          <p className="text-lg text-warm-earth/80 max-w-2xl mx-auto">
            Each project tells a unique story through carefully crafted visuals 
            that capture the essence of every moment.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-shadow via-cinematic-shadow/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="self-start mb-3 bg-primary/90 text-primary-foreground">
                    {item.category}
                  </Badge>
                  
                  <h3 className="text-xl font-medium text-soft-cream mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-soft-cream/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.description}
                  </p>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <Button size="sm" variant="hero">
                      <Play className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="bg-soft-cream/10 border-soft-cream/30 text-soft-cream hover:bg-soft-cream/20">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="elegant" size="lg">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;