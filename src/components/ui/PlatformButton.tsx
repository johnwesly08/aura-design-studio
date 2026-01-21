import { Check, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformButtonProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

export function PlatformButton({ id, label, icon: Icon, isSelected, onClick }: PlatformButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center p-5 rounded-2xl transition-apple border-2",
        isSelected
          ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
          : "bg-card text-foreground border-border/50 hover:border-primary/30 hover:bg-accent/50"
      )}
    >
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center">
            <Check className="w-3 h-3" />
          </div>
        </div>
      )}
      <Icon className={cn("w-7 h-7 mb-2", isSelected ? "" : "text-muted-foreground")} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
