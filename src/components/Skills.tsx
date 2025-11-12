import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, GitBranch, Layers, PresentationIcon, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: "Solution Design & Architecture",
      skills: [
        "Requirements Gathering & Analysis",
        "Functional & Non-Functional Specs",
        "Miro, MS Visio, Draw.io",
        "MS Project, JIRA, Azure DevOps, Trello"
      ]
    },
    {
      icon: Users,
      title: "Delivery & Team Management",
      skills: [
        "Agile (Scrum, Kanban)",
        "Waterfall",
        "Team Management (up to 12 people)",
        "Back-end & Front-end Developers, QAs"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        "Microsoft Azure",
        "Vercel",
        "AWS"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps",
      skills: [
        "CI/CD Pipelines",
        "Azure DevOps",
        "ARM Templates",
        "PowerShell Scripts",
        "GitHub Actions",
        "Unit & Selenium Tests"
      ]
    },
    {
      icon: PresentationIcon,
      title: "Technical Pre-Sales",
      skills: [
        "RFI / RFP Responses",
        "Project Estimates",
        "Solution Presentations"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      skills: [
        "Microsoft Stack, .NET, Azure",
        "Sitecore CMS (MVC, JSS & XM Cloud, Headless, Solr & Coveo, CDP/Personalize)",
        "React, Angular, Next.js, Node.js, TypeScript, HTML, CSS, JavaScript",
        "API Development (.NET, Apigee, Azure API Management, Swagger, Postman)",
        "MS SQL Server, Cosmos DB",
        "AI Tools (GitHub Copilot, Claude Code, Cursor)"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Expertise</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 shadow-md hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground pt-2">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
