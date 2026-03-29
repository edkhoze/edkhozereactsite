import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const certifications = [
    { name: "Microsoft Certified: Azure Fundamentals", color: "bg-terminal-cyan" },
    { name: "Microsoft Certified: Azure Developer Associate", color: "bg-terminal-cyan" },
    { name: "Sitecore XP 9.3 & 10 Certified", color: "bg-primary" },
    { name: "Sitecore XM Cloud Certified", color: "bg-primary" },
    { name: "Sitecore CDP & Personalize Certified", color: "bg-primary" },
    { name: "Microsoft Certified Application Developer", color: "bg-terminal-green" },
    { name: "IBM Certified Associate Developer", color: "bg-destructive" },
  ];

  return (
    <section id="education" className="py-24 bg-surface-low">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-mono text-primary-foreground text-2xl font-bold tracking-tight whitespace-nowrap">
            // education
          </h2>
          <div className="h-px flex-grow bg-border/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Degree Card */}
          <div className="lg:col-span-5">
            <div className="bg-background border border-border/20 p-8 h-full border-t-4 border-t-terminal-cyan">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-terminal-cyan/10">
                  <GraduationCap className="h-5 w-5 text-terminal-cyan" />
                </div>
                <span className="font-mono text-xs text-terminal-cyan uppercase tracking-widest">
                  /degree
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Computing
              </h3>
              <p className="font-mono text-terminal-green text-sm mb-4">
                First Class Honours
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-terminal-green shrink-0">&gt;</span>
                  <span>Faculty of Information Technology, Monash University</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-terminal-green shrink-0">&gt;</span>
                  <span>Achieved First Class Honours with Distinction Average</span>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-8 font-mono text-[10px] text-muted-foreground/30 uppercase tracking-widest">
                MONASH_UNIVERSITY.EDU.AU
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-7">
            <div className="bg-background border border-border/20 p-8 h-full border-t-4 border-t-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-primary-foreground uppercase tracking-widest">
                  /certifications
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                Professional Certifications
              </h3>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-surface-low border border-border/10 px-4 py-3 hover:bg-surface-high transition-colors"
                  >
                    <span className={`w-2 h-2 ${cert.color} shrink-0`} />
                    <span className="font-mono text-sm text-foreground">
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Count badge */}
              <div className="mt-6 flex items-center gap-2">
                <span className="font-mono text-3xl font-bold text-white">7</span>
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  TOTAL_CERTS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
