import { GraduationCap } from "lucide-react";

const Hero = () => {
  const certifications = [
    { name: "Microsoft Certified: Azure Fundamentals", color: "bg-terminal-cyan" },
    { name: "Microsoft Certified: Azure Developer Associate", color: "bg-terminal-cyan" },
    { name: "Sitecore XP 9.3 & 10 Certified", color: "bg-primary" },
    { name: "Sitecore XM Cloud Certified", color: "bg-primary" },
    { name: "Sitecore CDP & Personalize Certified", color: "bg-primary" },
    { name: "Microsoft Certified Application Developer", color: "bg-terminal-green" },
    { name: "IBM Certified Associate Developer", color: "bg-destructive" },
  ];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Dot-matrix background */}
      <div className="absolute inset-0 bg-dot-matrix opacity-100 pointer-events-none" />

      {/* Subtle radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, hsl(263 84% 58% / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 py-12 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 animate-fade-in">
            {/* Terminal prompt */}
            <div className="inline-block px-3 py-1 bg-surface-high border-l-2 border-primary mb-6">
              <span className="font-mono text-xs text-terminal-cyan">
                root@edkhoze:~$ whoami
              </span>
            </div>

            {/* Name */}
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-4">
              Edward Khoze
            </h1>

            {/* Role subtitle */}
            <p className="font-mono text-terminal-green text-lg md:text-xl mb-6">
              Solution Architecture | Sitecore DXP | .NET | Cloud | AI
            </p>

            {/* Bio */}
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-6">
              Over 20 years of experience in IT, half of which was spent in
              Australia, the other half overseas — Europe, Singapore and the USA.
              Proven track record delivering large and complex projects for Fortune 500 companies and SMEs.
              I focus on Solution Architecture, Cloud (Azure, AWS), Microsoft stack (.NET), Sitecore DXP,
              DevSecOps (CI/CD, IaC, Docker containers, Azure DevOps) and AI / LLM tools
              (Python, LangChain & LangGraph, RAG, Microsoft Foundry).
            </p>

            {/* Credentials Panel */}
            <div className="mb-8 bg-surface border border-border/20 overflow-hidden">
              {/* Panel header */}
              <div className="px-4 py-2 bg-surface-highest border-b border-border/20 flex items-center justify-between">
                <span className="font-mono text-[11px] text-terminal-cyan uppercase tracking-widest">
                  // always_learning
                </span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-terminal-green/40" />
                  <span className="font-mono text-[10px] text-muted-foreground/60">7 CERTS</span>
                </div>
              </div>

              {/* Panel content */}
              <div className="p-4 space-y-3">
                {/* Degree */}
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-terminal-cyan shrink-0" />
                  <span className="font-mono text-foreground">
                    Bachelor of Computing with First Class Honours
                  </span>
                  <span className="text-muted-foreground/50 hidden sm:inline">—</span>
                  <span className="font-mono text-muted-foreground hidden sm:inline">Monash University</span>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, i) => (
                    <span
                      key={i}
                      className="bg-surface-highest px-3 py-1 font-mono text-xs flex items-center gap-2 border border-border/10"
                    >
                      <span className={`w-1.5 h-1.5 ${cert.color} shrink-0`} />
                      {cert.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-gradient-cta text-white font-mono font-bold tracking-tight hover:opacity-90 transition-all flex items-center gap-2"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="px-8 py-4 border border-terminal-green text-terminal-green font-mono font-bold tracking-tight hover:bg-[hsl(136_71%_67%/0.1)] transition-all flex items-center gap-2"
              >
                &gt; View Skills
              </button>
            </div>
          </div>

          {/* Right: Terminal Widget */}
          <div className="lg:col-span-5 relative animate-fade-in">
            <div className="bg-surface border border-border/60 overflow-hidden" style={{ boxShadow: "0 0 24px hsl(263 84% 58% / 0.15)" }}>
              {/* Title bar */}
              <div className="bg-surface-highest px-4 py-2 flex items-center justify-between border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-cyan/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-green/40" />
                </div>
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  expertise_config.json
                </span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed">
                {[
                  { line: "01", content: <span className="text-white">{"{"}</span> },
                  {
                    line: "02",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"microsoft"</span>
                        {": "}
                        <span className="text-terminal-green">".NET / C# / ASP.NET Core"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "03",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"cloud"</span>
                        {": "}
                        <span className="text-terminal-green">"Azure, AWS, Vercel, Render"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "04",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"dxp"</span>
                        {": "}
                        <span className="text-terminal-green">"Sitecore"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "05",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"api"</span>
                        {": "}
                        <span className="text-terminal-green">"REST, GraphQL, Apigee, Postman"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "06",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"devops"</span>
                        {": "}
                        <span className="text-terminal-green">"CI/CD, IaC, Docker, Azure DevOps"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "07",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"frontend"</span>
                        {": "}
                        <span className="text-terminal-green">"JS, React, Next.js, TypeScript"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "08",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"ai"</span>
                        {": "}
                        <span className="text-terminal-green">"Python, LangChain & LangGraph, RAG"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "09",
                    content: (
                      <span className="ml-4">
                        <span className="text-primary-foreground">"architecture"</span>
                        {": ["}
                      </span>
                    ),
                  },
                  {
                    line: "10",
                    content: (
                      <span className="ml-8">
                        <span className="text-terminal-green">"requirements gathering & analysis"</span>
                        {", "}
                        <span className="text-terminal-green">"defining functional & non-functional specs"</span>,
                      </span>
                    ),
                  },
                  {
                    line: "11",
                    content: (
                      <span className="ml-8">
                        <span className="text-terminal-green">"specifying solution's quality attributes"</span>
                        {", "}
                        <span className="text-terminal-green">"constrains & assumptions"</span>
                      </span>
                    ),
                  },
                  { line: "12", content: <span className="ml-4">]</span> },
                  { line: "13", content: <span className="text-white">{"}"}</span> },
                ].map((row) => (
                  <div key={row.line} className="flex">
                    <span className="text-muted-foreground mr-4 select-none w-6 text-right">
                      {row.line}
                    </span>
                    {row.content}
                  </div>
                ))}
                <div className="flex mt-2 animate-pulse">
                  <span className="text-muted-foreground mr-4 select-none w-6 text-right">
                    14
                  </span>
                  <span className="bg-terminal-cyan w-2 h-4" />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10 border border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
