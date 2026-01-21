import { Eye, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  platform: string;
  title: string;
  date: string;
  views: string;
  engagement: string;
  delay?: number;
}

const platformColors: Record<string, string> = {
  "LinkedIn": "bg-[#0A66C2]/10 text-[#0A66C2]",
  "Twitter / X": "bg-foreground/10 text-foreground",
  "Instagram": "bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 text-[#E1306C]",
  "Blog": "bg-success/10 text-success",
};

export function ContentCard({ platform, title, date, views, engagement, delay = 0 }: ContentCardProps) {
  return (
    <div 
      className="group bg-card rounded-2xl p-5 card-interactive border border-border/50 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              platformColors[platform] || "bg-muted text-muted-foreground"
            )}>
              {platform}
            </span>
            <span className="text-xs text-muted-foreground">
              {date}
            </span>
          </div>
          <h4 className="text-base font-medium text-foreground truncate group-hover:text-primary transition-colors">
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-1.5">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              {views}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">
              {engagement}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
