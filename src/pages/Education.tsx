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
  AlertTriangle,
  X,
  ArrowLeft
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface Article {
  id: number;
  title: string;
  duration: string;
  language: string;
  audioAvailable: boolean;
  description: string;
  content: string;
}

const Education = () => {
  const { toast } = useToast();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const topicArticles = {
    "Heart Health": [
      {
        id: 1,
        title: "Managing High Blood Pressure",
        duration: "5 min read",
        language: "English, Hindi, Tamil",
        audioAvailable: true,
        description: "Essential tips for controlling hypertension through diet and lifestyle changes.",
        content: "High blood pressure (hypertension) is a leading cause of heart disease. Learn about salt reduction, regular exercise, stress management, and when to take medications. Key points include: monitoring your BP regularly, maintaining a healthy weight, limiting alcohol, and eating potassium-rich foods."
      },
      {
        id: 2,
        title: "Understanding Heart Attack Symptoms",
        duration: "6 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "Recognize early warning signs and know when to seek emergency help.",
        content: "Chest pain is the most common symptom, but heart attacks can also present as shortness of breath, sweating, nausea, or fatigue. Women may experience different symptoms. Learn about risk factors and prevention strategies including regular check-ups and a heart-healthy lifestyle."
      },
      {
        id: 3,
        title: "Cholesterol: What You Need to Know",
        duration: "4 min read",
        language: "English, Hindi, Tamil",
        audioAvailable: true,
        description: "Managing cholesterol levels to prevent heart disease.",
        content: "Understand the difference between good (HDL) and bad (LDL) cholesterol. Learn how to reduce cholesterol through diet, exercise, and medication if needed. Include more fiber, choose lean meats, and limit saturated fats."
      }
    ],
    "Diabetes Care": [
      {
        id: 1,
        title: "Understanding Diabetes",
        duration: "7 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "Learn about blood sugar management, symptoms, and daily care routines.",
        content: "Diabetes is a condition where your body cannot regulate blood sugar levels. Type 1 occurs when the pancreas doesn't produce insulin, while Type 2 is when the body resists insulin. Management involves regular monitoring, medication, diet, and exercise."
      },
      {
        id: 2,
        title: "Blood Sugar Monitoring at Home",
        duration: "5 min read",
        language: "English, Hindi, Telugu",
        audioAvailable: true,
        description: "How to test your blood sugar and interpret results.",
        content: "Use a glucometer to check blood sugar levels as recommended by your doctor. Normal fasting levels are 70-100 mg/dL. Maintain a log to track patterns and discuss with your health worker. Regular monitoring helps adjust diet and medication."
      },
      {
        id: 3,
        title: "Diabetic Diet Guidelines",
        duration: "6 min read",
        language: "English, Hindi",
        audioAvailable: false,
        description: "Foods that help control blood sugar and prevent complications.",
        content: "Choose whole grains, vegetables, lean proteins, and healthy fats. Avoid sugary drinks and refined carbohydrates. Eat smaller portions at regular intervals. Include foods high in fiber like vegetables, beans, and whole grains."
      }
    ],
    "Nutrition": [
      {
        id: 1,
        title: "Nutrition for Rural Communities",
        duration: "4 min read",
        language: "English, Hindi, Telugu",
        audioAvailable: true,
        description: "Affordable and nutritious meal planning with locally available foods.",
        content: "Create balanced meals using local produce. Include cereals (rice, wheat), pulses (dal), vegetables, and affordable protein sources. Plan seasonal meals and use traditional recipes adapted for better nutrition. Teach children about healthy eating habits."
      },
      {
        id: 2,
        title: "Essential Nutrients and Food Sources",
        duration: "6 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "Vitamins, minerals, and proteins your body needs daily.",
        content: "Calcium from milk and leafy greens, iron from spinach and lentils, protein from eggs and beans, vitamins from fruits and vegetables. Understanding these nutrients helps you plan better meals. A balanced diet includes all food groups in right proportions."
      },
      {
        id: 3,
        title: "Food Safety and Hygiene",
        duration: "5 min read",
        language: "English, Hindi, Tamil",
        audioAvailable: false,
        description: "Prevent foodborne illnesses through proper handling and storage.",
        content: "Wash hands before cooking, keep raw and cooked foods separate, store food at proper temperatures, and cook food thoroughly. Clean vegetables and fruits. Use clean water for cooking and drinking. These practices prevent bacterial infections."
      }
    ],
    "Exercise": [
      {
        id: 1,
        title: "Benefits of Regular Exercise",
        duration: "5 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "How physical activity improves your overall health and longevity.",
        content: "Exercise strengthens your heart, improves lung capacity, helps maintain healthy weight, reduces stress, and prevents chronic diseases. Even moderate exercise like 30-minute walks daily can significantly improve health. Start slowly and gradually increase intensity."
      },
      {
        id: 2,
        title: "Simple Home Exercises for All Ages",
        duration: "7 min read",
        language: "English, Hindi, Telugu",
        audioAvailable: true,
        description: "Safe and effective exercises you can do at home without equipment.",
        content: "Walking, stretching, squats, and yoga are excellent home exercises. Even elderly people and those with chronic conditions can benefit from modified exercises. Do warm-up exercises first. Consistency is more important than intensity."
      },
      {
        id: 3,
        title: "Exercise for Weight Management",
        duration: "6 min read",
        language: "English, Hindi",
        audioAvailable: false,
        description: "Combining exercise with diet for healthy weight loss.",
        content: "A combination of cardio and strength training is most effective. Exercise helps burn calories and builds muscle which increases metabolism. Combine with balanced diet for sustained weight loss. Aim for 150 minutes of moderate exercise weekly."
      }
    ],
    "Maternal Health": [
      {
        id: 1,
        title: "Prenatal Care Essentials",
        duration: "8 min read",
        language: "English, Hindi, Tamil",
        audioAvailable: true,
        description: "What every pregnant woman should know about regular check-ups and nutrition.",
        content: "Regular antenatal check-ups help detect complications early. Take iron and folic acid supplements, maintain good nutrition, get adequate rest, and attend vaccination clinics. Learn about danger signs like severe headache, vision problems, or abdominal pain."
      },
      {
        id: 2,
        title: "Nutrition During Pregnancy and Lactation",
        duration: "7 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "Foods and supplements needed for healthy pregnancy and breastfeeding.",
        content: "Increase protein, calcium, and iron intake. Eat diverse foods including vegetables, fruits, whole grains, and protein sources. Stay hydrated. Avoid unsafe foods like raw eggs and unpasteurized dairy. Breastfeeding mothers need extra calories and continue taking nutritional supplements."
      },
      {
        id: 3,
        title: "Postpartum Care and Recovery",
        duration: "6 min read",
        language: "English, Hindi, Telugu",
        audioAvailable: false,
        description: "Caring for yourself after delivery and recognizing warning signs.",
        content: "Rest adequately for proper recovery. Keep birth area clean and dry. Monitor for fever, excessive bleeding, or severe pain - these are danger signs. Practice perineal care, take prescribed medications, and maintain good nutrition to aid recovery."
      }
    ],
    "Preventive Care": [
      {
        id: 1,
        title: "Vaccinations for Every Age",
        duration: "6 min read",
        language: "English, Hindi",
        audioAvailable: true,
        description: "Immunization schedules and importance of vaccines for disease prevention.",
        content: "Follow the government immunization schedule for children and adults. Vaccines prevent serious diseases like measles, polio, tetanus, and influenza. Maintain vaccination records. Get boosters as recommended by your health worker."
      },
      {
        id: 2,
        title: "Regular Health Check-ups",
        duration: "5 min read",
        language: "English, Hindi, Tamil",
        audioAvailable: true,
        description: "Why routine screening and health monitoring is essential.",
        content: "Regular check-ups help detect diseases early when treatment is more effective. Get blood pressure checked, blood tests, and weight monitoring. Adults over 40 should get regular screening for chronic diseases. Keep health records organized."
      },
      {
        id: 3,
        title: "Hygiene and Sanitation Practices",
        duration: "4 min read",
        language: "English, Hindi",
        audioAvailable: false,
        description: "Simple practices that prevent infectious diseases.",
        content: "Wash hands with soap after using bathroom and before eating. Use clean drinking water. Practice open defecation-free (ODF) habits. Keep living areas clean. Maintain personal hygiene including bathing regularly and keeping nails clean."
      }
    ]
  };

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
      id: 1,
      title: "Managing High Blood Pressure",
      category: "Heart Health",
      duration: "5 min read",
      audioAvailable: true,
      language: "English, Hindi, Tamil",
      description: "Essential tips for controlling hypertension through diet and lifestyle changes.",
      content: "High blood pressure (hypertension) is a leading cause of heart disease and stroke. It often has no symptoms, which is why it's called the 'silent killer'. Managing high blood pressure involves lifestyle changes and sometimes medication.\n\nKey strategies include:\n\n1. Reduce Sodium Intake: Limit salt to less than 2,300 mg per day. Use herbs and spices for flavoring instead of salt.\n\n2. Exercise Regularly: Aim for 150 minutes of moderate-intensity aerobic activity per week. This can help lower blood pressure by 5-7 mmHg.\n\n3. Maintain Healthy Weight: Losing just 10 pounds can significantly reduce blood pressure.\n\n4. Manage Stress: Practice relaxation techniques like deep breathing, yoga, or meditation.\n\n5. Eat Potassium-Rich Foods: Include foods like bananas, sweet potatoes, and leafy greens. Potassium helps balance sodium.\n\n6. Monitor Your Blood Pressure: Regular monitoring helps track progress and catch problems early.\n\n7. Limit Alcohol: Excessive alcohol consumption raises blood pressure.\n\n8. Medications: If lifestyle changes aren't enough, your doctor may prescribe medications to help control blood pressure. Always take medications as prescribed."
    },
    {
      id: 2,
      title: "Understanding Diabetes",
      category: "Diabetes Care",
      duration: "7 min read",
      audioAvailable: true,
      language: "English, Hindi",
      description: "Learn about blood sugar management, symptoms, and daily care routines.",
      content: "Diabetes is a chronic disease that affects how your body manages blood glucose (sugar). There are three main types: Type 1, Type 2, and Gestational diabetes.\n\nType 1 Diabetes occurs when the pancreas cannot produce insulin. It usually develops in children and young adults and requires daily insulin injections.\n\nType 2 Diabetes happens when the body cannot use insulin effectively (insulin resistance). It's the most common type and is often linked to lifestyle factors.\n\nSymptoms of diabetes include:\n- Increased thirst and frequent urination\n- Extreme fatigue\n- Unexplained weight loss\n- Blurred vision\n- Slow-healing wounds\n\nManaging Diabetes:\n\n1. Monitor Blood Sugar: Check your blood glucose levels as recommended by your healthcare provider using a glucometer.\n\n2. Eat Healthy: Choose whole grains, vegetables, and lean proteins. Avoid sugary drinks and processed foods.\n\n3. Stay Active: Regular exercise helps improve insulin sensitivity. Aim for at least 30 minutes of activity daily.\n\n4. Take Medications: If prescribed insulin or other medications, take them exactly as directed.\n\n5. Regular Check-ups: Visit your doctor regularly to monitor kidney function, eye health, and foot health.\n\n6. Manage Stress: Stress can affect blood sugar levels.\n\n7. Quit Smoking: Smoking increases the risk of diabetes complications."
    },
    {
      id: 3,
      title: "Nutrition for Rural Communities",
      category: "Nutrition",
      duration: "4 min read",
      audioAvailable: true,
      language: "English, Hindi, Telugu",
      description: "Affordable and nutritious meal planning with locally available foods.",
      content: "Nutrition is crucial for health, but in rural communities, access to diverse food can be limited. However, local and traditional foods can provide excellent nutrition when properly planned.\n\nLocal Foods Rich in Nutrition:\n\n1. Grains: Rice, wheat, millet, and sorghum are excellent sources of carbohydrates and fiber. Choose whole grains when possible.\n\n2. Pulses (Legumes): Dal, beans, and lentils are rich in protein, fiber, and minerals. Combine with grains to create complete proteins.\n\n3. Vegetables: Leafy greens like spinach and cabbage provide iron and vitamins. Root vegetables offer carbohydrates and minerals.\n\n4. Local Fruits: Seasonal fruits provide vitamins and minerals. Mango, guava, and papaya are nutrient-dense.\n\n5. Eggs and Local Poultry: Excellent sources of protein and affordable.\n\nSample Meal Plan:\n\nBreakfast: Whole grain bread or rice with vegetables and eggs\nLunch: Dal with rice or millet, seasonal vegetables, and jaggery for sweetness\nDinner: Vegetable soup or stew with whole grains\nSnacks: Fruits, nuts, or seeds\n\nTips for Better Nutrition:\n- Plan meals seasonally using what's available\n- Include all food groups daily\n- Cook with minimal oil\n- Avoid adding excess salt and sugar\n- Teach children about healthy eating from an early age"
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

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium mb-3 inline-block">
                    {selectedTopic}
                  </span>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{selectedArticle.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{selectedArticle.duration}</span>
                    <span>{selectedArticle.language}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="prose prose-sm max-w-none mb-8">
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                  {selectedArticle.content}
                </p>
              </div>

              <div className="flex gap-3 pt-6 border-t border-border">
                <Button
                  className="flex-1"
                  onClick={() => setSelectedArticle(null)}
                >
                  Close
                </Button>
                {selectedArticle.audioAvailable && (
                  <Button variant="outline" className="flex-1">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Listen to Article
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}

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

        {/* Categories or Topic Articles View */}
        {selectedTopic ? (
          <div className="mb-8">
            <button
              onClick={() => setSelectedTopic(null)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Topics</span>
            </button>

            <h2 className="text-3xl font-bold text-foreground mb-8">{selectedTopic} Articles</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(topicArticles[selectedTopic as keyof typeof topicArticles] || []).map((article) => (
                <Card key={article.id} className="p-6 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      {selectedTopic}
                    </span>
                    {article.audioAvailable && (
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Volume2 className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{article.description}</p>

                  <p className="text-sm text-muted-foreground mb-4 text-justify">{article.content}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{article.duration}</span>
                    <span className="text-xs">{article.language}</span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      className="flex-1"
                      size="sm"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                    {article.audioAvailable && (
                      <Button variant="outline" size="sm">
                        <Volume2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Health Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="p-5 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedTopic(category.title)}
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
        )}

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
