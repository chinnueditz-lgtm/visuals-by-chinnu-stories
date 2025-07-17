import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-warm-earth mb-6">
                Let's <span className="font-medium text-primary">Connect</span>
              </h2>
              <p className="text-lg text-warm-earth/80 leading-relaxed">
                Ready to capture your special moments? I'd love to hear about 
                your project and discuss how we can create something beautiful together.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-warm-earth">Location</div>
                  <div className="text-warm-earth/70">Hyderabad, Telangana</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-warm-earth">Phone</div>
                  <div className="text-warm-earth/70">+91 XXXXX XXXXX</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-warm-earth">Email</div>
                  <div className="text-warm-earth/70">contact@visualsbychinnu.com</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-medium text-warm-earth">Follow My Journey</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-golden-glow/10 rounded-2xl p-6">
              <h3 className="font-medium text-warm-earth mb-2">Quick Chat?</h3>
              <p className="text-warm-earth/70 text-sm mb-4">
                For immediate assistance or quick queries, reach out on WhatsApp
              </p>
              <Button variant="hero" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Me
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-soft-cream rounded-3xl p-8">
            <h3 className="text-2xl font-medium text-warm-earth mb-6">
              Request a Quote
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-warm-earth mb-2">
                    Name *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-warm-earth mb-2">
                    Phone
                  </label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background border-border"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-warm-earth mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-warm-earth mb-2">
                  Service Interested In
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="commercial">Commercial Shoot</option>
                  <option value="events">Event Coverage</option>
                  <option value="drone">Drone Visuals</option>
                  <option value="editing">Editing Services</option>
                  <option value="dop">Director of Photography</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-warm-earth mb-2">
                  Project Details
                </label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about your project, event date, location, and any specific requirements..."
                  className="bg-background border-border"
                />
              </div>
              
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-warm-earth/60 text-center">
                I'll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;