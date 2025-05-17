import { Button } from "@/components/ui/button";

export default function Integrations() {
  const platforms = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "text-pink-500",
      description: "Schedule posts, manage comments, and analyze engagement"
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      color: "text-blue-500",
      description: "Track page metrics and automate responses"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-blue-700",
      description: "Share professional content and track engagement"
    },
    {
      name: "X (Twitter)",
      icon: "fab fa-x-twitter",
      color: "text-gray-400",
      description: "Monitor mentions and schedule tweets"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Integrations across leading platforms</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Connect all your favorite social platforms to manage everything from one dashboard
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-dark-card rounded-xl p-6 border border-gray-800 text-center">
              <div className={`${platform.color} text-3xl mb-4`}>
                <i className={platform.icon}></i>
              </div>
              <h3 className="font-semibold mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-400">{platform.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-gradient-to-r from-primary to-blue-500 px-8 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
            Connect Your Accounts
          </Button>
        </div>
      </div>
    </section>
  );
}
