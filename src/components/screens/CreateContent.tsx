import { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Loader2, Linkedin, Twitter, Instagram, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformButton } from "@/components/ui/PlatformButton";
import { cn } from "@/lib/utils";

interface CreateContentProps {
  onBack: () => void;
  onGenerate: (intent: string, platforms: string[]) => void;
  isGenerating: boolean;
}

const platforms = [
  { id: "twitter", label: "Twitter / X", icon: Twitter },
  { id: "linkedin", label: "LinkedIn", icon: Linkedin },
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "blog", label: "Blog Post", icon: BookOpen },
];

export function CreateContent({ onBack, onGenerate, isGenerating }: CreateContentProps) {
  const [intent, setIntent] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const canGenerate = intent.trim().length > 0 && selectedPlatforms.length > 0;

  const handleGenerate = () => {
    if (canGenerate) {
      onGenerate(intent, selectedPlatforms);
    }
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      {/* Badge */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">AI-Powered Content Engine</span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-3">
          What would you like to share?
        </h1>
        <p className="text-lg text-muted-foreground">
          Describe your idea. We'll adapt it intelligently for each platform.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-card rounded-3xl border border-border/50 p-8 shadow-card">
        {/* Textarea */}
        <div className="mb-8">
          <textarea
            value={intent}
            onChange={(e) => setIntent(e.target.value)}
            placeholder="Enter your content idea, announcement, or message..."
            rows={5}
            className={cn(
              "w-full px-5 py-4 rounded-2xl resize-none",
              "bg-muted/50 border border-border/50",
              "text-foreground placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30",
              "transition-apple"
            )}
          />
          <div className="flex justify-end mt-2">
            <span className="text-xs text-muted-foreground">
              {intent.length} characters
            </span>
          </div>
        </div>

        {/* Platform Selection */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-foreground mb-4">
            Target Platforms
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {platforms.map((platform) => (
              <PlatformButton
                key={platform.id}
                {...platform}
                isSelected={selectedPlatforms.includes(platform.id)}
                onClick={() => togglePlatform(platform.id)}
              />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm">Be specific about your audience for better results</span>
          </div>
          <Button
            onClick={handleGenerate}
            disabled={!canGenerate || isGenerating}
            size="lg"
            className="gap-2 shadow-lg shadow-primary/20"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Content
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
