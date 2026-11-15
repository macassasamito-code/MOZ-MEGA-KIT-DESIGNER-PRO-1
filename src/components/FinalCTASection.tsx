import React from "react";
import { FORMATTED_PRICE, PRODUCT_NAME } from "../config/product";
import { HERO_MOCKUP_IMAGE } from "../data/landingContent";
import { CheckoutButton } from "./CheckoutButton";
import { ResilientImage } from "./ResilientImage";
import { Reveal } from "./Reveal";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#060B1E] via-[#0F1E54] to-[#2E1065] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <Reveal className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] tracking-tight text-white">
              NÃO COMECES SEMPRE DO ZERO. EXPANDE AS TUAS POSSIBILIDADES
              CRIATIVAS!
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Milhares de recursos, 14 super bónus e tudo organizado num único
              pacote digital.
            </p>

            <div className="flex flex-wrap items-baseline gap-4 pt-1">
              <span className="font-display font-bold text-lg sm:text-xl text-[#FACC15]">
                {PRODUCT_NAME}
              </span>
              <span className="text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                {FORMATTED_PRICE}
              </span>
            </div>

            <div className="pt-2">
              <CheckoutButton
                label="🔥 QUERO O MEU MEGA KIT AGORA!"
                source="final_cta"
                size="lg"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-[#070B1F]/70 p-3 shadow-2xl">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden">
                <ResilientImage
                  src={HERO_MOCKUP_IMAGE}
                  alt="Apresentação final do MOZ MEGA KIT DESIGNER PRO em dispositivos digitais"
                  title={PRODUCT_NAME}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
