import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    // { label: "ABOUT",        id: "about" },
    { label: "SKILLS",       id: "skills" },
    // { label: "ACHIEVEMENTS", id: "achievements" },
    { label: "EXPERIENCE",   id: "experience" },
    { label: "PROJECTS",     id: "clients" },
    { label: "CONTACT",      id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-base font-bold text-foreground hover:text-primary transition-colors tracking-tight"
            >
              EK /&gt;
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-mono text-xs text-muted-foreground hover:text-secondary transition-colors group"
                >
                  <span className="text-terminal-green mr-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="group-hover:text-secondary transition-colors">
                    /{item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: >_ terminal button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden lg:flex items-center justify-center w-9 h-9 font-mono text-xs font-bold text-muted-foreground hover:text-secondary border border-border/40 hover:border-secondary/40 transition-colors"
                title="Contact"
              >
                &gt;_
              </button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden font-mono"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-[16px] lg:hidden">
          <div className="flex flex-col justify-center h-full px-8 gap-2 pt-16">
            <p className="font-mono text-xs text-muted-foreground mb-6">
              // navigation
            </p>
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-mono text-left text-lg text-foreground hover:text-secondary transition-colors py-3 border-b border-border/30"
              >
                <span className="text-terminal-green text-sm mr-2">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-muted-foreground">/{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
