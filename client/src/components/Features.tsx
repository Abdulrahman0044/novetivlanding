import { useState, useEffect } from "react";
import { MessageSquare, BarChart2, SearchCheck } from "lucide-react";

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState<string>("Post Review");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Mock app screenshots for the right side
  const appScreenshots = [
    {
      title: "Post Review",
      content: (
        <div className="bg-[#0c1a30] p-4 rounded-lg border border-[#1e3055]">
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs text-gray-400">9:41</div>
            <div className="text-xs text-white font-semibold">Review the following customer post review for me</div>
          </div>
          <div className="mb-2">
            <div className="text-sm text-white font-medium">Jane fosh</div>
            <p className="text-xs text-gray-300 mt-1">
              I recently purchased this product and I must say, I'm thoroughly impressed! The quality is top-notch and it exceeded my expectations. 
              The features are incredibly useful and user-friendly, making it a breeze to integrate into my daily routine. I highly recommend it
            </p>
          </div>
          <div className="mt-4">
            <div className="text-sm text-white font-medium mb-1">Sentiment Analysis:</div>
            <p className="text-xs text-gray-300">Overall, the sentiment of the review is positive. The reviewer expresses satisfaction and admiration for the product, indicating a favorable sentiment.</p>
            
            <div className="text-sm text-white font-medium mt-3 mb-1">Intent:</div>
            <p className="text-xs text-gray-300">The intent of the review seems to be to inform others about the positive experience the reviewer had with the product and to recommend it to potential buyers</p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1e3055]">
            <div className="bg-[#1e293b] rounded-full py-1.5 px-3 text-xs text-gray-300 w-full text-center">
              Ask me anything...
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Post Generation",
      content: (
        <div className="bg-[#0c1a30] p-4 rounded-lg border border-[#1e3055]">
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs text-gray-400">9:41</div>
            <div className="text-xs text-white font-semibold">Generate post content for product launch</div>
          </div>
          <div className="mb-4">
            <div className="text-sm text-white font-medium">Content Options</div>
            <div className="mt-2 space-y-2">
              <div className="p-2 border border-[#1e3055] rounded-md">
                <p className="text-xs text-gray-300">
                  🎉 Exciting news! Our new product is finally here! Designed with you in mind, it combines innovative features with elegant design. Try it today and experience the difference! #NewLaunch #Innovation
                </p>
              </div>
              <div className="p-2 border border-[#1e3055] rounded-md">
                <p className="text-xs text-gray-300">
                  Introducing our latest creation - the result of months of research and customer feedback. We've addressed your needs and created something truly special. Available now! #ProductLaunch
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs">
            <button className="text-blue-highlight">Regenerate</button>
            <button className="text-blue-highlight">Use this content</button>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1e3055]">
            <div className="bg-[#1e293b] rounded-full py-1.5 px-3 text-xs text-gray-300 w-full text-center">
              Ask me anything...
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Post Analysis",
      content: (
        <div className="bg-[#0c1a30] p-4 rounded-lg border border-[#1e3055]">
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs text-gray-400">9:41</div>
            <div className="text-xs text-white font-semibold">Post performance analytics</div>
          </div>
          <div className="mb-3">
            <div className="text-sm text-white font-medium">Engagement Overview</div>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="p-2 bg-[#1e293b] rounded-md text-center">
                <div className="text-blue-highlight text-sm font-bold">1.2k</div>
                <div className="text-xs text-gray-400">Likes</div>
              </div>
              <div className="p-2 bg-[#1e293b] rounded-md text-center">
                <div className="text-blue-highlight text-sm font-bold">468</div>
                <div className="text-xs text-gray-400">Shares</div>
              </div>
              <div className="p-2 bg-[#1e293b] rounded-md text-center">
                <div className="text-blue-highlight text-sm font-bold">89</div>
                <div className="text-xs text-gray-400">Comments</div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm text-white font-medium mb-2">Audience Insights</div>
            <div className="h-20 bg-[#1e293b] rounded-md flex items-center justify-center">
              <div className="text-xs text-gray-400">Demographic chart visualization</div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-[#1e3055]">
            <div className="bg-[#1e293b] rounded-full py-1.5 px-3 text-xs text-gray-300 w-full text-center">
              Ask me anything...
            </div>
          </div>
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
          <h2 className="text-lg md:text-xl font-bold text-blue-highlight mb-2">Discover</h2>
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
              <div className="pt-6 max-w-xs mx-auto">
                {appScreenshots[currentImageIndex].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
