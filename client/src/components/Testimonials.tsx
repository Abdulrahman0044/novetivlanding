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
    <section className="py-16 section-dark" id="reviews">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-white">Customer Reviews</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Don't just take our word hear what people are saying
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card p-4 relative">
              {/* Small avatar circle in top left corner */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[#1e3055] border-2 border-[#0c1a30] flex items-center justify-center">
                <span className="text-xs text-blue-highlight font-bold">{testimonial.name.charAt(0)}</span>
              </div>
              
              <div className="pt-4">
                <h4 className="font-medium text-white text-sm mb-3">{testimonial.name}</h4>
                <p className="text-gray-300 text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
