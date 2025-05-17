import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;
  
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI-powered content generation",
      description: "Create compelling content instantly with our AI algorithm"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Sentiment Analysis of Customer feedback",
      description: "Understand customer emotions with AI-powered analysis"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Multi-platform Social Scheduling",
      description: "Schedule content across all platforms from one dashboard"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      title: "Smart response suggestions",
      description: "Respond to comments and messages with AI-powered suggestions"
    }
  ];
  
  // Auto-scroll feature slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-12 md:py-20 section-dark relative mobile-p-reduced">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 animate-fadeInUp">
          <h1 className="heading-large mb-4 md:mb-6">
            Supercharge Your Brand<br className="hidden xs:block" />with Smart Content
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-10">Where AI Meets Social Media Strategy</p>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block py-2 md:py-3 px-6 md:px-8 rounded-full text-sm md:text-base"
          >
            Try Novetiv for free
          </a>
        </div>
        
        {/* Features slider section - showing one feature at a time */}
        <div className="mt-12 md:mt-20 max-w-3xl mx-auto animate-fadeInUp delay-200">
          <div className="bg-[#0c1a30] rounded-xl border border-[#1e3055] p-4 sm:p-6 md:p-8 overflow-hidden shadow-xl">
            <h3 className="text-center text-white text-lg md:text-xl font-medium mb-4 md:mb-8">Features</h3>
            
            {/* Single feature display */}
            <div className="relative min-h-[200px] mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                    index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="text-center p-6">
                    <div className="bg-[#1e2c3c] w-16 h-16 rounded-full mb-6 mx-auto flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h4 className="text-white text-lg font-medium mb-3 text-center">{feature.title}</h4>
                    <p className="text-gray-400 text-sm text-center max-w-md mx-auto">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dot indicators/buttons */}
            <div className="flex justify-center space-x-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-[#7c3aed] w-6' : 'bg-[#1e3055]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
