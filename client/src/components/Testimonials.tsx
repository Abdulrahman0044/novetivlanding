import { useState, useEffect } from "react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Mike Spice",
      role: "Marketing Director",
      text: "Novetiv has transformed the way I manage my daily tasks. The automation features are a game-changer!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      text: "I love how Novetiv streamlines my marketing campaigns. The unified inbox is a lifesaver!",
      rating: 5
    },
    {
      name: "Alex Chen",
      role: "Content Creator",
      text: "Our customer response times have improved dramatically since we started using Novetiv.",
      rating: 4
    },
    {
      name: "Emma Williams",
      role: "Brand Strategist",
      text: "The AI-powered content suggestions have made my job so much easier. Highly recommended!",
      rating: 5
    },
    {
      name: "David Miller",
      role: "Digital Marketing Lead",
      text: "Finally, a tool that understands the complexities of modern social media management.",
      rating: 5
    },
    {
      name: "Lisa Taylor",
      role: "Community Manager",
      text: "The analytics insights have helped us improve our engagement rates significantly.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <i 
            key={index}
            className={`fas fa-star text-sm ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          ></i>
        ))}
      </div>
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-10 md:py-16 section-white mobile-p-reduced" id="reviews">
      <div className="container-custom">
        {/* Header Content */}
        <div className="md:w-1/2 px-2 mb-[5pt]">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-3 text-[#0a1223] tracking-tight">Customer Reviews</h2>
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl px-0">
              Don't just take our word for it - hear what our customers have to say about their experience
            </p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto px-2 mt-[1pt]">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeSlide * 33.33}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-lg p-4 md:p-5 relative shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      {/* Avatar circle */}
                      <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#7c3aed] border-2 border-white shadow-md flex items-center justify-center flex-shrink-0">
                        <span className="text-xs md:text-sm text-white font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#0a1223] text-sm md:text-base leading-tight">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {renderStars(testimonial.rating)}
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 h-[40px]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSlide === index ? 'bg-[#7c3aed] w-4' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`View testimonials page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
