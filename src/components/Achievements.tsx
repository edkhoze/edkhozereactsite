import { TrendingUp, Award, Zap, Target } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Achievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      metric: "50%",
      title: "Performance Improvement",
      description: "Optimized site response times, delivering significant performance gains for enterprise clients"
    },
    {
      icon: Award,
      metric: "EPAM Featured",
      title: "Key Client Win",
      description: "Large healthcare engagement that I helped sell and then architected was featured in EPAM quarterly investor presentations"
    },
    {
      icon: Zap,
      metric: "hrs → mins",
      title: "Deployment Automation",
      description: "Reduced deployment time from hours to minutes through CI/CD pipeline optimization"
    },
    {
      icon: Target,
      metric: "20-25%",
      title: "TTFB Optimization",
      description: "Improved time-to-first-byte through caching and load testing refinement"
    }
  ];

  return (
    <section className="py-20 bg-background" id="achievements">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader index={3} title="Key Achievements" />

          <div className="grid md:grid-cols-2 gap-px bg-border/10">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-surface-low p-8 group hover-glow transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle purple glow overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-2 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="font-mono text-2xl font-bold text-primary text-right">
                      {item.metric}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
