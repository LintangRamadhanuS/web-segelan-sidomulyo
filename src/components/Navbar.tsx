"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dusunInfo, navLinks } from "@/lib/data";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-krem-dark"
          : "bg-transparent"
      }`}
    >
      <div className="container-desa">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden shadow-sm
                            group-hover:scale-105 transition-transform">
              <Image src="/images/logo.png"
                alt="Logo Dusun Segelan Sidomulyo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>

            <span className={`font-display font-semibold text-base leading-tight transition-colors ${
              scrolled ? "text-tanah-dark" : "text-white drop-shadow"
            }`}>
              {dusunInfo.nama}
              <span className="block text-xs font-body font-normal opacity-70">
                {dusunInfo.kabupaten}
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-hijau text-white shadow-sm"
                      : scrolled
                        ? "text-tanah hover:bg-krem hover:text-tanah-dark"
                        : "text-white/90 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-tanah hover:bg-krem" : "text-white hover:bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-krem-dark shadow-lg rounded-b-2xl overflow-hidden">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3.5 text-sm font-medium border-b border-krem last:border-0 transition-colors ${
                    active ? "bg-hijau/10 text-hijau font-semibold" : "text-tanah hover:bg-krem"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
