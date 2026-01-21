import { cn } from "@/lib/utils";

interface PlatformButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function PlatformButton({ id, label, isSelected, onClick }: PlatformButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center p-5 rounded-2xl transition-bounce border-2",
        isSelected
          ? "glass-elevated border-primary/50 text-foreground scale-[1.02] glow-primary"
          : "glass-subtle border-white/30 text-foreground hover:border-primary/30 hover:scale-[1.01]"
      )}
    >
      {isSelected && (
        <div className="absolute top-3 right-3">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
