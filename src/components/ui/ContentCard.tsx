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
  "LinkedIn": "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20",
  "Twitter / X": "bg-foreground/5 text-foreground border-foreground/10",
  "Instagram": "bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 text-[#E1306C] border-[#E1306C]/20",
  "Blog": "bg-success/10 text-success border-success/20",
};

export function ContentCard({ platform, title, date, views, engagement, delay = 0 }: ContentCardProps) {
  return (
    <div 
      className="group glass-card rounded-2xl p-5 card-interactive animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm",
              platformColors[platform] || "bg-muted text-muted-foreground border-border"
            )}>
              {platform}
            </span>
            <span className="text-xs text-muted-foreground">
              {date}
            </span>
          </div>
          <h4 className="text-base font-medium text-foreground truncate group-hover:text-primary transition-smooth">
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-5 shrink-0">
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-foreground">
              {views}
            </span>
            <span className="text-xs text-muted-foreground">views</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-foreground">
              {engagement}
            </span>
            <span className="text-xs text-muted-foreground">likes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
