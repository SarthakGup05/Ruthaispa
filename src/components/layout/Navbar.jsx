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
import { useIsMobile } from "@/hooks/use-mobile";

function Navbar({ darkMode, setDarkMode, currentPage, setCurrentPage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect for dynamic styling
  useEffect(() => {
    setIsMounted(true);
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
    ? "bg-background/90 backdrop-blur-xl border-border/20 py-2 md:py-2.5 shadow-sm"
    : "bg-transparent border-transparent py-3 md:py-4";

  const mutedTextClass = isScrolled
    ? "text-muted-foreground hover:text-primary"
    : "text-white/90 hover:text-white";

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "About Us", page: "about" },
    { name: "Services", page: "services" },
    { name: "Contact Us", page: "contact" },
  ];

  const mountAnimationClass = !isMobile
    ? isMounted
      ? "translate-y-0 opacity-100"
      : "-translate-y-20 opacity-0"
    : "";

  return (
    <header
      className={`${headerBaseClass} ${headerScrollClass} ${mountAnimationClass} transform duration-700 ease-out`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        
        {/* --- BRAND / LOGO SECTION --- */}
        <div
          id="nav-brand-logo-container"
          data-testid="nav-brand-logo-container"
          className="flex items-center group cursor-pointer z-50"
          onClick={() => setCurrentPage?.("home")}
          aria-label="RUA Thai Spa Home"
        >
          <div className="flex items-center gap-3 md:gap-4 select-none">
            <Logo
              showText={false}
              className={`w-auto object-contain transition-all duration-500 ease-out group-hover:scale-105 filter ${
                !isScrolled && "drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
              } ${
                isScrolled 
                  ? "h-11 md:h-14" // Scrolled height (compact)
                  : "h-14 md:h-18" // Top of page height (prominent but contained)
              }`}
            />
            <div className="flex flex-col text-left font-serif leading-none mt-0.5">
              <span className={`font-serif tracking-[0.15em] font-medium uppercase transition-all duration-500 ${
                isScrolled 
                  ? "text-lg md:text-xl text-foreground" 
                  : "text-xl md:text-2xl text-white"
              }`}>
                RUA
              </span>
              <span className={`font-sans tracking-[0.3em] font-semibold uppercase transition-all duration-500 mt-1 ${
                isScrolled 
                  ? "text-[9px] md:text-[10px] text-primary" 
                  : "text-[10px] md:text-[11px] text-[#E6D2A7]"
              }`}>
                Thai Spa
              </span>
            </div>
          </div>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-10 font-sans" aria-label="Desktop navigation">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <a
                key={link.name}
                id={`nav-link-desktop-${link.page}`}
                data-testid={`nav-link-desktop-${link.page}`}
                href={`#${link.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage?.(link.page);
                }}
                className={`relative text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 py-2 group ${
                  isActive
                    ? (isScrolled ? "text-primary" : "text-[#E6D2A7]")
                    : mutedTextClass
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] transition-all duration-500 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } ${
                    isScrolled ? "bg-primary" : "bg-white"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* --- DESKTOP ACTIONS --- */}
        <div className="hidden md:flex items-center gap-5">
          {/* Theme Toggle */}
          <button
            id="nav-theme-toggle-desktop"
            data-testid="nav-theme-toggle-desktop"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ${
              isScrolled
                ? "bg-secondary/50 text-foreground hover:bg-secondary"
                : "bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20"
            }`}
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Book Now Button */}
          <Button
            id="nav-book-now-desktop"
            data-testid="nav-book-now-desktop"
            onClick={() => setCurrentPage?.("booking")}
            className={`rounded-full px-7 py-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer font-sans ${
              isScrolled
                ? "shadow-lg shadow-black/10 hover:shadow-black/15 bg-primary text-primary-foreground hover:bg-primary/95"
                : "bg-white text-black hover:bg-white/90 shadow-xl shadow-black/20"
            }`}
          >
            <span className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
              <PhoneCall className="w-4 h-4" />
              <span>Book Now</span>
            </span>
          </Button>
        </div>

        {/* --- MOBILE NAVIGATION (SHADCN SHEET) --- */}
        <div className="md:hidden flex items-center gap-4 z-50">
          
          {/* Theme Toggle (Mobile) */}
          <button
            id="nav-theme-toggle-mobile"
            data-testid="nav-theme-toggle-mobile"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${
              isScrolled ? "text-foreground bg-secondary/50" : "text-white bg-white/10 backdrop-blur-sm"
            }`}
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                id="nav-mobile-menu-trigger"
                data-testid="nav-mobile-menu-trigger"
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
              <div
                id="nav-brand-logo-mobile-header"
                data-testid="nav-brand-logo-mobile-header"
                className="flex items-center justify-start p-8 pt-12 pb-6 border-b border-border/10 cursor-pointer"
                onClick={() => {
                  setCurrentPage?.("home");
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 select-none">
                  <Logo
                    showText={false}
                    className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-md"
                  />
                  <div className="flex flex-col text-left font-serif leading-none mt-0.5">
                    <span className="font-serif tracking-[0.15em] font-medium uppercase text-xl sm:text-2xl text-foreground">
                      RUA
                    </span>
                    <span className="font-sans tracking-[0.3em] font-semibold uppercase text-[9px] sm:text-[10px] text-primary mt-1">
                      Thai Spa
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex flex-col gap-6 p-8 my-auto font-sans" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <SheetClose asChild key={link.page}>
                    <a
                      id={`nav-link-mobile-${link.page}`}
                      data-testid={`nav-link-mobile-${link.page}`}
                      href={`#${link.page}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage?.(link.page);
                      }}
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
              <div className="p-8 bg-card/30 border-t border-border/10 mt-auto flex flex-col gap-6 font-sans">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                    Sanctuary Hours
                  </span>
                  <span className="text-sm font-light text-foreground font-sans">
                    Mon - Sun: 10:00 AM - 09:00 PM
                  </span>
                </div>
                
                <SheetClose asChild>
                  <Button
                    id="nav-book-now-mobile"
                    data-testid="nav-book-now-mobile"
                    onClick={() => setCurrentPage?.("booking")}
                    size="lg"
                    className="w-full rounded-full py-6 uppercase tracking-widest text-xs font-bold shadow-lg shadow-black/10 hover:shadow-black/15 cursor-pointer"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <PhoneCall className="w-4 h-4" />
                      <span>Book Now</span>
                    </span>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Navbar);