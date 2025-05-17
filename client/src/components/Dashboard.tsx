import { CheckCircle } from "lucide-react";

export default function Dashboard() {
  const features = [
    "Automated message categorization",
    "Priority inbox for urgent messages",
    "Smart response suggestions"
  ];

  return (
    <section className="py-16 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Unified Inbox</h2>
            <p className="text-lg text-gray-300 mb-8">
              Manage all your social media messages, comments, and feedback in one place with AI-powered organization.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-primary mr-3 mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" 
              alt="Novetiv unified inbox" 
              className="w-full rounded-xl shadow-lg border border-gray-800" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
