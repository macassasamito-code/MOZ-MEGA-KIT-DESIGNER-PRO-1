import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "../data/landingContent";
import { ResilientImage } from "./ResilientImage";
import { Reveal } from "./Reveal";

const FILTER_OPTIONS = [
  "Todos",
  "Artes para redes sociais",
  "Posts promocionais",
  "Templates de Stories",
  "Emojis 3D",
  "Elementos PNG",
  "Composições criativas",
] as const;

type FilterOption = (typeof FILTER_OPTIONS)[number];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] =
    activeFilter === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const currentItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] ?? null : null;

  return (
    <section
      id="galeria"
      className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80 text-[#0B1228]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Galeria de Recursos
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-tight text-[#0B1228]">
              DESCOBRE O UNIVERSO CRIATIVO DO MEGA KIT!
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Exemplos ilustrativos dos estilos de artes para redes sociais,
              posts promocionais, elementos PNG, emojis 3D, templates de Stories
              e composições criativas. Clica em qualquer imagem para ampliar.
            </p>
          </div>

          {/* Controlo segmentado funcional para filtragem */}
          <div
            role="group"
            aria-label="Filtrar galeria ilustrativa por categoria"
            className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200 self-start"
          >
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setActiveFilter(option);
                    setLightboxIndex(null);
                  }}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-[#0B1228] text-white shadow-sm"
                      : "text-slate-600 hover:text-[#0B1228] hover:bg-white/60"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grelha Dinâmica */}
        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`Ampliar imagem: ${item.title}`}
              className="group text-left rounded-2xl bg-[#F8FAFF] border border-slate-200 overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/10 cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <ResilientImage
                  src={item.imageSrc}
                  alt={item.alt}
                  title={item.title}
                  className="transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B1E]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
                  <span className="text-xs font-semibold text-white">
                    Ampliar pré-visualização
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-1.5">
                <p className="text-xs font-semibold text-[#2563EB]">
                  {item.category} · Exemplo ilustrativo
                </p>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#0B1228]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </button>
          ))}
          </div>
        </Reveal>

        <p className="text-xs text-slate-500 border-t border-slate-200 pt-4">
          Nota: As imagens acima são representações visuais ilustrativas de
          formatos gráficos e composições criativas; os ficheiros finais são
          acedidos através do link presente no PDF entregue após a compra na
          Tutora.
        </p>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B1E]/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada: ${currentItem.title}`}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-[#0B1228] border border-white/15 shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[#FACC15]">
                  {currentItem.category} · Exemplo ilustrativo
                </p>
                <h3 className="font-display font-bold text-base sm:text-lg truncate">
                  {currentItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Fechar pré-visualização"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="relative h-[min(65vh,540px)] w-full bg-[#060B1E]">
              <ResilientImage
                src={currentItem.imageSrc}
                alt={currentItem.alt}
                title={currentItem.title}
                fit="contain"
                eager
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null
                          ? 0
                          : (prev - 1 + filteredItems.length) %
                            filteredItems.length
                      )
                    }
                    aria-label="Imagem anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#060B1E]/80 hover:bg-[#060B1E] border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev === null ? 0 : (prev + 1) % filteredItems.length
                      )
                    }
                    aria-label="Próxima imagem"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-xl bg-[#060B1E]/80 hover:bg-[#060B1E] border border-white/15 flex items-center justify-center text-white transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            <div className="px-5 py-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
              <span>{currentItem.caption}</span>
              <span className="font-mono text-slate-400 tabular-nums shrink-0">
                {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
