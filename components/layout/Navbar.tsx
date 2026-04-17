"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] px-6 py-4 flex justify-between items-start transition-all duration-300 ${
          scrolled || isMenuOpen ? "bg-black/80 backdrop-blur-xl border-b border-primary/20" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex flex-col gap-1 group">
          <div className="relative w-32 md:w-48 h-8 md:h-12">
            <Image 
              src="/logo.png" 
              alt="Creative Realm Logo" 
              fill 
              sizes="(max-width: 768px) 8rem, 12rem"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Monolithic Kineticism
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-col items-end gap-4">
          <Link 
            href="/contact"
            className="bg-primary text-black px-8 py-3 text-xl font-black uppercase border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-transform active:translate-x-0 active:translate-y-0"
          >
            ENQUIRE
          </Link>
          <div className="flex gap-6 bg-black/40 backdrop-blur-md p-3 border border-primary/30 uppercase text-[10px] font-black tracking-widest text-white">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-3 bg-primary border-4 border-black active:scale-95 transition-transform z-[110]"
          aria-label="Toggle Menu"
        >
          <span className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
          <span className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-8 h-1 bg-black transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary z-[90] flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          <p className="text-black/40 font-black tracking-widest text-sm border-b-4 border-black pb-4">MENU</p>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-6xl font-black uppercase text-black font-headline hover:italic transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-12">
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-block bg-black text-primary px-12 py-6 text-3xl font-black uppercase border-4 border-black hover:bg-white hover:text-black transition-colors"
            >
              Start Project
            </Link>
          </div>
          <div className="mt-20">
            <p className="text-xs font-bold uppercase tracking-widest text-black/60">Creative Realm Studio © 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
