import { Camera, Video, Plane, Palette, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Camera,
    title: "Wedding Photography & Cinematography",
    description: "Capturing the magic of your special day with cinematic storytelling and emotional depth.",
    features: ["Pre-wedding shoots", "Ceremony coverage", "Reception documentation", "Cinematic highlights"]
  },
  {
    icon: Video,
    title: "Commercial Product Shoots",
    description: "Professional product photography and videography that showcases your brand's story.",
    features: ["Product photography", "Brand storytelling", "Marketing content", "Social media visuals"]
  },
  {
    icon: Calendar,
    title: "Event Coverage",
    description: "Dynamic documentation of corporate events, celebrations, and special occasions.",
    features: ["Corporate events", "Social gatherings", "Live documentation", "Highlight reels"]
  },
  {
    icon: Plane,
    title: "Drone Aerial Visuals",
    description: "Breathtaking aerial perspectives that add a cinematic dimension to your project.",
    features: ["Landscape aerials", "Property showcases", "Event overviews", "Cinematic sequences"]
  },
  {
    icon: Palette,
    title: "Editing & Color Grading",
    description: "Post-production excellence that brings your vision to life with professional polish.",
    features: ["Video editing", "Color correction", "Sound design", "Motion graphics"]
  },
  {
    icon: Award,
    title: "Director of Photography",
    description: "Complete visual direction for films, documentaries, and creative projects.",
    features: ["Visual storytelling", "Creative direction", "Lighting design", "Camera operation"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-warm-earth mb-6">
            My <span className="font-medium text-primary">Services</span>
          </h2>
          <p className="text-lg text-warm-earth/80 max-w-2xl mx-auto">
            From intimate moments to grand celebrations, I offer comprehensive 
            visual services tailored to bring your vision to life.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className="bg-background p-8 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-medium text-warm-earth mb-4">
                  {service.title}
                </h3>
                
                <p className="text-warm-earth/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-warm-earth/60">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/10 to-golden-glow/10 rounded-3xl p-12">
          <h3 className="text-3xl font-light text-warm-earth mb-6">
            Ready to Create Something Beautiful?
          </h3>
          <p className="text-lg text-warm-earth/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with 
            professional visual storytelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Quote
            </Button>
            <Button variant="elegant" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;