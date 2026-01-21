import { useState, useCallback } from "react";
import { Header } from "@/components/layout/Header";
import { Dashboard } from "@/components/screens/Dashboard";
import { CreateContent } from "@/components/screens/CreateContent";
import { ReviewContent } from "@/components/screens/ReviewContent";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

type Screen = "dashboard" | "create" | "review";

const generateDraft = (intent: string, platforms: string[]): string => {
  const platformStr = platforms.join(", ");
  return `Announcing: ${intent}

This milestone represents months of dedicated work and innovation. Our team has been focused on delivering real value to our community.

Key Highlights:
- Customer-centric innovation at scale
- Data-driven decision making  
- Sustainable growth mindset

What are your thoughts on this development?

Platforms: ${platformStr}

#Innovation #Leadership #GrowthMindset`;
};

export default function Index() {
  const [screen, setScreen] = useState<Screen>("dashboard");
  const [activeTab, setActiveTab] = useState<"dashboard" | "create">("dashboard");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleTabChange = useCallback((tab: "dashboard" | "create") => {
    setActiveTab(tab);
    setScreen(tab);
  }, []);

  const handleCreateClick = useCallback(() => {
    setActiveTab("create");
    setScreen("create");
  }, []);

  const handleBackToDashboard = useCallback(() => {
    setActiveTab("dashboard");
    setScreen("dashboard");
  }, []);

  const handleBackToCreate = useCallback(() => {
    setScreen("create");
  }, []);

  const handleGenerate = useCallback((intent: string, platforms: string[]) => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const draft = generateDraft(intent, platforms);
      setGeneratedContent(draft);
      setIsGenerating(false);
      setScreen("review");
      toast.success("Content generated successfully");
    }, 2000);
  }, []);

  const handleRegenerate = useCallback(() => {
    setIsRegenerating(true);
    
    setTimeout(() => {
      setGeneratedContent(prev => 
        `Fresh perspective:\n\n${prev.split('\n').slice(2).join('\n')}\n\n[Regenerated with enhanced storytelling]`
      );
      setIsRegenerating(false);
      toast.success("Content regenerated");
    }, 1500);
  }, []);

  const handleFinalize = useCallback(() => {
    toast.success("Content finalized and ready to publish");
    setScreen("dashboard");
    setActiveTab("dashboard");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {screen === "dashboard" && (
          <Dashboard onCreateClick={handleCreateClick} />
        )}
        
        {screen === "create" && (
          <CreateContent
            onBack={handleBackToDashboard}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        )}
        
        {screen === "review" && (
          <ReviewContent
            generatedContent={generatedContent}
            onBack={handleBackToCreate}
            onRegenerate={handleRegenerate}
            onFinalize={handleFinalize}
            isRegenerating={isRegenerating}
          />
        )}
      </main>
      
      <Toaster position="bottom-right" />
    </div>
  );
}
