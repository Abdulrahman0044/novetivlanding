import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Marketing Director",
      text: "\"Novetiv has completely changed how we engage with customers online. We're faster, smarter, and more human.\"",
      stars: 5
    },
    {
      name: "Michael R.",
      role: "Startup Founder",
      text: "\"The AI content suggestions are spot-on for our brand voice. We've saved countless hours while improving engagement.\"",
      stars: 5
    },
    {
      name: "Jessica T.",
      role: "Social Media Manager",
      text: "\"Sentiment analysis helped us identify issues before they became problems. Our customer satisfaction is up 40%.\"",
      stars: 5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }

    return stars;
  };

  return (
    <section className="py-16 section-dark">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-white">Customer Reviews</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            See what our customers are saying about Novetiv
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card p-4">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3055] mr-3 flex items-center justify-center">
                  <span className="text-xs text-blue-highlight">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-medium text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-3">{testimonial.text}</p>
              <div className="flex">
                {renderStars(testimonial.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
