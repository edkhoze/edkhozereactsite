import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Code, GitBranch, Layers, PresentationIcon, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Layers,
      title: "Solution Design & Architecture",
      skills: [
        "Requirements gathering & analysis",
        "Defining functional & non-functional specs",
        "Specifying solution's quality attributes, constraints & assumptions"
      ]
    },
    {
      icon: Users,
      title: "Delivery & Team Management",
      skills: [
        "Agile: Scrum, Kanban",
        "Team Management: Up to 12 people"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        "MS Azure (Sitecore PaaS, API Management, Containers, App Services, Functions, Storage, Event Grid / Event Hubs)",
        "AWS",
        "Vercel"
      ]
    },
    {
      icon: GitBranch,
      title: "DevOps",
      skills: [
        "CI / CD Pipelines",
        "infrastructure-as-code (IaC)",
        "Azure DevOps",
        "ARM Templates",
        "PowerShell Scripts",
        "Docker",
        "Selenium UI Tests",
        "Terraform"
      ]
    },
    {
      icon: PresentationIcon,
      title: "Technical Pre-Sales",
      skills: [
        "RFI / RFP responses",
        "Project estimates",
        "Proposed solution presentations"
      ]
    },
    {
      icon: Code,
      title: "Software Development",
      skills: [
        "Microsoft Stack: .NET, C#, Azure platform",
        "Sitecore DXP: MVC, JSS & XM Cloud, Headless, Solr & Coveo, CDP / Personalize",
        "Front-end: HTML, CSS, JS, React, Angular, Next.js, TypeScript",
        "API Development (Web APIs, Google Apigee, Azure API Management, Swagger, Postman)",
        "Databases: MS SQL Server, Cosmos DB, MongoDB",
        "AI Tools: GitHub Copilot, Claude Code, Cursor, Lovable.dev"
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
