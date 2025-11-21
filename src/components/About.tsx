import { Card } from "@/components/ui/card";
import { Award, Users, Briefcase, Globe } from "lucide-react";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const highlights = [
    {
      icon: Briefcase,
      title: "20+ Years",
      description: "Industry Experience across multiple verticals",
      clickable: true,
      href: "experience"
    },
    {
      icon: Globe,
      title: "Global",
      description: "Australia, USA, Europe, Singapore"
    },
    {
      icon: Users,
      title: "Delivery Management",
      description: "Agile (Scrum, Kanban). Managing team of up to 12 ppl",
    },
    {
      icon: Award,
      title: "Certified",
      description: "MCAD, Azure (2 certificates). Sitecore (4 certificates)",
      clickable: true,
      href: "education"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="p-6 md:p-8 shadow-lg border-border/50 mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              I am a Solution Architect with over 20 years' experience in the IT industry, 
              half of which was spent in Australia, the other half overseas, in Europe, 
              Singapore and the USA. I have a wealth of experience delivering large and complex 
              projects for Fortune 500 companies, as well as small to medium enterprises.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I possess solid team management skills, ability to work under pressure, passion for 
              learning new technology, as well as strong customer focus.
            </p>
            {/* <p className="text-lg text-foreground font-semibold mb-4">
              I specialise in the following areas:
            </p>
            <ul className="text-base text-muted-foreground leading-relaxed space-y-2">
              <li>• <span className="font-medium text-foreground">Solution Design and Architecture</span> – Requirements gathering & analysis, defining functional & non-functional specs, specifying solution's quality attributes, constrains & assumptions</li>
              <li>• <span className="font-medium text-foreground">Delivery & Team Management</span> – Agile (Scrum, Kanban), managing teams up to 12 people (back-end & front-end developers, QAs)</li>
              <li>• <span className="font-medium text-foreground">Cloud Platforms</span> – Microsoft Azure, AWS, Vercel</li>
              <li>• <span className="font-medium text-foreground">DevOps</span> – CI/CD pipelines with Coded UI (Selenium) tests using infrastructure-as-code (IaC) approaches. Tools: Azure DevOps, ARM templates, Terraform, PowerShell scripts, Docker</li>
              <li>• <span className="font-medium text-foreground">Technical Pre-Sales</span> – RFI / RFP responses, project estimates, proposed solution presentation</li>
              <li>• <span className="font-medium text-foreground">Software Development</span> – .NET, MS Azure, Sitecore DXP (MVC, JSS & XM Cloud, Headless, Solr & Coveo, CDP / Personalize), Front-end (HTML, CSS, JS, React, Angular, Next.js, TypeScript), API development, AI tools, DBs (SQL, Cosmos DB, MongoDB)</li>
            </ul> */}
          </Card>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                onClick={() => item.clickable && scrollToSection(item.href)}
                className={`p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border-border/50 ${
                  item.clickable ? 'cursor-pointer hover:scale-105 hover:border-primary/50' : ''
                }`}
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
