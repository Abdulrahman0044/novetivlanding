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
    <footer className="pt-12 pb-4 section-darker" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="text-xl font-bold text-white mb-4">Novetiv</div>
            <div className="mb-6">
              <h4 className="text-white text-sm font-medium mb-2">Contact Us</h4>
              <div className="flex space-x-3 mt-2">
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          {footerColumns.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-white text-sm font-medium mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="text-gray-400 hover:text-blue-highlight transition-colors text-xs">{link}</a>
                  </li>
                ))}
              </ul>
              {column.title === "Features" && (
                <a href="#" className="text-blue-highlight hover:text-blue-500 text-xs block mt-3">
                  See all
                </a>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#1e3055] pt-4 text-right">
          <p className="text-gray-500 text-xs">© PromptTo 2025</p>
        </div>
      </div>
    </footer>
  );
}
