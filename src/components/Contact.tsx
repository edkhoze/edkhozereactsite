import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">
              Interested in working together? I'd love to hear from you.
            </p>
          </div>
          
          <Card className="p-8 md:p-12 shadow-lg border-border/50">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:jobs@edkhoze.com" 
                    className="text-primary hover:underline"
                  >
                    jobs@edkhoze.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+61423632922" 
                    className="text-primary hover:underline"
                  >
                    +61 423 632 922
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/edwardkhoze/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    linkedin.com/in/edwardkhoze
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Working Rights</h3>
                  <p className="text-muted-foreground">Have full working rights in Australia</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg"
                  className="w-full shadow-md hover:shadow-lg transition-all"
                  onClick={() => window.location.href = 'mailto:jobs@edkhoze.com'}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send an Email
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
