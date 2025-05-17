export default function Integrations() {
  const platforms = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "text-pink-500",
      description: "Schedule posts, manage comments"
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      color: "text-blue-500",
      description: "Track page metrics and automate"
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-blue-700",
      description: "Share professional content"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      color: "text-gray-400",
      description: "Monitor mentions and tweets"
    }
  ];

  return (
    <section className="py-12 section-dark">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3 text-white">Integrations across leading platforms</h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Connect your favorite social media accounts
          </p>
        </div>
        
        {/* Social platform grid - exactly as shown in the screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <div key={index} className="feature-card p-4 text-center">
              <div className={`${platform.color} text-3xl mb-3`}>
                <i className={platform.icon}></i>
              </div>
              <h3 className="font-medium mb-1 text-white text-sm">{platform.name}</h3>
              <p className="text-xs text-gray-400">{platform.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="#"
            className="btn-primary inline-block py-2 px-6 text-sm"
          >
            Connect Accounts
          </a>
        </div>
      </div>
    </section>
  );
}
