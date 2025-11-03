import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VoiceInput from "@/components/VoiceInput";
import { 
  BookOpen, 
  Play,
  Volume2,
  Heart,
  Droplet,
  Apple,
  Activity,
  Baby,
  Sun,
  Shield,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Education = () => {
  const { toast } = useToast();

  const handleVoiceQuery = (text: string) => {
    toast({
      title: "Searching health topics",
      description: `Looking for information about: "${text}"`,
    });
  };

  const categories = [
    { 
      icon: Heart, 
      title: "Heart Health", 
      color: "text-emergency", 
      bg: "bg-emergency/10",
      articles: 12 
    },
    { 
      icon: Droplet, 
      title: "Diabetes Care", 
      color: "text-primary", 
      bg: "bg-primary/10",
      articles: 15 
    },
    { 
      icon: Apple, 
      title: "Nutrition", 
      color: "text-secondary", 
      bg: "bg-secondary/10",
      articles: 20 
    },
    { 
      icon: Activity, 
      title: "Exercise", 
      color: "text-accent", 
      bg: "bg-accent/10",
      articles: 18 
    },
    { 
      icon: Baby, 
      title: "Maternal Health", 
      color: "text-warning", 
      bg: "bg-warning/10",
      articles: 10 
    },
    { 
      icon: Shield, 
      title: "Preventive Care", 
      color: "text-info", 
      bg: "bg-info/10",
      articles: 14 
    },
  ];

  const featuredArticles = [
    {
      title: "Managing High Blood Pressure",
      category: "Heart Health",
      duration: "5 min read",
      audioAvailable: true,
      language: "English, Hindi, Tamil",
      description: "Essential tips for controlling hypertension through diet and lifestyle changes."
    },
    {
      title: "Understanding Diabetes",
      category: "Diabetes Care",
      duration: "7 min read",
      audioAvailable: true,
      language: "English, Hindi",
      description: "Learn about blood sugar management, symptoms, and daily care routines."
    },
    {
      title: "Nutrition for Rural Communities",
      category: "Nutrition",
      duration: "4 min read",
      audioAvailable: true,
      language: "English, Hindi, Telugu",
      description: "Affordable and nutritious meal planning with locally available foods."
    },
  ];

  const dailyTips = [
    {
      icon: Sun,
      tip: "Drink 8 glasses of water daily",
      category: "Wellness"
    },
    {
      icon: Apple,
      tip: "Include more fruits and vegetables in your diet",
      category: "Nutrition"
    },
    {
      icon: Activity,
      tip: "Walk for at least 30 minutes daily",
      category: "Exercise"
    },
  ];

  const emergencyInfo = [
    { 
      symptom: "Chest Pain", 
      action: "Call emergency immediately", 
      severity: "Critical" 
    },
    { 
      symptom: "Severe Headache", 
      action: "Seek immediate medical attention", 
      severity: "Urgent" 
    },
    { 
      symptom: "High Fever (>103°F)", 
      action: "Contact health worker", 
      severity: "Important" 
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-8">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-10 h-10 text-accent" />
            <h1 className="text-4xl font-bold text-foreground">Health Education</h1>
          </div>
          <p className="text-muted-foreground text-lg">Learn about health topics in your language</p>
        </div>

        {/* Voice Search */}
        <Card className="p-6 mb-8 bg-gradient-secondary shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold text-white">Ask About Health Topics</h2>
          </div>
          <p className="text-white/90 mb-4">Voice-enabled search in local languages</p>
          <VoiceInput 
            onTranscript={handleVoiceQuery}
            placeholder="Ask: 'How to control diabetes?' or 'Healthy diet tips'..."
          />
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Health Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 ${category.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <h3 className="font-bold text-foreground mb-1">{category.title}</h3>
                <p className="text-xs text-muted-foreground">{category.articles} articles</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex gap-2">
                    {article.audioAvailable && (
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Volume2 className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{article.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span>{article.duration}</span>
                  <span className="text-xs">{article.language}</span>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" size="sm">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read
                  </Button>
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Health Tips */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Sun className="w-6 h-6 text-accent" />
              Daily Health Tips
            </h2>
            <div className="space-y-4">
              {dailyTips.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-accent/5 to-transparent">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-1">{item.tip}</p>
                    <span className="text-xs text-muted-foreground">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              Get More Tips
            </Button>
          </Card>

          {/* Emergency Warning Signs */}
          <Card className="p-6 bg-emergency/5 border-emergency/20">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-emergency" />
              Warning Signs
            </h2>
            <div className="space-y-3">
              {emergencyInfo.map((info, index) => (
                <div key={index} className="p-4 rounded-lg bg-card border-2 border-border">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-foreground">{info.symptom}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      info.severity === 'Critical' ? 'bg-emergency/10 text-emergency' :
                      info.severity === 'Urgent' ? 'bg-warning/10 text-warning' :
                      'bg-info/10 text-info'
                    }`}>
                      {info.severity}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{info.action}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Offline Access Info */}
        <Card className="p-6 bg-secondary/5 border-secondary/20">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-secondary" />
            Offline Learning
          </h2>
          <p className="text-muted-foreground mb-4">
            All health education content is cached for offline access. Audio versions can be downloaded for listening without internet.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-secondary" />
              </div>
              <span>Text articles saved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-secondary" />
              </div>
              <span>Audio versions available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                <Play className="w-4 h-4 text-secondary" />
              </div>
              <span>Video tutorials cached</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Education;
