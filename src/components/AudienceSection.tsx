import React from "react";
import {
  Briefcase,
  Laptop,
  Megaphone,
  PenTool,
  Share2,
  TrendingUp,
  Video,
} from "lucide-react";
import { AUDIENCE_PROFILES, AudienceProfile } from "../data/landingContent";
import { Reveal } from "./Reveal";

const iconMap: Record<AudienceProfile["iconName"], React.ElementType> = {
  penTool: PenTool,
  laptop: Laptop,
  video: Video,
  share2: Share2,
  megaphone: Megaphone,
  briefcase: Briefcase,
  trendingUp: TrendingUp,
};

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFF] text-[#0B1228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl space-y-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
            Para quem é este Kit
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
            FEITO PARA QUEM VIVE A CRIATIVIDADE!
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Se trabalhas com comunicação visual, publicidade ou criação de
            conteúdo, o MOZ MEGA KIT DESIGNER PRO oferece-te uma biblioteca de
            recursos para explorar e desenvolver novos projectos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE_PROFILES.map((profile, idx) => {
            const Icon = iconMap[profile.iconName];
            const isLast = idx === AUDIENCE_PROFILES.length - 1;
            return (
              <Reveal
                key={profile.title}
                delay={idx * 0.05}
                className={isLast ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <article className="h-full rounded-2xl bg-white border border-slate-200 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6D28D9]/40 hover:shadow-lg hover:shadow-[#6D28D9]/5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#6D28D9] text-white flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0B1228] mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {profile.description}
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
