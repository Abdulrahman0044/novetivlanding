import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      text: "\"Novetiv has completely changed how we engage with customers online. We're faster, smarter, and more human.\"",
      stars: 5
    },
    {
      name: "Michael R.",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      text: "\"The AI content suggestions are spot-on for our brand voice. We've saved countless hours while improving engagement.\"",
      stars: 4.5
    },
    {
      name: "Jessica T.",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      text: "\"Sentiment analysis helped us identify issues before they became problems. Our customer satisfaction is up 40%.\"",
      stars: 5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-yellow-400 h-4 w-4" />
          <Star className="absolute top-0 left-0 fill-yellow-400 text-yellow-400 h-4 w-4 overflow-hidden" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear from our users who've scaled their digital presence using Novetiv
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark-card rounded-xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
              <div className="mt-4 flex">
                {renderStars(testimonial.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
