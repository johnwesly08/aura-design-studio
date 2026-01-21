import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTab: "dashboard" | "create";
  onTabChange: (tab: "dashboard" | "create") => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass-elevated">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg glow-primary">
              <span className="text-primary-foreground font-bold text-sm">CF</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                ContentFlow
              </span>
              <span className="px-2 py-0.5 rounded-lg glass-subtle text-primary text-xs font-semibold">
                AI
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-subtle rounded-2xl p-1.5">
            <button
              onClick={() => onTabChange("dashboard")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-smooth",
                activeTab === "dashboard"
                  ? "glass-elevated text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Dashboard
            </button>
            <button
              onClick={() => onTabChange("create")}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-smooth",
                activeTab === "create"
                  ? "glass-elevated text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Create
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl glass-subtle text-muted-foreground hover:text-foreground transition-smooth">
              <span className="text-sm font-medium">Search</span>
            </button>
            <button className="relative p-2.5 rounded-xl glass-subtle text-muted-foreground hover:text-foreground transition-smooth">
              <span className="text-sm font-medium">Alerts</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </button>
            <div className="ml-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg glow-primary cursor-pointer hover:scale-105 transition-bounce">
              J
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
