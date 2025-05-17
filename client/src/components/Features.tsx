import { MessageSquare, BarChart2, SearchCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="py-10 md:py-16 section-dark mobile-p-reduced" id="features">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-blue-highlight mb-2">Discover</h2>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Novetiv's Features</h3>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto px-2">
            Unlock a suite of smart tools that make content creation effortless and brand engagement meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto mt-8 md:mt-16 px-2">
          {/* Feature card 1 - Post Review */}
          <div className="feature-card p-4 md:p-6 flex flex-col">
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white flex items-center gap-2">
              <MessageSquare className="h-4 w-4 md:h-5 md:w-5 text-blue-highlight flex-shrink-0" />
              <span>Post Review</span>
            </h4>
            <p className="text-gray-400 text-xs md:text-sm flex-grow">
              Leverage AI-driven insights to review posts and fine-tune your messaging for maximum audience impact
            </p>
          </div>
          
          {/* Feature card 2 - Post Generation */}
          <div className="feature-card p-4 md:p-6 flex flex-col">
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white flex items-center gap-2">
              <SearchCheck className="h-4 w-4 md:h-5 md:w-5 text-blue-highlight flex-shrink-0" />
              <span>Post Generation</span>
            </h4>
            <p className="text-gray-400 text-xs md:text-sm flex-grow">
              Unleash your creativity with instant, personalized content that captures your brand's essence
            </p>
          </div>
          
          {/* Feature card 3 - Post Analysis */}
          <div className="feature-card p-4 md:p-6 flex flex-col sm:col-span-2 md:col-span-1 sm:mx-auto md:mx-0 sm:max-w-md md:max-w-none">
            <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-white flex items-center gap-2">
              <BarChart2 className="h-4 w-4 md:h-5 md:w-5 text-blue-highlight flex-shrink-0" />
              <span>Post Analysis</span>
            </h4>
            <p className="text-gray-400 text-xs md:text-sm flex-grow">
              Dive into post performance with tools that uncover trends, measure engagement, and guide decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
