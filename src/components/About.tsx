import { Card } from "@/components/ui/card";
import { Award, Users, Briefcase, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "20+ Years",
      description: "Industry Experience"
    },
    {
      icon: Globe,
      title: "Global",
      description: "AU, USA, Europe, Singapore"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Managing up to 12 people"
    },
    {
      icon: Award,
      title: "Certified",
      description: "Azure, Sitecore Expert"
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
          
          <Card className="p-8 md:p-12 shadow-lg border-border/50 mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              I am a Solution Architect with over 20 years' experience in the IT industry, 
              half of which was spent in Australia, the other half overseas, in Europe, 
              Singapore and the USA. I have a wealth of experience delivering large and complex 
              projects for Fortune 500 companies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I possess solid team management skills, ability to work under pressure, passion for 
              learning new technology, as well as strong customer focus.
            </p>
            <p className="text-lg text-foreground font-semibold mb-4">
              I specialise in the following areas:
            </p>
            <ul className="text-base text-muted-foreground leading-relaxed space-y-2">
              <li>• <span className="font-medium text-foreground">Solution Design and Architecture</span> – Requirements gathering, Functional/Non-Functional specs, Miro, MS Visio, Draw.io</li>
              <li>• <span className="font-medium text-foreground">Delivery & Team Management</span> – Agile (Scrum, Kanban), Waterfall, managing teams up to 12 people</li>
              <li>• <span className="font-medium text-foreground">Cloud Platforms</span> – Microsoft Azure, AWS, Vercel</li>
              <li>• <span className="font-medium text-foreground">DevOps</span> – CI/CD pipelines, Azure DevOps, ARM templates, PowerShell, GitHub Actions</li>
              <li>• <span className="font-medium text-foreground">Technical Pre-Sales</span> – RFI/RFP responses, project estimates, solution presentations</li>
              <li>• <span className="font-medium text-foreground">Software Development</span> – Microsoft Stack, .NET, Sitecore DXP, React, Next.js, Node.js, API development, AI tools</li>
            </ul>
          </Card>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border-border/50"
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
