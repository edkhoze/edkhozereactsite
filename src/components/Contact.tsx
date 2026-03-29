import { useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:jobs@edkhoze.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "JOBS@EDKHOZE.COM",
      href: "mailto:jobs@edkhoze.com",
      iconColor: "text-primary",
      hoverBorder: "hover:border-primary/50",
      hoverArrow: "group-hover:text-primary",
    },
    {
      icon: Phone,
      label: "+61 423 632 922",
      href: "tel:+61423632922",
      iconColor: "text-terminal-green",
      hoverBorder: "hover:border-terminal-green/50",
      hoverArrow: "group-hover:text-terminal-green",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN/EDWARDKHOZE",
      href: "https://www.linkedin.com/in/edwardkhoze/",
      iconColor: "text-terminal-cyan",
      hoverBorder: "hover:border-terminal-cyan/50",
      hoverArrow: "group-hover:text-terminal-cyan",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div className="max-w-xl">
            {/* Header */}
            <div className="mb-8">
              <h2 className="font-mono text-terminal-cyan text-xl tracking-tight uppercase mb-4">
                // contact.init()
              </h2>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-terminal-green/10 border border-terminal-green/20">
                <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-terminal-green uppercase tracking-widest">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Contact Links */}
            <div className="space-y-6 mb-12">
              {contactLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center justify-between py-4 border-b border-border/10 ${item.hoverBorder} transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                    <span className="text-lg text-foreground font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-muted-foreground ${item.hoverArrow} transition-colors`}
                  >
                    &rarr;
                  </span>
                </a>
              ))}
            </div>

            {/* Working rights */}
            <div className="mt-4 inline-flex items-center gap-3 px-5 py-3 bg-surface border border-terminal-green/20 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-terminal-green" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-terminal-green" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-terminal-green" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-terminal-green" />

              {/* Australian flag – inline SVG for cross-platform consistency */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-8 h-6 shrink-0">
                <rect width="640" height="480" fill="#00008B"/>
                {/* Union Jack */}
                <g>
                  <path d="M0 0h320v240H0z" fill="#00008B"/>
                  <path d="M0 0l320 240M320 0L0 240" stroke="#fff" strokeWidth="40"/>
                  <path d="M0 0l320 240M320 0L0 240" stroke="#C8102E" strokeWidth="24" clipPath="url(#au-clip)"/>
                  <clipPath id="au-clip"><path d="M160 0H0v120zM160 240H0V120zM160 0h160v120zM160 240h160V120z"/></clipPath>
                  <path d="M0 120h320M160 0v240" stroke="#fff" strokeWidth="48"/>
                  <path d="M0 120h320M160 0v240" stroke="#C8102E" strokeWidth="28"/>
                </g>
                {/* Commonwealth Star */}
                <g fill="#fff">
                  <polygon points="160,360 168,384 192,384 172,398 180,422 160,408 140,422 148,398 128,384 152,384" />
                </g>
                {/* Southern Cross */}
                <g fill="#fff">
                  <polygon points="460,156 464,168 476,168 466,176 470,188 460,180 450,188 454,176 444,168 456,168"/>
                  <polygon points="540,228 544,240 556,240 546,248 550,260 540,252 530,260 534,248 524,240 536,240"/>
                  <polygon points="500,348 504,360 516,360 506,368 510,380 500,372 490,380 494,368 484,360 496,360"/>
                  <polygon points="420,288 424,300 436,300 426,308 430,320 420,312 410,320 414,308 404,300 416,300"/>
                  <polygon points="476,264 479,272 487,272 480,277 483,285 476,280 469,285 472,277 465,272 473,272"/>
                </g>
              </svg>
              <div>
                <span className="font-mono text-[10px] text-terminal-green uppercase tracking-widest block">AUTHORIZED</span>
                <span className="font-mono text-xs text-foreground">Full Working Rights in Australia</span>
              </div>
              <span className="font-mono text-terminal-green text-lg ml-1">✓</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-surface border border-border/20 p-8 relative">
            {/* Window dots */}
            <div className="absolute top-4 right-4 flex gap-1">
              <div className="w-2 h-2 bg-border/30 rounded-full" />
              <div className="w-2 h-2 bg-border/30 rounded-full" />
              <div className="w-2 h-2 bg-border/30 rounded-full" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block font-mono text-[10px] text-terminal-cyan uppercase mb-2">
                  // name_
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="ENTER_NAME"
                  className="w-full bg-transparent border-0 border-b border-border/30 focus:border-terminal-cyan focus:ring-0 text-foreground font-mono text-sm px-0 py-2 placeholder:text-muted-foreground/30 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-[10px] text-terminal-cyan uppercase mb-2">
                  // email_
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="USER@DOMAIN.COM"
                  className="w-full bg-transparent border-0 border-b border-border/30 focus:border-terminal-cyan focus:ring-0 text-foreground font-mono text-sm px-0 py-2 placeholder:text-muted-foreground/30 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-[10px] text-terminal-cyan uppercase mb-2">
                  // message_
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="DESCRIBE_PROJECT_OR_INQUIRY"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-border/30 focus:border-terminal-cyan focus:ring-0 text-foreground font-mono text-sm px-0 py-2 placeholder:text-muted-foreground/30 resize-none outline-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-mono text-sm font-bold py-4 tracking-widest transition-all active:scale-[0.98] flex items-center justify-center gap-4"
              >
                EXECUTE_SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
