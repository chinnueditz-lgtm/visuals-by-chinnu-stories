import { Button } from "@/components/ui/button";
import { Heart, Award, Users } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <section className="py-20 bg-soft-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={aboutPortrait} 
                alt="Chinnu - Visual Artist" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinematic-shadow/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-light text-warm-earth mb-6">
                About <span className="font-medium text-primary">Me</span>
              </h2>
              
              <div className="w-20 h-1 bg-primary mb-8"></div>
              
              <p className="text-lg text-warm-earth/80 leading-relaxed mb-6">
                Based in the vibrant city of Hyderabad, I'm a passionate visual storyteller 
                who believes that every frame should tell a story worth remembering.
              </p>
              
              <p className="text-lg text-warm-earth/80 leading-relaxed mb-8">
                <span className="font-medium text-primary">"Every frame I shoot has a piece of my heart."</span> 
                This philosophy drives my work across weddings, commercial shoots, events, 
                and breathtaking drone visuals. With a flair for cinematic storytelling, 
                I bring emotion, energy, and elegance to every project.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-warm-earth">100+</div>
                <div className="text-sm text-warm-earth/60">Happy Couples</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-warm-earth">5+</div>
                <div className="text-sm text-warm-earth/60">Years Experience</div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-warm-earth">200+</div>
                <div className="text-sm text-warm-earth/60">Events Covered</div>
              </div>
            </div>
            
            <Button variant="elegant" size="lg">
              Let's Create Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;