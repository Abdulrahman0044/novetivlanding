import { Bot, LineChart, MessageSquareText, Calendar } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 section-dark" id="features">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="feature-card h-80 flex items-center justify-center">
            <div className="text-center p-4">
              <Bot className="h-8 w-8 text-[#7c3aed] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">AI Content Creator</h3>
              <p className="text-gray-400 text-sm">
                Generate engaging social media content with our AI engine
              </p>
            </div>
          </div>
          
          <div className="feature-card h-80 flex items-center justify-center">
            <div className="text-center p-4">
              <LineChart className="h-8 w-8 text-[#7c3aed] mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">Strategic Analysis</h3>
              <p className="text-gray-400 text-sm">
                Get insights on your content performance and audience engagement
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
