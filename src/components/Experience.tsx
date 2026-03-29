const Experience = () => {
  const experiences = [
    {
      period: "July 2025 - Present",
      company: "Erudit Pty Ltd",
      role: "Independent Consultant",
      location: "Melbourne, Australia",
      descriptionBullets: [
        "Continuing to consult after returning to Australia from my stint at EPAM in the US.",
        "Currently specializing in: Solution Design, Enterprise Architecture, .NET / C#, Cloud (Azure, AWS), Python and AI-enabled system & tools.",
      ],
      achievements: [],
      technologies: "Sitecore DXP, .NET, MS Azure, AI Tools",
      borderColor: "border-primary",
      dateColor: "text-primary-foreground",
      roleColor: "text-terminal-cyan",
      cardBg: "bg-surface",
      hoverBg: "group-hover:bg-surface-high",
      featured: true,
    },
    {
      period: "January 2020 – May 2025",
      company: "EPAM Systems",
      role: "Solution Architect",
      location: "Houston, Texas, USA",
      descriptionBullets: [
        "Architected and led delivery of large-scale enterprise web implementations for Fortune 500 clients.",
        "Managed cross-functional teams of developers, QAs, and DevOps engineers.",
        "Delivered solutions using Sitecore DXP (MVC/Headless/XM Cloud), Azure & Vercel; microservices, API Management (Azure, Apigee), Solr & Coveo search, IAM (Ping), and observability (New Relic).",
        "Oversaw CI/CD pipeline setup (Azure DevOps, ARM templates, Terraform, Docker), automated testing (Selenium & Specflow, JMeter) and cloud migration projects.",
        "Collaborated with stakeholders for requirements analysis and solution design.",
      ],
      achievements: [
        "Delivered high-profile search implementation for a key banking client on time and within budget.",
        "Healthcare engagement I helped sell and architected was featured in EPAM quarterly investor presentations as key client win.",
        "Improved performance (response times) on some websites by up to 50%.",
        "Researched and implemented prototype AI tools for Sitecore migrations, reducing XM Cloud migration effort by 25–35%.",
      ],
      technologies:
        "Sitecore 8.2–10.4, MVC / Headless / XM Cloud, .NET Core, SQL Server, Azure, AWS, Vercel, Azure DevOps, Azure API Management, Apigee, Solr & Solr Cloud, PingAccess & PingFederate, Selenium & Specflow, JMeter, New Relic",
      borderColor: "border-terminal-cyan",
      dateColor: "text-terminal-cyan",
      roleColor: "text-primary-foreground",
      cardBg: "bg-surface-low",
      hoverBg: "group-hover:bg-surface",
      featured: true,
    },
    {
      period: "December 2015 – September 2019",
      company: "Erudit Pty Ltd",
      role: "Independent Consultant",
      location: "Melbourne & Perth, Australia",
      descriptionBullets: [
        "Served as Solution Architect for multiple Web / Sitecore enterprise projects.",
        "Designed and implemented large enterprise solutions.",
        "Led teams in Agile environments, ensuring timely delivery and quality.",
        "Conducted requirements analysis, solution architecture, and client presentations.",
      ],
      achievements: [
        "Automated deployments (CI/CD pipelines), reducing deployment time from hours (manual) to minutes.",
        "Significantly reduced error rates resulting from manual deployments.",
        "Improved performance (TTFB) by 20–25% through caching optimizations and load testing.",
      ],
      technologies:
        "Sitecore 6.5–9.1, Tessitura, .NET 3.5–4.6.1, ASP.NET Web Forms & MVC, MS SQL Server, TDS, Git, Octopus Deploy, Azure DevOps, MS Azure (IaaS & PaaS), GlassMapper, Autofac, AngularJS, jQuery, MongoDB",
      borderColor: "border-primary",
      dateColor: "text-primary-foreground",
      roleColor: "text-terminal-cyan",
      cardBg: "bg-surface-low",
      hoverBg: "group-hover:bg-surface",
      featured: true,
    },
    {
      period: "March 2013 – October 2015",
      company: "Grid Concepts",
      role: "Development Manager",
      location: "Melbourne, Australia",
      descriptionBullets: [
        "Managed development teams delivering web and mobile applications for SMEs.",
        "Responsible for project management and delivery.",
        "Implemented Agile methodologies and optimized team performance.",
      ],
      achievements: [],
      technologies:
        ".NET 4.0 & 4.5, ASP.NET MVC, VS2012 & VS2013, MS Visio, Git + BitBucket, JIRA Agile, TeamworkPM, MS Azure, AWS, PHP (WordPress, CodeIgniter), Xamarin",
      borderColor: "border-terminal-cyan",
      dateColor: "text-terminal-cyan",
      roleColor: "text-muted-foreground",
      cardBg: "bg-surface-low",
      hoverBg: "group-hover:bg-surface",
      featured: false,
    },
    {
      period: "June 2011 – March 2013",
      company: "KIT Digital (Sputnik Agency)",
      role: "Technical Architect, Development Lead",
      location: "Australia, Singapore",
      descriptionBullets: [
        "Led technical design and development for enterprise web and mobile apps.",
        "Supported pre-sales activities — RFIs / RFPs, client liaising, solution architecture.",
      ],
      achievements: [],
      technologies:
        ".NET 3.5 & 4.0, Sitecore CMS 6.1–6.5, SQL Server 2008, Java 1.6, Objective-C + XCode (iOS)",
      borderColor: "border-border",
      dateColor: "text-muted-foreground",
      roleColor: "text-muted-foreground",
      cardBg: "bg-surface-lowest",
      hoverBg: "group-hover:bg-surface-low",
      featured: false,
    },
    {
      period: "February 2003 – April 2011",
      company: "Barclays Capital, DXC Technology, Infotrak Pty Ltd",
      role: "Software Engineer — .NET & Java",
      location: "Europe, Singapore",
      descriptionBullets: [
        "Early career in software development in Financial Services and Enterprise Web Applications.",
      ],
      achievements: [],
      technologies: ".NET, Java, SQL Server",
      borderColor: "border-border",
      dateColor: "text-muted-foreground",
      roleColor: "text-muted-foreground",
      cardBg: "bg-surface-lowest",
      hoverBg: "group-hover:bg-surface-low",
      featured: false,
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-mono text-terminal-cyan text-2xl font-bold tracking-tight whitespace-nowrap">
            // work_experience
          </h2>
          <div className="h-px flex-grow bg-border/20" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2" />

          {/* Erudit group (entries 0–2) with continuation connector */}
          <div className="relative space-y-12">
            {/* Erudit continuation connector — dashed line on the left side */}
            <div
              className="hidden md:block absolute z-20"
              style={{
                left: "-16px",
                top: 0,
                bottom: 0,
                width: "2px",
                borderLeft: "2px dashed hsl(142 71% 45% / 0.35)",
              }}
            />
            {/* Erudit label */}
            <div
              className="hidden md:block absolute z-20 font-mono text-[10px] text-terminal-green/50 uppercase tracking-widest"
              style={{
                left: "-14px",
                top: "50%",
                transform: "translateY(-50%) rotate(-90deg)",
                transformOrigin: "center center",
                whiteSpace: "nowrap",
              }}
            >
              ← Erudit Pty Ltd →
            </div>

            {experiences.slice(0, 3).map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center justify-between gap-8 group`}
                >
                  {/* Card side */}
                  <div
                    className="md:w-5/12 text-left"
                  >
                    <div
                      className={`${exp.cardBg} p-8 transition-all ${exp.hoverBg} border-l-4 ${exp.borderColor}`}
                    >
                      {/* Date */}
                      <span
                        className={`font-mono text-sm mb-2 block uppercase ${exp.dateColor}`}
                      >
                        {exp.period}
                      </span>

                      {/* Company */}
                      <h3 className="font-bold text-2xl text-white">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <p className={`font-mono text-sm mb-4 ${exp.roleColor}`}>
                        {exp.role}
                      </p>

                      {/* Location */}
                      <p className="font-mono text-xs text-muted-foreground mb-4">
                        {exp.location}
                      </p>

                      {/* Description bullets */}
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        {exp.descriptionBullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2"
                          >
                            <span className="font-mono text-terminal-green shrink-0">
                              &gt;
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="mt-4 p-4 bg-surface-high/50 border-l-2 border-terminal-green">
                          <p className="font-mono text-xs text-terminal-green mb-2">
                            // achievements
                          </p>
                          <ul className="text-sm text-foreground space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <span className="text-terminal-green shrink-0">
                                  ✓
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech stack */}
                      {/* <p className="font-mono text-xs text-muted-foreground/60 mt-4">
                        <span className="text-terminal-cyan">stack: </span>
                        {exp.technologies}
                      </p> */}
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10 ${exp.featured
                      ? "w-4 h-4 bg-primary border-4 border-background"
                      : "w-3 h-3 bg-border border-2 border-background"
                      }`}
                    style={
                      exp.featured
                        ? {
                          boxShadow: "0 0 15px rgba(124, 58, 237, 0.6)",
                        }
                        : undefined
                    }
                  />

                  {/* Empty spacer for the other side */}
                  <div className="md:w-5/12" />
                </div>
              );
            })}
          </div>

          {/* Remaining entries (3–5) */}
          <div className="space-y-12 mt-12">
            {experiences.slice(3).map((exp, index) => {
              const actualIndex = index + 3;
              const isLeft = actualIndex % 2 === 0;

              return (
                <div
                  key={actualIndex}
                  className={`relative flex flex-col ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } items-center justify-between gap-8 group`}
                >
                  {/* Card side */}
                  <div
                    className="md:w-5/12 text-left"
                  >
                    <div
                      className={`${exp.cardBg} p-8 transition-all ${exp.hoverBg} border-l-4 ${exp.borderColor}`}
                    >
                      {/* Date */}
                      <span
                        className={`font-mono text-sm mb-2 block uppercase ${exp.dateColor}`}
                      >
                        {exp.period}
                      </span>

                      {/* Company */}
                      <h3 className="font-bold text-2xl text-white">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <p className={`font-mono text-sm mb-4 ${exp.roleColor}`}>
                        {exp.role}
                      </p>

                      {/* Location */}
                      <p className="font-mono text-xs text-muted-foreground mb-4">
                        {exp.location}
                      </p>

                      {/* Description bullets */}
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        {exp.descriptionBullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2"
                          >
                            <span className="font-mono text-terminal-green shrink-0">
                              &gt;
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Achievements */}
                      {exp.achievements.length > 0 && (
                        <div className="mt-4 p-4 bg-surface-high/50 border-l-2 border-terminal-green">
                          <p className="font-mono text-xs text-terminal-green mb-2">
                            // achievements
                          </p>
                          <ul className="text-sm text-foreground space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <span className="text-terminal-green shrink-0">
                                  ✓
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech stack */}
                      {/* <p className="font-mono text-xs text-muted-foreground/60 mt-4">
                        <span className="text-terminal-cyan">stack: </span>
                        {exp.technologies}
                      </p> */}
                    </div>
                  </div>

                  {/* Timeline node */}
                  <div
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10 ${exp.featured
                      ? "w-4 h-4 bg-primary border-4 border-background"
                      : "w-3 h-3 bg-border border-2 border-background"
                      }`}
                    style={
                      exp.featured
                        ? {
                          boxShadow: "0 0 15px rgba(124, 58, 237, 0.6)",
                        }
                        : undefined
                    }
                  />

                  {/* Empty spacer for the other side */}
                  <div className="md:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
