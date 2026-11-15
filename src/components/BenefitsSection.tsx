import React from "react";
import { FolderOpen, HardDrive, Layers, Sparkles, Zap } from "lucide-react";
import { BENEFITS_LIST, BenefitItem } from "../data/landingContent";
import { Reveal } from "./Reveal";

const iconMap: Record<BenefitItem["iconName"], React.ElementType> = {
  sparkles: Sparkles,
  zap: Zap,
  layers: Layers,
  folder: FolderOpen,
  hardDrive: HardDrive,
};

export const BenefitsSection: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFF] text-[#0B1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Benefícios da Biblioteca
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
            A TUA CRIATIVIDADE MERECE MAIS RECURSOS!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Tudo o que precisas para explorar novas possibilidades criativas e
            desenvolver projectos com mais recursos à tua disposição.
          </p>
        </Reveal>

        {/* Bento-Grid Assimétrico para os 5 Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {BENEFITS_LIST.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName];
            const isTopRow = index < 2;
            return (
              <Reveal
                key={benefit.number}
                delay={index * 0.06}
                className={isTopRow ? "md:col-span-3" : "md:col-span-2"}
              >
                <article className="h-full group rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-[#2563EB]/5">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-sm font-semibold text-slate-400 tabular-nums">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B1228] tracking-tight mb-2">
                    {benefit.number} — {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
