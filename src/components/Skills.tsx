const Skills = () => {
  const skillCategories = [
    {
      title: "Solution Design & Architecture",
      borderColor: "border-primary",
      dotColor: "bg-primary",
      skills: [
        "Requirements gathering & analysis",
        "Defining functional & non-functional specs",
        "Specifying solution's quality attributes",
        "Specifying constrains & assumptions",
        "cloud-native, microservices, serverless, event-driven architectures",
        "Tools: Miro, MS Visio, Draw.io, Sparx EA, UML"
      ],
    },
    {
      title: "Enterprise Web Applications",
      borderColor: "border-terminal-green",
      dotColor: "bg-terminal-green",
      skills: [
        "Frontend: JS, React, Next.js, TypeScript",
        "Backend: .NET, C#, ASP.NET Core, TypeScript",
        "Databases: MS SQL Server, Cosmos DB, MongoDB",
        "APIs: REST, GraphQL, Apigee, Azure API Management",
        "Delivery: Agile (Scrum, Kanban) and Waterfall",
        "Team Management: Up to 12 people (BE, FE, QA)"
      ],
    },
    {
      title: "Cloud Platforms",
      borderColor: "border-terminal-cyan",
      dotColor: "bg-terminal-cyan",
      skills: [
        "MS Azure",
        "AWS",
        "Vercel",
        "Render",
      ],
    },
    {
      title: "DevOps",
      borderColor: "border-primary",
      dotColor: "bg-primary",
      skills: [
        "CI / CD Pipelines",
        "Docker containers",
        "Infrastructure as Code (IaC)",
        "Terraform",
        "Azure DevOps",
        "ARM & Bicep templates",
        "PowerShell",
        "Docker",
        "Selenium"
      ],
    },
    {
      title: "Technical Pre-Sales",
      borderColor: "border-terminal-green",
      dotColor: "bg-terminal-green",
      skills: [
        "RFI / RFP responses",
        "Project estimates",
        "Client workshops & presentations",
        "Partnering with delivery and sales teams to design best-of-breed solutions"
      ],
    },
    {
      title: "AI / LLM tools",
      borderColor: "border-destructive",
      dotColor: "bg-destructive",
      skills: [
        "Python",
        "LangChain & LangGraph",
        "Retrieval-Augmented Generation (RAG)",
        "Microsoft Foundry",
        "Custom Agents",
        "Claude Code",
        "GitHub Copilot",
        "Google Antigravity, Jules, Stitch",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-mono text-terminal-green text-2xl font-bold tracking-tight whitespace-nowrap">
            // skills_matrix
          </h2>
          <div className="h-px flex-grow bg-border/20" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-surface-low p-6 border-t-4 ${category.borderColor}`}
            >
              <h3 className="font-mono text-sm mb-6 text-muted-foreground font-bold">
                {"{ "}{category.title}{" }"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-surface-highest px-3 py-1 font-mono text-xs flex items-center gap-2 border border-border/10"
                  >
                    <span className={`w-1.5 h-1.5 ${category.dotColor} shrink-0`} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
