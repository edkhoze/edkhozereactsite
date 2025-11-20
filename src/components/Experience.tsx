import { Card } from "@/components/ui/card";
import { Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "July 2025 - Present",
      company: "Independent Consultant - Director, Erudit Pty Ltd",
      role: "Solution Architect",
      location: "Melbourne, Australia",
      description: "Continuing to consult after returning to Australia from my stint at EPAM in the US. Currently specializing in the following areas: Solution Design, Sitecore DXP, .NET, Cloud (Azure, AWS), and AI tools.",
      descriptionBullets: [
        "Continuing to consult after returning to Australia from my stint at EPAM in the US. Currently specializing in the following areas: Solution Design, Sitecore DXP, .NET, Cloud (Azure, AWS), and AI tools."
      ],
      achievements: [],
      technologies: "Sitecore DXP, .NET, MS Azure, AI Tools",
      isErudit: true,
      isResumed: true
    },
    {
      period: "January 2020 – May 2025",
      company: "EPAM Systems",
      role: "Solution Architect - Sitecore CMS, Azure Cloud, .NET, APIs",
      location: "Houston, Texas, USA",
      description: "Architected and led the delivery of large-scale enterprise web implementations for Fortune 500 clients. Managed cross-functional teams of developers, QAs, and DevOps engineers. Delivered solutions using Sitecore DXP, MVC/Headless/XM Cloud, Azure/AWS Cloud platforms, API Management, Search, IAM, and Observability tools. Oversaw CI/CD pipeline setup, automated testing, and cloud migration projects.",
      descriptionBullets: [
        "Architected and led the delivery of large-scale enterprise web implementations for Fortune 500 clients.",
        "Managed cross-functional teams of developers, QAs, and DevOps engineers.",
        "Delivered solutions using Sitecore DXP (MVC/Headless/XM Cloud) and Azure & Vercel platforms; involving microservices, enterprise integration patterns, API Management (Azure, Google Apigee), advanced search features based on Solr & Coveo, as well as integration with IAM platforms, such as Ping and Observability solutions, such as New Relic.",
        "Oversaw CI/CD pipeline setup (Azure DevOps, ARM templates, Terraform, Docker), automated testing (Selenium & Specflow, JMeter) and cloud migration projects.",
        "Collaborated with stakeholders for requirements analysis and solution design."
      ],
      achievements: [
        "Delivered high profile search implementation for a key banking client on time and within budget, cementing further work from them.",
        "Large healthcare engagement that I helped sell and then architected was featured in EPAM quarterly investor presentations as key client win.",
        "Improved performance (response times) on some websites by up to 50%.",
        "I was instrumental in researching and implementing prototype AI tools for Sitecore migrations, significantly (25% - 35%) reducing XM cloud migration effort."
      ],
      technologies: "Sitecore 8.2 – 10.4, MVC / Headless / XM Cloud, .NET Core, SQL Server, Azure, AWS, Vercel, Azure DevOps, Azure API Management, Apigee, Solr & Solr Cloud, PingAccess & PingFederate, Selenium & Specflow, JMeter, New Relic, Internal AI tools"
    },
    {
      period: "December 2015 – September 2019",
      company: "Independent Sitecore Consultant - Director, Erudit Pty Ltd",
      role: "Solution Architect - Sitecore",
      location: "Melbourne & Perth, Australia",
      description: "Served as Solution Architect for multiple enterprise Web / Sitecore projects. Designed and implemented large enterprise solutions, led teams in Agile environments, conducted requirements analysis, solution architecture, and client presentations.",
      descriptionBullets: [
        "Served as Solution Architect for multiple enterprise Web / Sitecore projects.",
        "Designed and implemented large enterprise solutions.",
        "Led teams in Agile environments, ensuring timely delivery and quality of the solution.",
        "Conducted requirements analysis, solution architecture, and client presentations."
      ],
      achievements: [
        "Automated deployments (CI/CD pipelines), in some instances reducing deployment time from hours (manual) to minutes.",
        "Significantly reduced error rates resulting from manual deployments.",
        "Improved performance (time to first byte) by 20-25% through caching optimizations and load testing refinement."
      ],
      technologies: "Sitecore 6.5 – 9.1, Tessitura, .NET 3.5 – 4.6.1, ASP.NET Web Forms & MVC, MS SQL Server, TDS, Git, Octopus Deploy, Azure DevOps, MS Azure (IaaS & PaaS), GlassMapper, Autofac, AngularJS, jQuery, MongoDB",
      isErudit: true
    },
    {
      period: "March 2013 – October 2015",
      company: "Grid Concepts",
      role: "Development Manager",
      location: "Melbourne, Australia",
      description: "Managed development teams delivering web and mobile applications for SMEs. Responsible for project management and delivery, implementing Agile methodologies and optimizing team performance.",
      descriptionBullets: [
        "Managed development teams, delivering web and mobile applications for SMEs.",
        "Responsible for project management and delivery.",
        "Implemented Agile methodologies and optimized team performance."
      ],
      achievements: [],
      technologies: ".NET 4.0 & 4.5, ASP.NET MVC, VS2012 & VS2013, MS Visio, Git + BitBucket, JIRA Agile, TeamworkPM, MS Azure, AWS, PHP (WordPress, CodeIgniter), Xamarin for mobile dev"
    },
    {
      period: "June 2011 – March 2013",
      company: "KIT Digital (Sputnik Agency)",
      role: "Technical Architect, Development Lead",
      location: "Australia, Singapore",
      description: "Led technical design and development for enterprise web and mobile apps. Supported pre-sales activities – responding to RFIs/RFPs, liaising with clients, working through proposed system architecture.",
      descriptionBullets: [
        "Led technical design and development for enterprise web and mobile apps.",
        "Supported pre-sales activities – responding to RFIs / RFPs, liaising with clients, working through proposed system architecture."
      ],
      achievements: [],
      technologies: ".NET 3.5 & 4.0, Sitecore CMS 6.1 – 6.5, SQL Server 2008, Java 1.6, Objective-C + XCode (iOS)"
    },
    {
      period: "February 2003 – April 2011",
      company: "Barclays Capital, DXC Technology, Infotrak Pty Ltd",
      role: "Software Engineer - .NET & Java",
      location: "Europe, Singapore",
      description: "Early career in software development in Financial Services and Enterprise Web Applications.",
      descriptionBullets: [
        "Early career in software development in Financial Services and Enterprise Web Applications."
      ],
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
                  {/* Connector badge for resumed Erudit */}
                  {exp.isResumed && (
                    <div className="flex justify-center mb-4">
                      <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs font-semibold text-accent">
                        ↻ Resumed consulting in Australia
                      </div>
                    </div>
                  )}
                  
                  {/* Timeline dot */}
                  <div className="absolute left-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block"></div>
                  
                  <Card className={`md:ml-16 p-6 shadow-md hover:shadow-lg transition-all duration-300 border-border/50 ${
                    exp.isErudit ? 'bg-gradient-to-r from-accent/8 via-transparent to-transparent border-accent/30 border-l-4' : ''
                  }`}>
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
                    
                    {exp.descriptionBullets ? (
                      <ul className="text-foreground mb-3 leading-relaxed space-y-2">
                        {exp.descriptionBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary font-bold mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-foreground mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                    
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
