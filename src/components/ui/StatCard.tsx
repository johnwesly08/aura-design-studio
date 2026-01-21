import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  color?: string;
  delay?: number;
}

export function StatCard({ label, value, change, color = "primary", delay = 0 }: StatCardProps) {
  const colorClasses: Record<string, string> = {
    primary: "from-primary/20 to-primary/5",
    violet: "from-violet-500/20 to-violet-500/5",
    amber: "from-amber-500/20 to-amber-500/5",
    success: "from-success/20 to-success/5",
  };

  return (
    <div 
      className={cn(
        "group glass-card rounded-3xl p-6 card-interactive animate-fade-in-up overflow-hidden relative"
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Gradient accent */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-60 transition-smooth group-hover:opacity-80",
        colorClasses[color] || colorClasses.primary
      )} />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm font-medium text-muted-foreground">
            {label}
          </p>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold glass-subtle text-success">
            {change}
          </span>
        </div>
        <p className="text-4xl font-semibold tracking-tight text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}
