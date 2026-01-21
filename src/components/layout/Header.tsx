import { Sparkles, LayoutDashboard, PenTool, HelpCircle, Bell, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTab: "dashboard" | "create";
  onTabChange: (tab: "dashboard" | "create") => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 glass-elevated border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                ContentFlow
              </span>
              <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary text-xs font-semibold">
                AI
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-muted/50 rounded-xl p-1">
            <button
              onClick={() => onTabChange("dashboard")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-apple",
                activeTab === "dashboard"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => onTabChange("create")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-apple",
                activeTab === "create"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <PenTool className="w-4 h-4" />
              Create
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-apple">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-apple">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button className="relative p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-apple">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="ml-2 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/20 cursor-pointer hover:scale-105 transition-apple">
              J
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
