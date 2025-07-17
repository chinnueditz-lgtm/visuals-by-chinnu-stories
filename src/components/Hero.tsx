import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Camera } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-shadow/60 via-cinematic-shadow/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-soft-cream mb-6 leading-tight">
            Visuals by
            <span className="block font-medium text-primary">Chinnu</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-soft-cream/90 mb-8 font-light">
            Capturing Emotions. Creating Visual Stories.
          </p>
          
          <p className="text-lg text-soft-cream/80 mb-12 max-w-2xl mx-auto">
            Freelance DOP | Wedding & Event Filmmaker | Drone Artist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToPortfolio}
              className="animate-scale-in"
            >
              <Camera className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-soft-cream/10 border-soft-cream/30 text-soft-cream hover:bg-soft-cream/20 animate-scale-in"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Reel
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown 
          className="h-8 w-8 text-soft-cream/60 cursor-pointer hover:text-soft-cream transition-colors"
          onClick={scrollToPortfolio}
        />
      </div>
    </section>
  );
};

export default Hero;