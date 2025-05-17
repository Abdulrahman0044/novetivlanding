export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike spice",
      text: "Novetiv has transformed the way I manage my daily tasks. The automation features are a game-changer!"
    },
    {
      name: "MarketingGuru101",
      text: "I love how Novetiv streamlines my marketing campaigns. The unified inbox is a lifesaver!"
    },
    {
      name: "BizBrainiac",
      text: "Our customer response times have improved dramatically since we started using Novetiv."
    }
  ];

  return (
    <section className="py-10 md:py-16 section-white mobile-p-reduced" id="reviews">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#0a1223]">Customer Reviews</h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto px-2">
            Don't just take our word hear what people are saying
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto px-2 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg p-4 md:p-6 relative shadow-lg border border-gray-100 ${
                index === 2 ? 'sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:mx-0 md:max-w-none' : ''
              }`}
            >
              {/* Small avatar circle in top left corner */}
              <div className="absolute -top-3 -left-3 w-8 md:w-10 h-8 md:h-10 rounded-full bg-[#7c3aed] border-2 border-white shadow-md flex items-center justify-center">
                <span className="text-[10px] md:text-xs text-white font-bold">{testimonial.name.charAt(0)}</span>
              </div>
              
              <div className="pt-2 md:pt-3">
                <h4 className="font-medium text-[#0a1223] text-xs md:text-sm mb-2 md:mb-3">{testimonial.name}</h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  {/* Show full text on larger screens, truncated on mobile */}
                  <span className="hidden md:inline">{testimonial.text}</span>
                  <span className="md:hidden">
                    {testimonial.text.length > 80 
                      ? testimonial.text.substring(0, 80) + '...'
                      : testimonial.text
                    }
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
