import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  iconClassName?: string;
  delay?: number;
}

export function StatCard({ label, value, change, icon: Icon, iconClassName, delay = 0 }: StatCardProps) {
  return (
    <div 
      className="group bg-card rounded-2xl p-6 card-interactive border border-border/50 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          iconClassName || "bg-primary/10 text-primary"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
          {change}
        </span>
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </p>
        <p className="text-sm text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}
