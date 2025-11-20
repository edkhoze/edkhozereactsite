import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Edward Khoze
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-medium">
              Solution Architecture | Sitecore DXP | .NET | Azure
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Over 20 years of experience in IT, half of which was spent in Australia, the other half overseas, 
            in Europe, Singapore and the USA. Wealth of experience delivering large and complex projects for Fortune 500 companies, 
            as well as small to medium enterprises.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="shadow-md hover:shadow-lg transition-all"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("experience")}
              className="shadow-sm hover:shadow-md transition-all"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Experience
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a  href="tel:+61423632922" className="hover:text-primary transition-colors">
                +61 423 632 922
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:jobs@edkhoze.com" className="hover:text-primary transition-colors">
                jobs@edkhoze.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
