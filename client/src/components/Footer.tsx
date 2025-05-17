export default function Footer() {
  const footerColumns = [
    {
      title: "Features",
      links: ["AI & Automation", "Premium Analytics", "Analysis", "Interaction", "Publishing", "Promotion", "Influence - Marketing"]
    },
    {
      title: "Integration",
      links: ["Facebook", "Instagram", "Twitter (X)", "LinkedIn", "Playstore", "Appstore"]
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "System Status"]
    }
  ];

  return (
    <footer className="pt-8 md:pt-12 pb-4 section-darker mobile-p-reduced" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="col-span-2 sm:col-span-2 md:col-span-2 mb-2 md:mb-0">
            <div className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Novetiv</div>
            <div className="mb-4 md:mb-6">
              <h4 className="text-white text-xs md:text-sm font-medium mb-2">Contact Us</h4>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-twitter text-sm md:text-base"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-facebook text-sm md:text-base"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-instagram text-sm md:text-base"></i>
                </a>
              </div>
            </div>
          </div>
          
          {footerColumns.map((column, idx) => (
            <div key={idx} className={idx === 0 ? 'col-span-2 sm:col-span-1 order-3 md:order-none' : ''}>
              <h4 className="text-white text-xs md:text-sm font-medium mb-2 md:mb-4">{column.title}</h4>
              <ul className="space-y-1 md:space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors text-[10px] md:text-xs">{link}</a>
                  </li>
                ))}
              </ul>
              {column.title === "Features" && (
                <a href="#" className="text-blue-highlight hover:text-blue-500 text-[10px] md:text-xs block mt-2 md:mt-3">
                  See all
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#1e3055] pt-3 md:pt-4 text-center md:text-right">
          <p className="text-gray-500 text-[10px] md:text-xs">© PromptTo 2025</p>
        </div>
      </div>
    </footer>
  );
}
