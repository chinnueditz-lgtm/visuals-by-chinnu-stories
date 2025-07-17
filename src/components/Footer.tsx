import { Heart, Camera, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-earth text-soft-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-medium mb-4">Visuals by Chinnu</h3>
            <p className="text-soft-cream/80 mb-6 max-w-md">
              Passionate visual storyteller based in Hyderabad, dedicated to 
              capturing emotions and creating timeless visual narratives.
            </p>
            <div className="flex items-center text-sm text-soft-cream/70">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-primary" />
              <span>in Hyderabad</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-soft-cream/80">
              <li><a href="#" className="hover:text-primary transition-colors">Wedding Photography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Shoots</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Event Coverage</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Drone Visuals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Editing</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-soft-cream/80">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>contact@visualsbychinnu.com</span>
              </li>
              <li className="flex items-center">
                <Instagram className="h-4 w-4 mr-2" />
                <a href="#" className="hover:text-primary transition-colors">@visualsbychinnu</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-soft-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-soft-cream/70 text-sm">
            <Camera className="h-4 w-4 mr-2" />
            <span>© 2024 Visuals by Chinnu. All rights reserved.</span>
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-soft-cream/70">
            <span>Freelance DOP | Wedding & Event Filmmaker | Drone Artist</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;