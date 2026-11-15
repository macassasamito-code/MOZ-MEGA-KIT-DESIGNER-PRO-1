import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CHECKOUT_URL, PRODUCT_NAME, trackOutboundCheckout } from "../config/product";
import { NAV_LINKS } from "../data/landingContent";
import { CheckoutButton } from "./CheckoutButton";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-[#060B1E]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-[#060B1E]/85 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 lg:h-16 flex items-center justify-between gap-3 xl:gap-8">
        {/* Zona 1: Marca textual em linha única */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            trackOutboundCheckout("header_logo");
            setMobileMenuOpen(false);
          }}
          className="font-display font-extrabold text-sm sm:text-base tracking-tight text-white whitespace-nowrap truncate min-w-0 flex-1 md:flex-initial hover:text-[#FACC15] transition-colors"
        >
          {PRODUCT_NAME}
        </a>

        {/* Zona 2: Navegação Desktop em linha única */}
        <nav
          aria-label="Navegação principal"
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundCheckout("header_nav")}
              className="whitespace-nowrap shrink-0 py-1 hover:text-[#FACC15] transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FACC15] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Acção principal + Menu Mobile */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:block">
            <CheckoutButton
              label="COMPRAR AGORA"
              source="header"
              size="sm"
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="xl:hidden w-11 h-11 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        id="mobile-nav-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`xl:hidden overflow-y-auto transition-all duration-200 ease-out bg-[#080F29] border-b border-white/10 ${
          mobileMenuOpen
            ? "max-h-[calc(100dvh-3.5rem)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => {
                trackOutboundCheckout("mobile_nav");
                setMobileMenuOpen(false);
              }}
              className="px-3 py-3 rounded-lg text-sm font-medium text-slate-100 hover:bg-white/10 hover:text-[#FACC15] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10">
            <CheckoutButton
              label="COMPRAR AGORA"
              source="mobile_menu"
              size="md"
              fullWidth
            />
          </div>
        </nav>
      </div>
    </header>
  );
};
