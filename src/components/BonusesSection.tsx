import React from "react";
import { Gift, Sparkles } from "lucide-react";
import { BONUS_BOX_IMAGE, BONUS_SLOTS } from "../data/landingContent";
import { ResilientImage } from "./ResilientImage";
import { Reveal } from "./Reveal";

export const BonusesSection: React.FC = () => {
  return (
    <section
      id="bonus"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#070B1F] text-white"
    >
      {/* Brilhos e gradientes de destaque */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[360px] rounded-full bg-[#6D28D9]/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[#2563EB]/20 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Caixa de Presente 3D */}
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#7C3AED]/35 bg-gradient-to-br from-[#0F1638] to-[#1A103D] p-4 shadow-2xl shadow-[#6D28D9]/25">
              <div className="aspect-square w-full rounded-xl overflow-hidden animate-subtle-float">
                <ResilientImage
                  src={BONUS_BOX_IMAGE}
                  alt="Caixa de presente 3D simbolizando os 14 Super Bónus incluídos no MOZ MEGA KIT DESIGNER PRO"
                  title="14 SUPER BÓNUS INCLUÍDOS"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-[#070B1F]/80 border border-white/10 px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <Sparkles
                    className="w-5 h-5 text-[#FACC15] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-display font-bold text-sm sm:text-base text-white">
                    14 BÓNUS INCLUÍDOS!
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-[#FACC15] tabular-nums">
                  14 / 14
                </span>
              </div>
            </div>
          </Reveal>

          {/* Copy e Grelha de Cartões de Oferta */}
          <Reveal delay={0.1} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold uppercase tracking-wider">
              <Gift className="w-4 h-4" aria-hidden="true" />
              <span>14 BÓNUS INCLUÍDOS!</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-white">
              🎁 E AINDA RECEBES 14 SUPER BÓNUS!
            </h2>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              A tua aquisição não inclui apenas uma enorme biblioteca de
              recursos criativos. Recebes também 14 bónus adicionais para
              ampliar ainda mais as tuas possibilidades.
            </p>

            {/* 14 cartões de bónus sem inventar nomes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
              {BONUS_SLOTS.map((slot) => (
                <div
                  key={slot}
                  className="rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FACC15]/45 p-3.5 transition-colors duration-200 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shrink-0">
                    <Gift className="w-4 h-4 text-[#FACC15]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-semibold text-[#FACC15] tabular-nums">
                      BÓNUS {String(slot).padStart(2, "0")}
                    </p>
                    <p className="text-xs font-semibold text-white truncate">
                      Super Bónus
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
