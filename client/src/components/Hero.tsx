import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;
  
  // Auto-scroll feature slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Scroll to the selected slide
  useEffect(() => {
    const slider = document.getElementById('feature-slider');
    if (slider) {
      const slideWidth = slider.offsetWidth / (slider.children.length > 1 ? 1.5 : 1);
      slider.scrollTo({
        left: slideWidth * activeSlide,
        behavior: 'smooth'
      });
    }
  }, [activeSlide]);
  
  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section className="py-16 md:py-20 section-dark relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeInUp">
          <h1 className="heading-large mb-6">
            Supercharge Your Brand<br />with Smart Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">Where AI Meets Social Media Strategy</p>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block py-3 px-8 rounded-full"
          >
            Try Novetiv for free
          </a>
        </div>
        
        {/* Features slider section */}
        <div className="mt-20 max-w-4xl mx-auto animate-fadeInUp delay-200">
          <div className="bg-[#0c1a30] rounded-xl border border-[#1e3055] p-6 overflow-hidden shadow-xl">
            <h3 className="text-center text-white text-xl font-medium mb-8">Features</h3>
            
            <div id="feature-slider" className="flex flex-nowrap overflow-x-auto pb-4 feature-slider space-x-6">
              {/* Feature slide 1 */}
              <div className={`snap-center flex-none w-64 feature-card p-4 flex flex-col items-center feature-slide ${activeSlide === 0 ? 'border-[#7c3aed]' : ''}`}>
                <div className="bg-[#1e2c3c] w-14 h-14 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium mb-2 text-center">AI-powered content generation</h4>
                <p className="text-gray-400 text-xs text-center">Create compelling content instantly with our AI algorithm</p>
              </div>
              
              {/* Feature slide 2 */}
              <div className={`snap-center flex-none w-64 feature-card p-4 flex flex-col items-center feature-slide ${activeSlide === 1 ? 'border-[#7c3aed]' : ''}`}>
                <div className="bg-[#1e2c3c] w-14 h-14 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium mb-2 text-center">Sentiment Analysis of Customer feedback</h4>
                <p className="text-gray-400 text-xs text-center">Understand customer emotions with AI-powered analysis</p>
              </div>
              
              {/* Feature slide 3 */}
              <div className={`snap-center flex-none w-64 feature-card p-4 flex flex-col items-center feature-slide ${activeSlide === 2 ? 'border-[#7c3aed]' : ''}`}>
                <div className="bg-[#1e2c3c] w-14 h-14 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium mb-2 text-center">Multi-platform Social Scheduling</h4>
                <p className="text-gray-400 text-xs text-center">Schedule content across all platforms from one dashboard</p>
              </div>
              
              {/* Feature slide 4 */}
              <div className={`snap-center flex-none w-64 feature-card p-4 flex flex-col items-center feature-slide ${activeSlide === 3 ? 'border-[#7c3aed]' : ''}`}>
                <div className="bg-[#1e2c3c] w-14 h-14 rounded-full mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="text-white text-sm font-medium mb-2 text-center">Smart response suggestions</h4>
                <p className="text-gray-400 text-xs text-center">Respond to comments and messages with AI-powered suggestions</p>
              </div>
            </div>
            
            {/* Scroll indicators/buttons */}
            <div className="flex justify-center space-x-3 mt-6">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-[#7c3aed] w-5' : 'bg-[#1e3055]'
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
