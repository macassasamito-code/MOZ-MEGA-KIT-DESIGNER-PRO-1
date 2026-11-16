import React from "react";
import { Check, FileText, ShieldCheck } from "lucide-react";
import {
  FORMATTED_PRICE,
  PLATFORM_NAME,
  PRODUCT_NAME,
} from "../config/product";
import { PRICING_CHECKLIST } from "../data/landingContent";
import { CheckoutButton } from "./CheckoutButton";
import { Reveal } from "./Reveal";

export const PricingSection: React.FC = () => {
  return (
    <section
      id="oferta"
      className="py-16 sm:py-20 lg:py-24 bg-[#060B1E] text-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1E3A8A] via-[#3B269E] to-[#5B21B6] p-[1px] shadow-2xl shadow-[#2563EB]/25">
            <div className="rounded-[23px] bg-gradient-to-br from-[#0F2361] via-[#271C6E] to-[#3B1778] px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Lista Completa */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 rounded-md bg-[#FACC15] text-[#060B1E] font-display font-extrabold text-xs uppercase tracking-wider">
                      OFERTA COMPLETA · {PLATFORM_NAME}
                    </span>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight text-white">
                      🔥 ADQUIRE AGORA O TEU {PRODUCT_NAME}!
                    </h2>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      Milhares de recursos criativos, 14 super bónus e uma
                      biblioteca digital para ampliar as tuas possibilidades.
                    </p>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {PRICING_CHECKLIST.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-white"
                      >
                        <span className="w-5 h-5 rounded-md bg-[#FACC15]/20 border border-[#FACC15]/40 text-[#FACC15] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cartão de Preço e Checkout */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#070B1F]/90 border border-[#FACC15]/35 p-6 sm:p-8 text-center space-y-5 shadow-xl">
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#FACC15]">
                        Preço de venda
                      </p>
                      <p className="font-display font-extrabold text-5xl sm:text-6xl text-white tabular-nums tracking-tight">
                        {FORMATTED_PRICE}
                      </p>
                      <p className="text-xs text-slate-300">
                        Metical moçambicano · Acesso digital em PDF
                      </p>
                    </div>

                    <CheckoutButton
                      label="🛒 COMPRAR AGORA POR 997 MT"
                      source="pricing_card"
                      size="lg"
                      fullWidth
                    />

                    <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                      <p className="flex items-center justify-center gap-1.5 text-white font-medium">
                        <ShieldCheck
                          className="w-4 h-4 text-[#FACC15] shrink-0"
                          aria-hidden="true"
                        />
                        <span>Checkout oficial da plataforma lojou.app</span>
                      </p>
                      <p className="flex items-start justify-center gap-1.5">
                        <FileText
                          className="w-4 h-4 text-slate-400 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>
                          A compra é realizada através da plataforma lojou.app. Após
                          a aquisição, receberás o PDF com o link de acesso aos
                          componentes do teu Mega Kit.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
