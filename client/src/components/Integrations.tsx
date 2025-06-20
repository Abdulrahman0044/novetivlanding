export default function Integrations() {
  const platforms = [
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      color: "text-red-500",
      description: "Automate, gain insights, and optimize your Instagram content effortlessly."
    },
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      color: "text-blue-600",
      description: "Automate, gain insights, and optimize your Facebook content effortlessly."
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "text-blue-700",
      description: "Automate, gain insights, and optimize your LinkedIn content effortlessly."
    },
    {
      name: "Twitter (X)",
      icon: "fab fa-x",
      color: "text-black",
      description: "Automate, gain insights, and optimize your Twitter content effortlessly."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#FAFBFF] mobile-p-reduced" id="integration">
      <div className="container-custom">
        <div className="flex flex-col items-start md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
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
                className="bg-gradient-btn hover:text-white rounded-md py-2 px-4 text-xs md:text-sm transition-colors duration-300 inline-flex items-center gap-2 group"
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
                  className="bg-white rounded-lg px-4 py-10 hover:border border-blue-200 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex flex-col items-start h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-3 ">
                      <i className={`${platform.icon} ${platform.color} text-4xl`}></i>
                    </div>
                    <h3 className="font-medium mb-2 text-[#0a1223] text-sm">{platform.name}</h3>
                    <p className="text-xs text-gray-600 text-start">
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
