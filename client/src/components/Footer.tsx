import { Input } from "@/components/ui/input";

export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-twitter", href: "#" },
    { icon: "fab fa-facebook", href: "#" },
    { icon: "fab fa-instagram", href: "#" },
    { icon: "fab fa-linkedin", href: "#" }
  ];

  const footerColumns = [
    {
      title: "Platform",
      links: ["Overview", "Features", "API", "Resources"]
    },
    {
      title: "Company",
      links: ["About", "Contact", "Careers", "Blog"]
    },
    {
      title: "Support",
      links: ["Help Center", "Documentation", "Status", "Community"]
    }
  ];

  return (
    <footer className="pt-12 pb-4 section-darker">
      <div className="container-custom">
        <div className="mb-8">
          <div className="text-xl font-bold text-white mb-2">Novetiv</div>
          <div className="flex space-x-3 mb-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-blue-highlight transition-colors text-lg">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
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
            </div>
          ))}
          
          <div>
            <h4 className="text-white text-sm font-medium mb-4">Contact Us</h4>
            <p className="text-gray-400 text-xs mb-2">novetivai@gmail.com</p>
            <p className="text-gray-400 text-xs">+2349068029427</p>
          </div>
        </div>
        
        <div className="border-t border-[#1e3055] pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-2 md:mb-0">© 2023 Novetiv. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-highlight transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-blue-highlight transition-colors text-xs">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
