import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "July 2025 - Present",
      company: "Independent Consultant - Director, Erudit Pty Ltd",
      role: "Solution Architect",
      location: "Melbourne, Australia",
      description: "After returning to Australia from the US, continuing to consult in the following areas: Solution Design, Sitecore DXP, .NET, Cloud (Azure, AWS), and AI tools.",
      achievements: [],
      technologies: "Sitecore, .NET, Microsoft Azure, AWS"
    },
    {
      period: "January 2020 – May 2025",
      company: "EPAM Systems",
      role: "Solution Architect - Sitecore CMS, Azure Cloud, .NET, APIs",
      location: "Houston, Texas, USA",
      description: "Architected and led the delivery of large-scale enterprise web implementations for Fortune 500 clients. Managed cross-functional teams of developers, QAs, and DevOps engineers. Delivered solutions using Sitecore DXP, MVC/Headless/XM Cloud, Azure/AWS Cloud platforms, API Management, Search, IAM, and Observability tools. Oversaw CI/CD pipeline setup, automated testing, and cloud migration projects.",
      achievements: [
        "Delivered large web implementations on time and within budget",
        "Featured in EPAM quarterly investor presentations as key client wins",
        "Improved performance (response times) on some sites by 50%"
      ],
      technologies: "Sitecore 8.2 – 10.4, MVC / Headless / XM Cloud, .NET Core, SQL Server, Azure, AWS, Azure DevOps, Azure API Management, Apigee, Solr & Solr Cloud, PingAccess & PingFederate, Selenium & Specflow, JMeter, New Relic, AI Assistants"
    },
    {
      period: "December 2015 – September 2019",
      company: "Independent Sitecore Consultant - Director, Erudit Pty Ltd",
      role: "Solution Architect - Sitecore",
      location: "Melbourne & Perth, Australia",
      description: "Served as Solution Architect for multiple enterprise web/Sitecore projects. Designed and implemented large web solutions, led teams in Agile and Waterfall environments, conducted requirements analysis, solution architecture, and client presentations.",
      achievements: [
        "Automated deployments (CI/CD pipelines) reducing deployment time from hours to minutes",
        "Significantly reduced deploy error rates",
        "Improved performance by 20-25% faster time to first byte through caching optimization and load testing refinement"
      ],
      technologies: "Sitecore 6.5 – 10.4, MVC / Headless / XM Cloud, Umbraco CMS, Tessitura, .NET 3.5 – 4.6.1, ASP.NET Web Forms & MVC, MS SQL Server, TDS, Git, Octopus Deploy, Azure DevOps, MS Azure (IaaS & PaaS), GlassMapper, Autofac, AngularJS, jQuery, MongoDB"
    },
    {
      period: "March 2013 – October 2015",
      company: "Grid Concepts",
      role: "Development Manager",
      location: "Melbourne, Australia",
      description: "Managed development teams delivering web and mobile applications for SMEs. Responsible for project management and delivery, implementing Agile methodologies and optimizing team performance.",
      achievements: [],
      technologies: ".NET 4.0 & 4.5, ASP.NET MVC, VS2012 & VS2013, MS Visio, Git + BitBucket, JIRA Agile, TeamworkPM, MS Azure, AWS, PHP (WordPress, CodeIgniter), Xamarin for mobile dev"
    },
    {
      period: "June 2011 – March 2013",
      company: "KIT Digital (Sputnik Agency)",
      role: "Technical Architect, Development Lead",
      location: "Australia, Singapore",
      description: "Led technical design and development for enterprise web and mobile apps. Supported pre-sales activities – responding to RFIs/RFPs, liaising with clients, working through proposed system architecture.",
      achievements: [],
      technologies: ".NET 3.5 & 4.0, Sitecore CMS 6.1 – 6.5, SQL Server 2008, Java 1.6, Objective-C + XCode (iOS)"
    },
    {
      period: "February 2003 – April 2011",
      company: "Barclays Capital, DXC Technology, Infotrak Pty Ltd",
      role: "Software Engineer - .NET & Java",
      location: "Europe, Singapore",
      description: "Early career in software development in Financial Services and Enterprise Web Applications.",
      achievements: [],
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
                    
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mb-3 p-3 bg-accent/5 rounded-lg border border-accent/20">
                        <p className="text-sm font-medium text-accent mb-2">Key Achievements:</p>
                        <ul className="text-sm text-foreground space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-accent mt-1">✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
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
