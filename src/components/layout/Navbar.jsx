import React, { useState, useEffect } from "react";
import { Sun, Moon, PhoneCall, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "../ui/Logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect for dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic header classes for seamless transition
  const headerBaseClass =
    "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out border-b";
  const headerScrollClass = isScrolled
    ? "bg-background/90 backdrop-blur-xl border-border/20 py-3 md:py-4 shadow-sm"
    : "bg-transparent border-transparent py-5 md:py-6";

  const mutedTextClass = isScrolled
    ? "text-muted-foreground hover:text-primary"
    : "text-white/90 hover:text-white";

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  const HeaderTag = isMobile ? "header" : motion.header;

  return (
    <HeaderTag
      {...(!isMobile && {
        initial: { y: -80, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.8, ease: [0.21, 1.02, 0.43, 1.01] }
      })}
      className={`${headerBaseClass} ${headerScrollClass}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        
        {/* --- BRAND / LOGO SECTION --- */}
        <div className="flex items-center group cursor-pointer z-50">
          <Logo
            className={`w-auto object-contain transition-all duration-500 ease-out group-hover:scale-105 filter ${
              !isScrolled && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            } ${
              isScrolled 
                ? "h-12 md:h-16" // Scrolled height (compact)
                : "h-16 md:h-24" // Top of page height (prominent but contained)
            }`}
          />
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 py-2 group ${mutedTextClass}`}
            >
              {link.name}
              {/* Animated Underline */}
              <span
                className={`absolute left-0 bottom-0 w-0 h-[1px] transition-all duration-500 ease-out group-hover:w-full ${
                  isScrolled ? "bg-primary" : "bg-white"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* --- DESKTOP ACTIONS --- */}
        <div className="hidden md:flex items-center gap-5">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${
              isScrolled
                ? "bg-secondary/50 text-foreground hover:bg-secondary"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Book Now Button */}
          <Button
            asChild
            className={`rounded-full px-7 py-5 transition-all duration-300 hover:-translate-y-0.5 ${
              isScrolled
                ? "shadow-lg shadow-black/10 hover:shadow-black/15"
                : "bg-white text-black hover:bg-white/90 shadow-xl shadow-black/20"
            }`}
          >
            <a href="tel:+917449962261" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
              <PhoneCall className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </Button>
        </div>

        {/* --- MOBILE NAVIGATION (SHADCN SHEET) --- */}
        <div className="md:hidden flex items-center gap-4 z-50">
          
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? "text-foreground bg-secondary/50" : "text-white bg-white/10 backdrop-blur-sm"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={`p-2 transition-colors duration-300 cursor-pointer ${
                  !isScrolled ? "text-white" : "text-foreground"
                }`}
                aria-label="Open mobile menu"
              >
                <Menu className="w-7 h-7" strokeWidth={1.5} />
              </button>
            </SheetTrigger>
            
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] h-full flex flex-col bg-background/95 backdrop-blur-2xl border-l-0 p-0 shadow-2xl"
            >
              {/* Mobile Menu Header - Enlarged Logo */}
              <div className="flex items-center justify-start p-8 pt-12 pb-6 border-b border-border/10">
                <Logo
                  className="h-20 sm:h-24 w-auto object-contain filter drop-shadow-md"
                />
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex flex-col gap-6 p-8 my-auto">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-6 group"
                    >
                      <span className="text-xs font-sans font-bold tracking-[0.2em] text-primary/50 group-hover:text-primary transition-colors">
                        0{index + 1}
                      </span>
                      <span className="text-3xl font-serif tracking-wide text-foreground group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-3">
                        {link.name}
                      </span>
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-8 bg-card/30 border-t border-border/10 mt-auto flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Sanctuary Hours
                  </span>
                  <span className="text-sm font-light text-foreground">
                    Mon - Sun: 10:00 AM - 09:00 PM
                  </span>
                </div>
                
                <SheetClose asChild>
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full py-6 uppercase tracking-widest text-xs font-bold shadow-lg shadow-black/10 hover:shadow-black/15"
                  >
                    <a href="tel:+917449962261" className="flex items-center justify-center gap-3">
                      <PhoneCall className="w-4 h-4" />
                      <span>Call to Book</span>
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </HeaderTag>
  );
}