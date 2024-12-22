'use client'

import { cn } from "@/lib/utils"

interface FeatureCard {
  title: string
  description: string
  gradient: string
}

const features: FeatureCard[] = [
  {
    title: "Lightning Fast",
    description: "Built with performance in mind. Every interaction is optimized for speed.",
    gradient: "from-orange-400 to-orange-500",
  },
  {
    title: "Extensible",
    description: "Create custom extensions to automate your workflows.",
    gradient: "from-blue-400 to-blue-500",
  },
  {
    title: "Beautiful UI",
    description: "Modern and clean interface that feels native to macOS.",
    gradient: "from-pink-400 to-pink-500",
  },
]

export function FeatureCards() {
  return (
    <div className="container max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="group relative">
            {/* Animated border gradient */}
            <div
              className="absolute -inset-[1px] rounded-lg bg-gradient-to-r opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"
              style={{
                backgroundImage: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary)))`,
              }}
            />
            
            {/* Card content */}
            <div className="relative rounded-lg bg-card/50 p-6 backdrop-blur-sm border border-border/50">
              <div className={cn(
                "size-12 rounded-lg bg-gradient-to-br mb-4",
                feature.gradient
              )} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

