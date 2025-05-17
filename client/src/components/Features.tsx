import { MessageSquare, BarChart2, SearchCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 section-dark" id="features">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-blue-highlight mb-2">Discover</h2>
          <h3 className="text-2xl font-bold text-white mb-4">Novetiv's Features</h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Unlock a suite of smart tools that make content creation effortless and brand engagement meaningful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {/* Feature card 1 - Post Review */}
          <div className="feature-card p-6 flex flex-col">
            <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-blue-highlight" />
              Post Review
            </h4>
            <p className="text-gray-400 text-sm flex-grow">
              Leverage AI-driven insights to review posts and fine-tune your messaging for maximum audience impact
            </p>
          </div>
          
          {/* Feature card 2 - Post Generation */}
          <div className="feature-card p-6 flex flex-col">
            <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
              <SearchCheck className="h-5 w-5 text-blue-highlight" />
              Post Generation
            </h4>
            <p className="text-gray-400 text-sm flex-grow">
              Unleash your creativity with instant, personalized content that captures your brand's essence
            </p>
          </div>
          
          {/* Feature card 3 - Post Analysis */}
          <div className="feature-card p-6 flex flex-col">
            <h4 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-blue-highlight" />
              Post Analysis
            </h4>
            <p className="text-gray-400 text-sm flex-grow">
              Dive into post performance with tools that uncover trends, measure engagement, and guide decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
