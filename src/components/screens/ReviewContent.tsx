import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReviewContentProps {
  generatedContent: string;
  onBack: () => void;
  onRegenerate: () => void;
  onFinalize: () => void;
  isRegenerating: boolean;
}

export function ReviewContent({ 
  generatedContent, 
  onBack, 
  onRegenerate, 
  onFinalize,
  isRegenerating 
}: ReviewContentProps) {
  const [refinedContent, setRefinedContent] = useState(generatedContent);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(refinedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6"
      >
        Back to Editor
      </button>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Generated Panel */}
        <div className="glass-elevated rounded-3xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                AI Generated Draft
              </h2>
              <p className="text-sm text-muted-foreground">
                Powered by advanced AI
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-subtle text-primary text-xs font-medium">
              Auto-generated
            </div>
          </div>
          
          <div className={cn(
            "rounded-2xl p-5 min-h-[400px]",
            "glass-input",
            "text-sm leading-relaxed text-foreground whitespace-pre-wrap"
          )}>
            {generatedContent}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              onClick={onRegenerate}
              disabled={isRegenerating}
              className="gap-2 flex-1 glass-subtle border-white/30 hover:border-primary/30"
            >
              {isRegenerating ? "Regenerating..." : "Regenerate"}
            </Button>
          </div>
        </div>

        {/* Human Refinement Panel */}
        <div className="glass-elevated rounded-3xl p-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-foreground">
              Your Refined Version
            </h2>
            <p className="text-sm text-muted-foreground">
              Add your unique voice and style
            </p>
          </div>
          
          <textarea
            value={refinedContent}
            onChange={(e) => setRefinedContent(e.target.value)}
            className={cn(
              "w-full min-h-[400px] rounded-2xl p-5",
              "glass-input",
              "text-sm leading-relaxed text-foreground resize-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40",
              "transition-smooth"
            )}
          />

          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              onClick={handleCopy}
              className="gap-2 glass-subtle border-white/30 hover:border-primary/30"
            >
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button
              onClick={onFinalize}
              className="gap-2 flex-1 shadow-lg glow-primary"
            >
              Finalize Content
            </Button>
          </div>
        </div>
      </div>

      {/* Tip */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Review and personalize before publishing
      </p>
    </div>
  );
}
