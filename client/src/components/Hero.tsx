import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-20 section-dark relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="max-w-xl text-center md:text-left mb-12 md:mb-0">
            <h1 className="heading-large mb-6">
              Supercharge Your Brand<br />with Smart Content
            </h1>
            <div className="mt-10">
              <a 
                href="https://play.google.com/store" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block py-3 px-8 rounded-full"
              >
                Try Novetiv for free
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Mobile App Preview - Replace with actual mobile app image */}
              <div className="bg-[#0c1a30] rounded-3xl border border-[#1e3055] overflow-hidden shadow-xl w-64 h-96">
                <div className="bg-black h-5 flex items-center justify-center rounded-t-3xl">
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                <div className="p-2 text-center">
                  <div className="text-xs text-gray-400">9:41</div>
                  
                  <div className="mt-4 text-xs text-white font-medium">Features</div>
                  <div className="text-[10px] text-blue-400 mt-1">AI-powered content generation</div>
                  
                  <div className="mt-8 bg-[#101827] rounded-lg p-3 mx-auto w-5/6">
                    <div className="flex justify-end">
                      <div className="text-[10px] text-white">Review the following customer post review for me</div>
                    </div>
                    
                    <div className="mt-3 text-left">
                      <div className="text-[10px] text-white font-medium">Jane fosh</div>
                      <div className="text-[8px] text-gray-400 mt-1">
                        I recently purchased this product and I must say, I'm thoroughly impressed! The quality is top-notch and it exceeded my expectations...
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-[10px] text-white font-medium">Sentiment Analysis:</div>
                        <div className="text-[8px] text-gray-400 mt-1">
                          Overall, the sentiment of the review is positive. The reviewer expresses satisfaction...
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center justify-center">
                    <div className="h-6 w-full bg-[#101827] rounded-full px-2 flex items-center">
                      <span className="text-[8px] text-gray-400">Ask me anything...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
