import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integration", href: "#integration" },
    { label: "Reviews", href: "#reviews" },
    { label: "About us", href: "#about" },
  ];

  return (
    <header className="py-3 md:py-4 z-10 relative">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-bold text-white">
            Novetiv
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link text-xs lg:text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary text-xs lg:text-sm font-medium rounded-full py-2 px-4"
          >
            Try Novetiv for free
          </a>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="dark-navy w-[80%] max-w-[300px]">
              <nav className="flex flex-col space-y-5 mt-8">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-xs rounded-full py-2 px-4 mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  Try Novetiv for free
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
