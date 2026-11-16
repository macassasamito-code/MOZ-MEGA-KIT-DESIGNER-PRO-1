/**
 * Configuração comercial centralizada do produto.
 * Todos os botões de compra e secções de oferta consomem estas constantes.
 */

export const PRODUCT_NAME = "MOZ MEGA KIT DESIGNER PRO";

export const PRODUCT_SUBTITLE = "+12.000 ARTES EDITÁVEIS + 14 SUPER BÓNUS!";

export const PRODUCT_PRICE = 997;

export const PRODUCT_CURRENCY = "MT";

export const CHECKOUT_URL = "https://pay.lojou.app/zy90H";

export const PLATFORM_NAME = "lojou.app";

export const FORMATTED_PRICE = `${PRODUCT_PRICE} ${PRODUCT_CURRENCY}`;

/**
 * Regista apenas cliques de saída para o link oficial de checkout
 * sem recolher dados pessoais nem simular pagamentos.
 */
export function trackOutboundCheckout(source: string): void {
  try {
    if (typeof window !== "undefined") {
      const key = "moz_megakit_outbound_clicks";
      const currentRaw = window.sessionStorage.getItem(key);
      const current = currentRaw ? JSON.parse(currentRaw) : [];
      current.push({
        source,
        timestamp: new Date().toISOString(),
        destination: CHECKOUT_URL,
      });
      window.sessionStorage.setItem(key, JSON.stringify(current));
    }
  } catch {
    // Ignorar caso o armazenamento da sessão esteja indisponível
  }
}
