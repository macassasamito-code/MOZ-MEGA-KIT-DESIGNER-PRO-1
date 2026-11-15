import React from "react";
import { ArrowRight, Download, FileCheck2, Link2, ShoppingBag } from "lucide-react";
import { LIFETIME_STAGES } from "../data/landingContent";
import { Reveal } from "./Reveal";

const stageIcons = [ShoppingBag, FileCheck2, Link2, Download];

export const LifetimeAccessSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200/80 text-[#0B1228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Reveal className="max-w-3xl space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Acesso Permanente
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
            UMA AQUISIÇÃO. ACESSO PERMANENTE AOS FICHEIROS DESCARREGADOS!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Depois de descarregares o pacote, podes guardar os ficheiros no teu
            computador ou dispositivo e consultar os materiais sempre que
            precisares.
          </p>
        </Reveal>

        {/* 4 Etapas Visuais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LIFETIME_STAGES.map((item, idx) => {
            const Icon = stageIcons[idx];
            return (
              <Reveal key={item.stage} delay={idx * 0.06} className="h-full">
                <div className="h-full relative rounded-2xl bg-[#F8FAFF] border border-slate-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#2563EB] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#2563EB] tracking-wider">
                        {item.stage}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0B1228] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {idx < LIFETIME_STAGES.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex items-center justify-end mt-4 text-slate-400"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Destaque Final da Secção */}
        <Reveal delay={0.12}>
          <div className="rounded-2xl bg-[#070B1F] text-white px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-slate-800">
            <p className="font-display font-bold text-base sm:text-lg text-white">
              Compra uma vez. Guarda os materiais descarregados e consulta-os
              quando precisares.
            </p>
            <span className="font-mono text-xs font-semibold text-[#FACC15] whitespace-nowrap shrink-0">
              Guarda no teu computador ou telemóvel
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
