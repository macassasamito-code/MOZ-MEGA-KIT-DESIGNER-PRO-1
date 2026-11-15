import React from "react";
import { FORMATTED_PRICE, PRODUCT_NAME } from "../config/product";
import { CheckoutButton } from "./CheckoutButton";

export const MobilePurchaseBar: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="Barra rápida de compra"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#060B1E]/95 backdrop-blur-md border-t border-white/15 px-3.5 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl"
    >
      <div className="max-w-lg mx-auto flex items-center justify-between gap-2.5">
        <div className="min-w-0 flex-1">
          <p className="font-display font-bold text-[11px] text-slate-300 truncate">
            {PRODUCT_NAME}
          </p>
          <p className="font-display font-extrabold text-base text-[#FACC15] tabular-nums leading-tight">
            {FORMATTED_PRICE}
          </p>
        </div>

        <CheckoutButton
          label="COMPRAR AGORA"
          source="mobile_sticky_bar"
          size="sm"
          className="shrink-0"
        />
      </div>
    </div>
  );
};
