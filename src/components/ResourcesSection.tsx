import React from "react";
import {
  Image,
  Images,
  LayoutGrid,
  Music,
  Smartphone,
  Smile,
  Table2,
} from "lucide-react";
import {
  RESOURCES_CATEGORY_A,
  RESOURCES_CATEGORY_B,
  ResourceItem,
} from "../data/landingContent";
import { Reveal } from "./Reveal";

const iconMap: Record<ResourceItem["iconName"], React.ElementType> = {
  layout: LayoutGrid,
  image: Image,
  images: Images,
  smile: Smile,
  table: Table2,
  smartphone: Smartphone,
  music: Music,
};

const ResourceCard: React.FC<{ item: ResourceItem; index: number; delay: number }> = ({
  item,
  index,
  delay,
}) => {
  const Icon = iconMap[item.iconName];
  const isCategoryA = item.category === "A";

  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-lg hover:shadow-[#2563EB]/5">
        <div>
          <div className="flex items-center justify-between gap-4 mb-5">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                isCategoryA
                  ? "bg-[#EFF6FF] border-[#DBEAFE] text-[#2563EB]"
                  : "bg-[#F5F3FF] border-[#EDE9FE] text-[#6D28D9]"
              }`}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="font-mono text-xs font-semibold text-slate-400 tabular-nums">
              0{index + 1}
            </span>
          </div>

          <p
            className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight tabular-nums mb-1.5 ${
              isCategoryA ? "text-[#2563EB]" : "text-[#6D28D9]"
            }`}
          >
            {item.quantity}
          </p>
          <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1228] tracking-tight mb-2.5">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
};

export const ResourcesSection: React.FC = () => {
  return (
    <section
      id="recursos"
      className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-200/80 text-[#0B1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <Reveal className="max-w-3xl space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
            O que está incluído
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
            UMA BIBLIOTECA CRIATIVA NUM ÚNICO PACOTE!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Descobre a variedade de recursos que vais encontrar no MOZ MEGA KIT
            DESIGNER PRO.
          </p>
        </Reveal>

        {/* Categoria A */}
        <div className="space-y-5">
          <Reveal className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-[#2563EB]">
              CATEGORIA A — ARTES E RECURSOS GRÁFICOS
            </h3>
            <span className="text-xs font-medium text-slate-500">4 módulos</span>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESOURCES_CATEGORY_A.map((item, idx) => (
              <ResourceCard
                key={item.id}
                item={item}
                index={idx}
                delay={idx * 0.06}
              />
            ))}
          </div>
        </div>

        {/* Categoria B */}
        <div className="space-y-5">
          <Reveal className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-display font-bold text-sm sm:text-base tracking-wider uppercase text-[#6D28D9]">
              CATEGORIA B — PRODUTIVIDADE E CRIATIVIDADE
            </h3>
            <span className="text-xs font-medium text-slate-500">3 módulos</span>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES_CATEGORY_B.map((item, idx) => (
              <ResourceCard
                key={item.id}
                item={item}
                index={RESOURCES_CATEGORY_A.length + idx}
                delay={idx * 0.07}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
