import React, { useEffect } from "react";
import { X } from "lucide-react";
import { PLATFORM_NAME, PRODUCT_NAME, FORMATTED_PRICE } from "../config/product";

export type LegalModalType = "terms" | "privacy" | null;

interface LegalModalProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeModal,
  onClose,
}) => {
  useEffect(() => {
    if (!activeModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const isTerms = activeModal === "terms";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#060B1E]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-white text-[#0B1228] border border-slate-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h3
            id="legal-modal-title"
            className="font-display font-bold text-lg text-[#0B1228]"
          >
            {isTerms ? "Termos e Condições" : "Política de Privacidade"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4 text-sm leading-relaxed text-slate-700 max-h-[70vh] overflow-y-auto">
          {isTerms ? (
            <>
              <p>
                <strong>1. Natureza do Produto:</strong> O {PRODUCT_NAME} é um
                produto 100% digital comercializado por {FORMATTED_PRICE} através
                da plataforma oficial {PLATFORM_NAME}. Não existe envio de
                material físico.
              </p>
              <p>
                <strong>2. Formato de Entrega:</strong> Após a confirmação do
                pagamento no checkout oficial da lojou.app, o comprador recebe um
                ficheiro PDF contendo o link de acesso aos componentes do Mega
                Kit.
              </p>
              <p>
                <strong>3. Acesso e Armazenamento:</strong> Os materiais
                descarregados podem ser guardados no computador ou dispositivo
                pessoal do adquirente para utilização criativa em projectos
                próprios ou de clientes, sendo vedada a revenda não autorizada do
                pacote completo como biblioteca concorrente.
              </p>
              <p>
                <strong>4. Pagamento:</strong> Toda a transacção financeira e
                processamento da entrega do PDF ocorrem directamente no ambiente
                seguro da plataforma lojou.app.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Navegação na Página:</strong> Esta página de
                apresentação do {PRODUCT_NAME} não recolhe dados bancários,
                palavras-passe nem informações pessoais através de formulários
                próprios.
              </p>
              <p>
                <strong>2. Redireccionamento para Checkout:</strong> Ao clicar
                nos botões de compra, o visitante é encaminhado directamente
                para o checkout oficial da {PLATFORM_NAME}, onde o pagamento e a
                entrega do PDF são geridos segundo as políticas da própria
                plataforma.
              </p>
              <p>
                <strong>3. Registo Técnico Local:</strong> Apenas registos
                técnicos temporários de sessão relativos a cliques de saída para
                o checkout podem ser mantidos localmente no navegador para
                funcionamento da interface, sem identificação pessoal.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#0B1228] text-white text-sm font-semibold hover:bg-[#1E293B] transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
