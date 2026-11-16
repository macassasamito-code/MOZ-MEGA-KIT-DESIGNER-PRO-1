import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CHECKOUT_URL, trackOutboundCheckout } from "../config/product";

interface CheckoutButtonProps {
  label: string;
  source: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  label,
  source,
  size = "md",
  fullWidth = false,
  className = "",
}) => {
  const [clicked, setClicked] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const sizeClasses =
    size === "sm"
      ? "px-3.5 sm:px-4 py-2 text-xs sm:text-sm min-h-[40px]"
      : size === "lg"
        ? "px-4 sm:px-7 py-3.5 sm:py-4 text-sm sm:text-lg min-h-[52px] sm:min-h-[54px]"
        : "px-4 sm:px-5 py-3 text-sm sm:text-base min-h-[44px]";

  const handleClick = () => {
    trackOutboundCheckout(source);
    setClicked(true);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setClicked(false), 1400);
  };

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] hover:bg-[#166534] active:scale-[0.99] text-white font-display font-bold tracking-tight text-center shadow-lg shadow-[#15803D]/25 border border-[#22C55E]/40 transition-all duration-150 ease-out sm:whitespace-nowrap shrink-0 cursor-pointer ${sizeClasses} ${fullWidth ? "w-full" : "max-w-full"} ${className}`}
    >
      <span>{clicked ? "A abrir lojou.app..." : label}</span>
      <ArrowUpRight
        className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
};
