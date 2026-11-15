import React, { useState } from "react";
import { ChevronRight, FileArchive, Folder, FolderOpen, Monitor } from "lucide-react";
import { PRODUCT_NAME } from "../config/product";
import { FOLDER_STRUCTURE } from "../data/landingContent";
import { Reveal } from "./Reveal";

export const OrganizationSection: React.FC = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<string>(
    FOLDER_STRUCTURE[0].id
  );

  const selectedFolder =
    FOLDER_STRUCTURE.find((f) => f.id === selectedFolderId) ??
    FOLDER_STRUCTURE[0];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFF] text-[#0B1228]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Texto Explicativo */}
          <Reveal className="lg:col-span-5 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Estrutura Centralizada
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight text-[#0B1228]">
              UM ÚNICO FICHEIRO. MILHARES DE RECURSOS!
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Esquece a necessidade de descarregar cada categoria separadamente.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Recebes um único ficheiro que contém várias pastas organizadas por
              categorias, facilitando a localização e utilização dos materiais.
            </p>
            <div className="rounded-xl bg-white border border-slate-200 p-4 flex items-start gap-3">
              <FileArchive
                className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Representação ilustrativa:</strong> selecciona uma pasta
                ao lado para visualizar como as categorias são organizadas para
                consulta rápida no computador.
              </p>
            </div>
          </Reveal>

          {/* Demonstração Visual do Ambiente de Computador */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0B1228] border border-slate-800 shadow-2xl overflow-hidden text-white">
              {/* Barra da Janela */}
              <div className="px-4 sm:px-5 py-3.5 bg-[#060B1E] border-b border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Monitor
                    className="w-4 h-4 text-[#3B82F6] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    Explorador · {PRODUCT_NAME}
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 whitespace-nowrap shrink-0">
                  Ilustração da estrutura
                </span>
              </div>

              {/* Conteúdo do Explorador */}
              <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[340px]">
                {/* Lista de Subpastas */}
                <div className="sm:col-span-5 border-b sm:border-b-0 sm:border-r border-white/10 p-3 sm:p-4 bg-[#080F29]">
                  <div className="flex items-center gap-2 px-2.5 py-2 mb-2 rounded-lg bg-white/5 text-xs font-bold tracking-wide text-[#FACC15]">
                    <FolderOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{PRODUCT_NAME}</span>
                  </div>

                  <div className="space-y-1">
                    {FOLDER_STRUCTURE.map((folder) => {
                      const isActive = folder.id === selectedFolder.id;
                      return (
                        <button
                          key={folder.id}
                          type="button"
                          aria-pressed={isActive}
                          onClick={() => setSelectedFolderId(folder.id)}
                          className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-left text-sm transition-colors cursor-pointer ${
                            isActive
                              ? "bg-[#2563EB] text-white font-semibold"
                              : "text-slate-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <Folder
                              className="w-4 h-4 shrink-0"
                              style={{
                                color: isActive ? "#FACC15" : folder.accentColor,
                              }}
                              aria-hidden="true"
                            />
                            <span className="truncate">{folder.name}</span>
                          </span>
                          <ChevronRight
                            className={`w-4 h-4 shrink-0 transition-transform ${
                              isActive ? "translate-x-0.5 text-white" : "text-slate-500"
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Painel de Detalhe da Pasta Seleccionada */}
                <div className="sm:col-span-7 p-5 sm:p-6 flex flex-col justify-between bg-[#0B1228]">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10"
                        style={{ backgroundColor: `${selectedFolder.accentColor}22` }}
                      >
                        <FolderOpen
                          className="w-5 h-5"
                          style={{ color: selectedFolder.accentColor }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-slate-400">
                          /{PRODUCT_NAME}/{selectedFolder.name}
                        </p>
                        <h3 className="font-display font-bold text-xl text-white">
                          {selectedFolder.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {selectedFolder.summary}
                    </p>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Subpastas representativas
                      </p>
                      <div className="grid grid-cols-1 gap-2">
                        {selectedFolder.subItems.map((sub) => (
                          <div
                            key={sub}
                            className="flex items-center gap-2.5 rounded-lg bg-white/[0.04] border border-white/10 px-3.5 py-2.5 text-sm text-slate-200"
                          >
                            <Folder
                              className="w-4 h-4 text-[#FACC15] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
                    Representação ilustrativa da organização dos materiais por
                    pastas dentro de um único ficheiro.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
