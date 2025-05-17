import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="pt-10 pb-20 md:pt-20 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633269540827-728aabbb7646?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')] opacity-10 bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Supercharge Your <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Brand</span> with Smart Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">Where AI Meets Social Media Strategy</p>
          <Button className="bg-gradient-to-r from-primary to-blue-500 px-8 py-6 rounded-full text-white font-medium hover:opacity-90 transition-opacity shadow-lg h-auto">
            Get Started
          </Button>
        </div>
        
        <div className="mt-16 relative max-w-4xl mx-auto">
          <img 
            src="https://pixabay.com/get/g29c6d6670bbebb0f62baa8c28bea746e2421e2a5543b0f4dfb4fe2f577bb7a1b056658ef8c1736110986d5256ee99e5d653a8da69c29e40c0510313ed1e47162_1280.jpg" 
            alt="Novetiv dashboard preview" 
            className="w-full rounded-xl shadow-2xl border border-gray-800" 
          />
          
          <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-dark-surface rounded-lg flex items-center justify-center shadow-lg border border-gray-800 hidden md:flex">
            <div className="text-2xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              <i className="fas fa-rocket"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
