import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const certifications = [
    "Microsoft Certified: Azure Fundamentals",
    "Microsoft Certified: Azure Developer Associate",
    "Sitecore XP 9.3 & 10 Certified",
    "Sitecore XM Cloud Certified",
    "Sitecore CDP & Personalize Certified",
    "Microsoft Certified Application Developer",
    "IBM Certified Associate Developer"
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <Card className="p-8 shadow-md hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Bachelor of Computing with First Class Honours
                  </h3>
                  <p className="text-lg text-primary mb-2">
                    Faculty of Information Technology, Monash University
                  </p>
                  <p className="text-muted-foreground">
                    Achieved First Class Honours with Distinction Average
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-md hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Professional Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="text-sm py-2 px-3"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
