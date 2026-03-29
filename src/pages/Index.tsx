import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import ClientsProjects from "@/components/ClientsProjects";
// import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        {/* <About /> */}
        <Skills />
        {/* <Achievements /> */}
        <Experience />
        <ClientsProjects />
        {/* <Education /> */}
        <Contact />
      </main>
      <footer className="bg-surface-lowest py-8 border-t border-border/20">
        <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          <p className="font-mono text-xs text-muted-foreground/60">
            <span className="text-terminal-green">// EOF</span>
            {"  "}&copy; {new Date().getFullYear()} Edward Khoze
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase text-muted-foreground/60 mr-2">Status</span>
            <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
            <span className="font-mono text-[10px] text-terminal-green">SYSTEM_ONLINE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
