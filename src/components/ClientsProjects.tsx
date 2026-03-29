import { ExternalLink } from "lucide-react";

const ClientsProjects = () => {
  const clients = [
    { name: "IMF", logo: "/logos/imf.png", website: "https://www.imf.org/en/home", description: "Sitecore 9.3 MVC maintenance + legacy pages to Vercel" },
    { name: "Lexus", logo: "/logos/lexus.png", website: "https://www.lexus.com/", description: "Supporting existing Sitecore & Azure PaaS setup" },
    { name: "Toyota", logo: "/logos/toyota.png", website: "https://www.toyota.com.au/owners/service", description: "API logic updates and enhancements" },
    { name: "Raymond James", logo: "/logos/raymondjames.svg", website: "https://www.raymondjames.com/", description: "Solr Cloud advanced search implementation" },
    { name: "CPA Australia", logo: "/logos/cpa-australia.png", website: "https://www.cpaaustralia.com.au/", description: "Supporting large multi-site Sitecore 7.2 installation" },
    { name: "Fitness First", logo: "/logos/fitness-first.png", website: "https://www.fitnessfirst.com.au/", description: "Sitecore 8.2.4 MVC site on Azure PaaS" },
    { name: "Arts Centre Melbourne", logo: "/logos/arts-centre-melbourne.svg", website: "https://www.artscentremelbourne.com.au/", description: "Sitecore multisite with Tessitura CRM integration" },
    { name: "Synergy", logo: "/logos/synergy.png", website: "https://www.synergy.net.au/", description: "Large new website implementation with multiple vendors" },
    { name: "Water Corporation", logo: "/logos/water-corporation.png", website: "https://www.watercorporation.com.au/", description: "Innovative features within large Sitecore implementation" },
    { name: "Dept of Health WA", logo: "/logos/healthywa.png", website: "https://www.healthywa.wa.gov.au/", description: "Supporting and enhancing HealthyWA website" },
    { name: "David Jones", logo: "/logos/david-jones.png", website: "https://www.davidjones.com/gift-registry", description: "Gift registry feature development" },
    { name: "Sanitarium", logo: "/logos/sanitarium.png", website: "https://www.sanitarium.com/au", description: "Brand new website for Australia & New Zealand" },
    { name: "Textron Aviation", logo: "/logos/textron-aviation.svg", website: "https://txtav.com", description: "Sitecore 10.3 Headless + Aircraft Specs data project" },
    { name: "OneGeisinger", logo: "/logos/geisinger.png", website: "https://www.geisinger.org", description: "Large digital transformation — digital front door" },
    { name: "Homebase", logo: "/logos/homebase.png", website: "https://www.homebase.co.uk", description: "Replatforming e-commerce storefront after acquisition" },
    { name: "Bayer ANZ", logo: "/logos/bayer.svg", website: "https://www.bayer.com.au/", description: "Brand new intranet on Sitecore + 3rd party integrations" },
  ];

  return (
    <section className="py-24 bg-surface-low" id="clients">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-mono text-primary-foreground text-2xl font-bold tracking-tight whitespace-nowrap">
            // notable_projects
          </h2>
          <div className="h-px flex-grow bg-border/20" />
        </div>
        <p className="text-muted-foreground text-sm mb-12">
          Organisations I had the privilege of helping with their web implementations and digital transformations.
        </p>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface border border-border/20 rounded-md px-5 py-4 flex flex-col items-center text-center hover:border-primary/40 hover:bg-surface-high transition-all duration-200"
            >
              {/* Top row: hex ID + number */}
              <div className="flex justify-between items-start w-full mb-3">
                <span className="font-mono text-[9px] text-primary-foreground/40 tracking-widest uppercase">
                  ID: 0x{String((index + 1) * 1117).padStart(4, "0")}
                </span>
                <span className="font-mono text-sm font-bold text-muted-foreground/30">
                  {String(index + 1).padStart(2, "0")} /
                </span>
              </div>

              {/* Client name */}
              <h3 className="font-bold text-foreground mb-1.5">
                {client.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                {client.description}
              </p>

              {/* Visit link */}
              <div className="mt-auto flex items-center gap-1 text-xs text-terminal-cyan group-hover:text-terminal-green transition-colors">
                Visit
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsProjects;
