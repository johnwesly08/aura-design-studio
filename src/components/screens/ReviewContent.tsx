import { useState } from "react";
import { ArrowLeft, RefreshCw, Check, Sparkles, Copy, Download, Loader2 } from "lucide-react";
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
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Editor
      </button>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Generated Panel */}
        <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-card">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                AI Generated Draft
              </h2>
              <p className="text-sm text-muted-foreground">
                Powered by advanced AI
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              <Sparkles className="w-3 h-3" />
              Auto-generated
            </div>
          </div>
          
          <div className={cn(
            "rounded-2xl p-5 min-h-[400px]",
            "bg-muted/50 border border-border/50",
            "text-sm leading-relaxed text-foreground whitespace-pre-wrap"
          )}>
            {generatedContent}
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              onClick={onRegenerate}
              disabled={isRegenerating}
              className="gap-2 flex-1"
            >
              {isRegenerating ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              Regenerate
            </Button>
          </div>
        </div>

        {/* Human Refinement Panel */}
        <div className="bg-card rounded-3xl border border-border/50 p-6 shadow-card">
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
              "bg-muted/50 border border-border/50",
              "text-sm leading-relaxed text-foreground resize-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
              "transition-apple"
            )}
          />

          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              onClick={handleCopy}
              className="gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </Button>
            <Button
              onClick={onFinalize}
              className="gap-2 flex-1 shadow-lg shadow-primary/20"
            >
              <Check className="w-4 h-4" />
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
