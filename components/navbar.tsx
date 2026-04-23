"use client";

import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg" />
        <span className="font-bold text-lg">HiredAI</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">About</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}
