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
      icon: "fab fa-twitter",
      color: "text-gray-500",
      description: "Automate, gain insights, and optimize your Twitter content effortlessly."
    }
  ];

  return (
    <section className="py-10 md:py-16 section-white mobile-p-reduced" id="integration">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-6 md:mb-8 px-2">
            <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#0a1223]">integrations across<br className="hidden sm:block" />leading platforms</h2>
            <p className="text-gray-600 text-xs md:text-sm max-w-md">
              Harness the Power of Novetiv AI for Effortless Social Media Management
            </p>
          </div>
          
          <div className="mt-6 md:mt-8 mb-4 md:mb-6 px-2">
            <a 
              href="#"
              className="text-[#0077FF] border border-[#e2e8f0] rounded-md py-2 px-4 text-xs md:text-sm hover:bg-gray-50 transition-colors duration-300"
            >
              View all integrations
            </a>
          </div>
          
          {/* Social platform grid - as shown in the PDF */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-8 px-2">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`${platform.color} text-3xl md:text-4xl mb-2 md:mb-3`}>
                  <i className={platform.icon}></i>
                </div>
                <h3 className="font-medium mb-1 md:mb-2 text-[#0a1223] text-xs md:text-sm">{platform.name}</h3>
                <p className="text-xs text-gray-600 max-w-[180px] mx-auto hidden md:block">{platform.description}</p>
                <p className="text-[10px] text-gray-600 mx-auto md:hidden">
                  {platform.description.substring(0, 40)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
