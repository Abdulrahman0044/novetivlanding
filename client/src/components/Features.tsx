import { Bot, LineChart, MessageSquareText, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Content Generation",
      description: "Generate creative, on-brand content with just a few clicks. Save time and maintain consistency."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Sentiment Analysis",
      description: "Automatically analyze customer feedback to understand sentiment and improve engagement."
    },
    {
      icon: <MessageSquareText className="h-6 w-6" />,
      title: "Smart Response Suggestions",
      description: "Get AI-powered suggestions for responding to comments and messages across platforms."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Multi-Platform Scheduling",
      description: "Plan and schedule your content across multiple social platforms from a single dashboard."
    }
  ];

  return (
    <section className="py-16 md:py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Discover Novetiv's Features</h2>
          <p className="text-lg text-gray-300">
            Unlock a suite of smart tools that make content creation effortless and brand engagement meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-card rounded-xl p-6 border border-gray-800">
              <div className="flex items-start">
                <div className="mr-4 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-primary to-blue-500 px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
}
