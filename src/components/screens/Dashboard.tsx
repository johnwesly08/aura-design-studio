import { FileText, TrendingUp, Zap, BarChart3, Plus, Sparkles } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { ContentCard } from "@/components/ui/ContentCard";
import { Button } from "@/components/ui/button";

interface DashboardProps {
  onCreateClick: () => void;
}

const stats = [
  { label: "Total Content", value: "0", change: "+12%", icon: FileText, iconClassName: "bg-primary/10 text-primary" },
  { label: "Engagement Rate", value: "8.4%", change: "+2.3%", icon: TrendingUp, iconClassName: "bg-violet-500/10 text-violet-500" },
  { label: "Active Platforms", value: "4", change: "100%", icon: Zap, iconClassName: "bg-amber-500/10 text-amber-500" },
  { label: "Avg. Performance", value: "94%", change: "+5.1%", icon: BarChart3, iconClassName: "bg-success/10 text-success" },
];

const recentContent = [
  { platform: "LinkedIn", title: "Product Launch Announcement", date: "2 hours ago", views: "2.4K", engagement: "156" },
  { platform: "Twitter / X", title: "Industry Insights Thread", date: "5 hours ago", views: "1.8K", engagement: "89" },
  { platform: "Instagram", title: "Behind the Scenes", date: "1 day ago", views: "3.2K", engagement: "234" },
  { platform: "Blog", title: "Complete Guide to AI Automation", date: "2 days ago", views: "5.1K", engagement: "412" },
];

export function Dashboard({ onCreateClick }: DashboardProps) {
  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Welcome back
          </h1>
          <p className="text-muted-foreground mt-1">
            Ready to create amazing content today?
          </p>
        </div>
        <Button onClick={onCreateClick} size="lg" className="gap-2 shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          Create Content
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            {...stat}
            delay={index * 50}
          />
        ))}
      </div>

      {/* Recent Content Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            Recent Content
          </h2>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View all
          </button>
        </div>

        {recentContent.length > 0 ? (
          <div className="space-y-3">
            {recentContent.map((content, index) => (
              <ContentCard
                key={content.title}
                {...content}
                delay={index * 50}
              />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border/50 p-12 text-center card-interactive">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No content yet
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Create your first AI-powered content and see it appear here.
            </p>
            <Button onClick={onCreateClick} className="gap-2">
              <Plus className="w-4 h-4" />
              Get Started
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
