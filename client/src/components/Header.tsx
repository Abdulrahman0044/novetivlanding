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
    <header className="py-4 z-10 relative">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">
            Novetiv
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block btn-primary text-sm font-medium rounded-full"
          >
            Try Novetiv for free
          </a>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="dark-navy">
              <nav className="flex flex-col space-y-6 mt-10">
                {navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center text-sm rounded-full"
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
