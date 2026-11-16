import React from "react";
import {
  Check,
  FileText,
  FolderKanban,
  Layers,
  Link2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import {
  CHECKOUT_URL,
  FORMATTED_PRICE,
  PRODUCT_NAME,
  PRODUCT_SUBTITLE,
  trackOutboundCheckout,
} from "../config/product";
import { HERO_INDICATORS, HERO_MOCKUP_IMAGE } from "../data/landingContent";
import { CheckoutButton } from "./CheckoutButton";
import { ResilientImage } from "./ResilientImage";
import { Reveal } from "./Reveal";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#060B1E] text-white pt-20 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Iluminação tecnológica subtil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full bg-[#2563EB]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-24 w-[420px] h-[420px] rounded-full bg-[#7C3AED]/25 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto Comercial e Conversão */}
          <Reveal immediate y={16} className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] text-xs font-bold tracking-wider uppercase">
              <span>🔥 MEGA OFERTA DIGITAL</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-[clamp(2.25rem,4.3vw,3.75rem)] leading-[1.06] tracking-tight text-white">
                {PRODUCT_NAME}
              </h1>
              <p className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-[#FACC15] tracking-tight">
                {PRODUCT_SUBTITLE}
              </p>
            </div>

            <div className="space-y-3 text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
              <p className="font-semibold text-white">
                Milhares de recursos criativos num único pacote!
              </p>
              <p className="text-slate-300">
                Eleva a qualidade dos teus designs, cria conteúdos incríveis e
                amplia as tuas possibilidades criativas com uma biblioteca
                digital repleta de materiais para designers, criadores de
                conteúdo, empreendedores e profissionais de marketing digital.
              </p>
            </div>

            {/* Bloco de Preço */}
            <div className="flex flex-wrap items-baseline gap-4 pt-1">
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
                  Acesso ao pacote completo por
                </span>
                <span className="font-display font-extrabold text-4xl sm:text-5xl text-white tabular-nums tracking-tight">
                  {FORMATTED_PRICE}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-slate-300 border-l border-white/15 pl-4">
                Pagamento único na lojou.app · Entrega digital em PDF
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <CheckoutButton
                label="🔥 QUERO O MEU MEGA KIT AGORA!"
                source="hero_primary"
                size="lg"
              />
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundCheckout("hero_secondary")}
                className="inline-flex items-center justify-center text-center px-4 sm:px-5 py-3.5 min-h-[52px] sm:min-h-[54px] rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-display font-semibold text-sm sm:text-base transition-colors sm:whitespace-nowrap shrink-0"
              >
                VER TUDO O QUE ESTÁ INCLUÍDO
              </a>
            </div>

            {/* Indicadores limpos sem pills */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-200">
              {HERO_INDICATORS.map((indicator, index) => {
                const IconComponent =
                  index === 0
                    ? Layers
                    : index === 1
                      ? ShieldCheck
                      : index === 2
                        ? FileText
                        : Link2;
                return (
                  <div key={indicator} className="flex items-center gap-2">
                    <IconComponent
                      className="w-4 h-4 text-[#FACC15] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{indicator}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Coluna Direita: Mockup Premium do Produto */}
          <Reveal immediate delay={0.1} y={20} className="lg:col-span-6">
            <div className="relative rounded-2xl border border-white/15 bg-[#0C1433] p-3 sm:p-4 shadow-2xl shadow-[#2563EB]/20">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10">
                <ResilientImage
                  src={HERO_MOCKUP_IMAGE}
                  alt="Mockup premium do MOZ MEGA KIT DESIGNER PRO em computador portátil e smartphone com artes editáveis e pastas digitais"
                  title={PRODUCT_NAME}
                  eager
                />
              </div>

              {/* Barra informativa integrada abaixo da imagem sem sobrepor texto */}
              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-xl bg-[#070D22] border border-white/10 p-3 flex items-center gap-2.5">
                  <FolderKanban
                    className="w-5 h-5 text-[#3B82F6] shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm sm:text-base text-white tabular-nums truncate">
                      +12.000
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                      Artes Editáveis
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#070D22] border border-white/10 p-3 flex items-center gap-2.5">
                  <Smartphone
                    className="w-5 h-5 text-[#A78BFA] shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm sm:text-base text-white tabular-nums truncate">
                      +304.000
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                      PNGs e Recursos
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#070D22] border border-white/10 p-3 flex items-center gap-2.5">
                  <Check
                    className="w-5 h-5 text-[#FACC15] shrink-0"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="font-display font-bold text-sm sm:text-base text-[#FACC15] tabular-nums truncate">
                      14 Bónus
                    </p>
                    <p className="text-[11px] sm:text-xs text-slate-300 truncate">
                      Super Bónus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
