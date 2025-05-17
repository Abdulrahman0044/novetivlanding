import { Bot, LineChart, Sparkles, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 section-dark" id="features">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Feature card 1 - just like in the screenshot */}
          <div className="feature-card h-80 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="bg-[#1e2c3c] w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <Bot className="h-8 w-8 text-[#7c3aed]" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">AI Content Creator</h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                Generate engaging social media content with our AI engine that adapts to your brand voice
              </p>
            </div>
          </div>
          
          {/* Feature card 2 - just like in the screenshot */}
          <div className="feature-card h-80 flex items-center justify-center">
            <div className="text-center p-6">
              <div className="bg-[#1e2c3c] w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center">
                <LineChart className="h-8 w-8 text-[#7c3aed]" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Strategic Analysis</h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                Get deep insights on your content performance and audience engagement metrics
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a 
            href="#"
            className="text-blue-highlight border border-[#1e3055] rounded-md py-2 px-4 text-sm hover:bg-[#0c1a30] transition-colors duration-300"
          >
            View Features
          </a>
        </div>
      </div>
    </section>
  );
}
