import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      
      <footer className="py-6 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 HiredAI
        </p>
      </footer>
    </main>
  );
}
