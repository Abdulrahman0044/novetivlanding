import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-20 section-dark relative">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="heading-large mb-6">
            Supercharge Your <span className="text-blue-highlight">Brand</span> with Smart Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">Where AI Meets Social Media Strategy</p>
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block py-3 px-8 rounded-md"
          >
            Get Started
          </a>
        </div>
        
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="bg-[#0c1a30] p-8 rounded-xl border border-[#1e3055]">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-[#1e3055] rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-[#7c3aed] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
