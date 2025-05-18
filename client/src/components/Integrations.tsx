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
      description: "Automate, gain insights, and optimize your Facebook content effortlessly."
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-blue-700",
      description: "Automate, gain insights, and optimize your LinkedIn content effortlessly."
    },
    {
      name: "Twitter (X)",
      icon: "fa-solid fa-x",
      color: "text-gray-800",
      description: "Automate, gain insights, and optimize your Twitter content effortlessly."
    }
  ];

  return (
    <section className="py-10 md:py-16 section-white mobile-p-reduced" id="integration">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="md:w-1/2 px-2">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-3 text-[#0a1223] tracking-tight">
                integrations across<br className="hidden sm:block" />
                <span className="text-3xl md:text-4xl font-extrabold mb-2 md:mb-3 text-[#0a1223] tracking-tight">
                  leading platforms
                </span>
              </h2>
              <p className="text-gray-600 text-xs md:text-sm max-w-md mb-6">
                Harness the Power of Novetiv AI for Effortless Social Media Management
              </p>
              
              <a 
                href="#about"
                className="bg-[#0052cc] hover:bg-[#004099] text-white rounded-md py-2 px-4 text-xs md:text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                View all integrations
                <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>
          </div>
          
          {/* Right side - Platform grid */}
          <div className="md:w-1/2 px-2">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="flex flex-col items-center h-full">
                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center mb-3">
                      <i className={`${platform.icon} ${platform.color} text-2xl`}></i>
                    </div>
                    <h3 className="font-medium mb-2 text-[#0a1223] text-sm">{platform.name}</h3>
                    <p className="text-xs text-gray-600 text-center">
                      {platform.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
