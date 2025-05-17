export default function Integrations() {
  const platforms = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "text-pink-500",
      description: "Automate, gain insights, and optimize your Instagram content effortlessly."
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      color: "text-blue-500",
      description: "Automate, gain insights, and optimize your Instagram content effortlessly."
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-blue-700",
      description: "Automate, gain insights, and optimize your Instagram content effortlessly."
    },
    {
      name: "Twitter (X)",
      icon: "fab fa-twitter",
      color: "text-gray-400",
      description: "Automate, gain insights, and optimize your Instagram content effortlessly."
    }
  ];

  return (
    <section className="py-16 section-dark" id="integration">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-bold mb-3 text-blue-highlight">integrations across<br />leading platforms</h2>
            <p className="text-gray-400 text-sm max-w-md">
              Harness the Power of Novetiv AI for Effortless Social Media Management
            </p>
          </div>
          
          <div className="mt-8 mb-6">
            <a 
              href="#"
              className="text-blue-highlight border border-[#1e3055] rounded-md py-2 px-4 text-sm hover:bg-[#0c1a30] transition-colors duration-300"
            >
              View all integrations
            </a>
          </div>
          
          {/* Social platform grid - as shown in the PDF */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`${platform.color} text-3xl mb-3`}>
                  <i className={platform.icon}></i>
                </div>
                <h3 className="font-medium mb-2 text-white text-sm">{platform.name}</h3>
                <p className="text-xs text-gray-400 max-w-[180px] mx-auto">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
