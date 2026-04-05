"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Methodology", href: "#methodology" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-border group-hover:border-accent transition-colors">
                <Image src="/logo.png" alt="Neon Tech Logo" fill sizes="40px" className="object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground transition-colors group-hover:text-accent">
                Neon Tech
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4 border-l border-border pl-6">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-card transition-colors text-foreground"
                aria-label="Toggle themes"
              >
                <Sun className="h-5 w-5 dark:hidden" />
                <Moon className="h-5 w-5 hidden dark:block" />
              </button>
              
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-foreground text-background px-6 text-sm font-medium transition-colors hover:bg-foreground/90 glow-effect"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-card transition-colors text-foreground"
            >
              <Sun className="h-5 w-5 dark:hidden" />
              <Moon className="h-5 w-5 hidden dark:block" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-foreground hover:bg-card transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background border-b border-border shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground hover:bg-card hover:text-accent rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 px-3">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-foreground text-background hover:bg-foreground/90 glow-effect"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
