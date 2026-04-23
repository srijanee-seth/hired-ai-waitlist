"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Smart Matching",
    description: "AI-powered candidate matching based on job requirements and cultural fit",
  },
  {
    title: "Fast Screening",
    description: "Automated resume screening and candidate ranking in seconds",
  },
  {
    title: "Better Insights",
    description: "Deep candidate analytics and recommendations for informed decisions",
  },
  {
    title: "Seamless Integration",
    description: "Connect with your existing ATS and recruitment tools",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge>Platform</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Why HiredAI?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the power of artificial intelligence in recruitment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
