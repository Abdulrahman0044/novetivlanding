import { useState, useEffect } from "react";
import { MessageSquare, BarChart2, SearchCheck } from "lucide-react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<string>("Post Review");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const appScreenshots = [
    {
      title: "Post Review",
      content: (
        <div className="bg-[#0c1a30] rounded-lg border border-[#1e3055] overflow-hidden">
          <img 
            src="/images/Post Review.jpg" 
            alt="Post Review Interface" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )
    },
    {
      title: "Post Generation",
      content: (
        <div className="bg-[#0c1a30] rounded-lg border border-[#1e3055] overflow-hidden">
          <img 
            src="/images/Post Generation.jpg" 
            alt="Post Generation Interface" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )
    },
    {
      title: "Post Analysis",
      content: (
        <div className="bg-[#0c1a30] rounded-lg border border-[#1e3055] overflow-hidden">
          <img 
            src="/images/Post Analytics.jpg" 
            alt="Post Analytics Interface" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      )
    }
  ];

  // Find the index of the currently selected feature
  const selectedFeatureIndex = appScreenshots.findIndex(screenshot => screenshot.title === selectedFeature);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % appScreenshots.length);
      setSelectedFeature(appScreenshots[(currentImageIndex + 1) % appScreenshots.length].title);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentImageIndex, appScreenshots]);

  // Handle feature click
  const handleFeatureClick = (featureName: string) => {
    setSelectedFeature(featureName);
    const index = appScreenshots.findIndex(screenshot => screenshot.title === featureName);
    if (index !== -1) {
      setCurrentImageIndex(index);
    }
  };

  // Features data
  const features = [
    {
      title: "Post Review",
      icon: <MessageSquare className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />,
      description: "Leverage AI-driven insights to review posts and fine-tune your messaging for maximum audience impact"
    },
    {
      title: "Post Generation",
      icon: <SearchCheck className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />,
      description: "Unleash your creativity with instant, personalized content that captures your brand's essence"
    },
    {
      title: "Post Analysis",
      icon: <BarChart2 className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />,
      description: "Dive into post performance with tools that uncover trends, measure engagement, and guide decisions"
    }
  ];

  return (
    <section className="py-10 md:py-16 section-dark mobile-p-reduced" id="features">
      <div className="container-custom">
        <div className="text-left mb-8 md:mb-10 px-2">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-0">Discover</h2>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Novetiv's Features</h3>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl px-0">
            Unlock a suite of smart tools that make content creation effortless and brand engagement meaningful.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-6xl mx-auto mt-8 md:mt-12 px-2">
          {/* Left side - Vertical feature list */}
          <div className="md:w-1/2 lg:w-2/5 space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card p-4 md:p-5 flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedFeature === feature.title ? 'border-blue-highlight' : ''
                }`}
                onClick={() => handleFeatureClick(feature.title)}
              >
                <h4 className={`text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2 ${
                  selectedFeature === feature.title ? 'text-blue-highlight' : 'text-white'
                }`}>
                  <span className={selectedFeature === feature.title ? 'text-blue-highlight' : 'text-blue-highlight'}>
                    {feature.icon}
                  </span>
                  <span>{feature.title}</span>
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right side - Mobile app screenshot */}
          <div className="md:w-1/2 lg:w-3/5">
            <div className="bg-[#0a1223] rounded-lg p-2 md:p-3 border border-[#1e3055] relative">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#1e293b] rounded-full"></div>
              <div className="pt-6 max-w-[280px] mx-auto">
                {appScreenshots[currentImageIndex].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
