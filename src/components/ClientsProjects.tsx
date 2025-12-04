import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ClientsProjects = () => {
  const clients = [
    {
      name: "IMF",
      logo: "/logos/imf.png",
      website: "https://www.imf.org/en/home",
      description: "Sitecore 9.3 MVC maintenance project + moving legacy static pages to Vercel"
    },
    {
      name: "Lexus",
      logo: "/logos/lexus.png",
      website: "https://www.lexus.com/",
      description: "Supporting existing Sitecore & Azure PaaS setup"
    },
    {
      name: "Toyota Genuine Service",
      logo: "/logos/toyota.png",
      website: "https://www.toyota.com.au/owners/service",
      description: "API logic updates and enhancements"
    },
    {
      name: "Raymond James",
      logo: "/logos/raymondjames.svg",
      website: "https://www.raymondjames.com/",
      description: "Solr Cloud project implementing advanced search capabilities"
    },
    {
      name: "CPA Australia",
      logo: "/logos/cpa-australia.png",
      website: "https://www.cpaaustralia.com.au/",
      description: "Supporting and enhancing large multi-site Sitecore 7.2 installation"
    },
    {
      name: "Fitness First",
      logo: "/logos/fitness-first.png",
      website: "https://www.fitnessfirst.com.au/",
      description: "Build out of brand new Sitecore 8.2.4 MVC site hosted on Azure PaaS"
    },
    {
      name: "Arts Centre Melbourne",
      logo: "/logos/arts-centre-melbourne.svg",
      website: "https://www.artscentremelbourne.com.au/",
      description: "Working on Sitecore multisite instance with Tessitura ticketing & CRM system"
    },
    {
      name: "Synergy",
      logo: "/logos/synergy.png",
      website: "https://www.synergy.net.au/",
      description: "Large implementation of brand new website together with multiple vendors"
    },
    {
      name: "Water Corporation",
      logo: "/logos/water-corporation.png",
      website: "https://www.watercorporation.com.au/",
      description: "Developing innovative features within large existing Sitecore implementation"
    },
    {
      name: "Department of Health, WA",
      logo: "/logos/healthywa.png",
      website: "https://www.healthywa.wa.gov.au/",
      description: "Supprorting and enhancing HealthyWA website"
    },
    {
      name: "David Jones",
      logo: "/logos/david-jones.png",
      website: "https://www.davidjones.com/gift-registry",
      description: "Working on gift registry feature within a massive stream of work"
    },
    {
      name: "Sanitarium",
      logo: "/logos/sanitarium.png",
      website: "https://www.sanitarium.com/au",
      description: "Developing brand new Sanitarium website for Australia & New Zealand"
    },
    {
      name: "Textron Aviation",
      logo: "/logos/textron-aviation.svg",
      website: "https://txtav.com",
      description: "Sitecore 10.3 Headless implementation + Aircraft Specs data project"
    },
    {
      name: "OneGeisinger",
      logo: "/logos/geisinger.png",
      website: "https://www.geisinger.org",
      description: "Large digital transformation effort to introduce digital front door"
    },
    {
      name: "Homebase / Bunnings",
      logo: "/logos/homebase.png",
      website: "https://www.homebase.co.uk",
      description: "Replatforming Homebase e-commerce storefront after Bunnings acquisition"
    },
    {
      name: "Bayer ANZ",
      logo: "/logos/bayer.svg",
      website: "https://www.bayer.com.au/",
      description: "Building brand new Bayer intranet on Sitecore + 3rd party integrations"
    }
  ];

  return (
    <section className="py-20 bg-background" id="clients">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Notable Clients & Projects</h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 text-lg">
              Organisations I had the priviledge of helping with their web implementations and digital transformations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card 
                  className="h-full p-6 shadow-md hover:shadow-lg transition-all duration-300 border-border/50 group-hover:border-primary/50 group-hover:scale-105 flex flex-col items-center justify-center text-center cursor-pointer"
                >
                  <div className="relative w-32 h-20 flex items-center justify-center mb-4 overflow-hidden">
                    <img 
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full w-auto h-auto object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                    {client.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {client.description}
                  </p>
                  
                  <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:translate-x-1 transition-transform">
                    Visit <ExternalLink className="h-3 w-3 ml-1" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsProjects;
