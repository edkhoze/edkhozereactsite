import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "July 2025 - Present",
      company: "Independent Consultant - Erudit Pty Ltd",
      role: "Solution Architect",
      location: "Melbourne, Australia",
      description: "After returning from the US, continuing to consult in the following areas: Solution Design, Sitecore DXP, .NET, and Microsoft Azure.",
      technologies: "Sitecore, .NET, Microsoft Azure"
    },
    {
      period: "January 2020 – May 2025",
      company: "EPAM Systems",
      role: "Solution Architect - Sitecore CMS, Azure Cloud, .NET, APIs",
      location: "Houston, Texas, USA",
      description: "Solution Architect / Technical Lead for several large Sitecore CMS, Azure Cloud and .NET Core implementations. Clients include some well-known Fortune 500 companies.",
      technologies: "Sitecore 8.2 – 10.4, MVC / Headless / XM Cloud, .NET Core, SQL Server, Azure, Azure DevOps, Azure API Management, Apigee, Solr & Solr Cloud, PingAccess & PingFederate, Selenium & Specflow, JMeter, New Relic, AI Assistants"
    },
    {
      period: "December 2015 – September 2019",
      company: "Independent Sitecore Consultant",
      role: "Solution Architect - Sitecore",
      location: "Melbourne & Perth, Australia",
      description: "Consultant / Contractor for several large Sitecore projects, typically in a role of a Solution Architect.",
      technologies: "Sitecore 6.5 – 10.4, MVC / Headless / XM Cloud, Umbraco CMS, Tessitura, .NET 3.5 – 4.6.1, ASP.NET Web Forms & MVC, MS SQL Server, TDS, Git, Octopus Deploy, Azure DevOps, MS Azure (IaaS & PaaS), GlassMapper, Autofac, AngularJS, jQuery, MongoDB"
    },
    {
      period: "March 2013 – October 2015",
      company: "Grid Concepts",
      role: "Development Manager",
      location: "Melbourne, Australia",
      description: "Managing a team of developers, building a variety of web-based, as well as native mobile projects / products for SMEs. Responsible for project management and delivery; development vertical P&L.",
      technologies: ".NET 4.0 & 4.5, ASP.NET MVC, VS2012 & VS2013, MS Visio, Git + BitBucket, JIRA Agile, TeamworkPM, MS Azure, AWS, PHP (WordPress, CodeIgniter), Xamarin for mobile dev"
    },
    {
      period: "June 2011 – March 2013",
      company: "KIT Digital",
      role: "Technical Architect, Development Lead",
      location: "Australia, Singapore",
      description: "Leading projects from the technical perspective - solution design & development, helping sales team with pre-sales process (writing proposals, liaising with clients, working through proposed system architecture).",
      technologies: ".NET 3.5 & 4.0, Sitecore CMS 6.1 – 6.5, SQL Server 2008, Java 1.6, Objective-C + XCode (iOS)"
    },
    {
      period: "February 2003 – October 2008",
      company: "Barclays Capital, DXC Technology, Infotrak Pty Ltd",
      role: "Software Engineer in .NET & Java",
      location: "Europe, Singapore",
      description: "Early Career in Software Development in Financial Services and Enterprise Web Applications.",
      technologies: ".NET, Java, SQL Server"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block"></div>
                  
                  <Card className="md:ml-16 p-6 shadow-md hover:shadow-lg transition-all duration-300 border-border/50">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div className="mb-2 md:mb-0">
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium mt-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground md:text-right">
                        <div className="font-medium">{exp.period}</div>
                        <div className="flex items-center gap-1 md:justify-end mt-1">
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium">Technologies:</span> {exp.technologies}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
