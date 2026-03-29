const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    {
      tag: "/experience",
      tagColor: "text-terminal-green",
      value: "20+",
      label: "YEARS IN IT",
      hoverColor: "hover:border-[hsl(136,71%,67%)]",
      clickable: true,
      href: "experience",
    },
    {
      tag: "/presence",
      tagColor: "text-terminal-cyan",
      value: "GLOBAL",
      label: "AU, USA, EUROPE, SG",
      hoverColor: "hover:border-[hsl(189,94%,43%)]",
    },
    {
      tag: "/leadership",
      tagColor: "text-primary-foreground",
      value: "12+",
      label: "TEAM MANAGEMENT",
      hoverColor: "hover:border-primary",
      clickable: true,
      href: "experience",
    },
  ];

  return (
    <section id="about" className="bg-surface-low py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-mono text-terminal-green text-xl mb-2">
            // about_me
          </h2>
          <div className="h-1 w-24 bg-[hsl(136,71%,67%)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Stats Column */}
          <div className="lg:col-span-4 space-y-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                onClick={() => stat.clickable && scrollToSection(stat.href!)}
                className={`bg-background border border-border/20 p-8 flex flex-col items-start transition-colors ${stat.hoverColor} ${
                  stat.clickable ? "cursor-pointer" : ""
                }`}
              >
                <span className={`font-mono text-sm mb-2 ${stat.tagColor}`}>
                  {stat.tag}
                </span>
                <span className="text-5xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-8">
            <div className="bg-surface-lowest border border-border/30 p-8 md:p-12 relative">
              {/* Background decorative hex */}
              <div className="absolute top-4 right-4 text-border/20 font-mono text-8xl pointer-events-none select-none">
                0x14
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Solution Architect &amp; Team Lead
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I am a Solution Architect with over 20 years' experience in
                  the IT industry, half of which was spent in Australia, the
                  other half overseas — Europe, Singapore and the USA. I have a
                  proven track record delivering large and complex projects for
                  Fortune 500 companies, as well as small to medium enterprises.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I possess solid team management skills, ability to work under
                  pressure, passion for learning new technology, as well as
                  strong customer focus. I specialize in Solution Design &amp;
                  Architecture, Cloud Platforms (Azure/AWS), and modern DevOps
                  practices.
                </p>

                {/* Quote block */}
                <div className="bg-background p-6 border-l-4 border-terminal-cyan">
                  <p className="font-mono text-terminal-cyan italic">
                    "Architecting reliable, scalable solutions for the world's
                    leading brands through precision engineering and modern DXP
                    ecosystems."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none overflow-hidden">
        <div className="text-[20rem] font-bold text-primary select-none rotate-12 transform translate-x-1/2">
          DXP
        </div>
      </div>
    </section>
  );
};

export default About;
