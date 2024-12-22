export function TerminalWindow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent" />
      <div className="relative p-4">
        {children}
      </div>
    </div>
  )
}

