import { Card } from "@/components/ui/card";
import { TrendingUp, Award, Zap, Target } from "lucide-react";

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
      metric: "Successful Delivery",
      title: "Key Client Win",
      description: "Large healthcare engagement that I helped sell and then architected was featured in EPAM quarterly investor presentations as key client win"
    },
    {
      icon: Zap,
      metric: "Hours → Minutes",
      title: "Deployment Automation",
      description: "Reduced deployment time from hours to minutes through CI/CD pipeline optimization"
    },
    {
      icon: Target,
      metric: "20-25%",
      title: "TTFB Optimization",
      description: "Improved time-to-first-byte performance through caching and load testing refinement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Achievements</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <Card 
                key={index}
                className="p-8 shadow-md hover:shadow-lg transition-all duration-300 border-border/50 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{item.metric}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
