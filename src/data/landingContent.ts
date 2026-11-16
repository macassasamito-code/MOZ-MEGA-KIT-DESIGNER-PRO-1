import heroMockupImg from "../assets/images/hero_megakit_mockup_1794776212355.jpg";
import bonusBoxImg from "../assets/images/bonus_gift_box_clean_1794776227160.jpg";
import gallerySocialPostsImg from "../assets/images/gallery_social_posts_1794776212416.jpg";
import galleryPngEmojisImg from "../assets/images/gallery_png_emojis_1794776212174.jpg";
import galleryStoriesPackImg from "../assets/images/gallery_stories_pack_1794776213775.jpg";
import galleryCreativeCompImg from "../assets/images/gallery_creative_compositions_1794776228265.jpg";
import { CHECKOUT_URL } from "../config/product";

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  number: string;
  title: string;
  description: string;
  iconName: "sparkles" | "zap" | "layers" | "folder" | "hardDrive";
  featured?: boolean;
}

export interface ResourceItem {
  id: string;
  quantity: string;
  title: string;
  description: string;
  category: "A" | "B";
  iconName:
    | "layout"
    | "image"
    | "images"
    | "smile"
    | "table"
    | "smartphone"
    | "music";
}

export interface FolderPreviewItem {
  id: string;
  name: string;
  summary: string;
  subItems: string[];
  accentColor: string;
}

export interface LifetimeStage {
  stage: string;
  title: string;
  description: string;
}

export interface AudienceProfile {
  title: string;
  description: string;
  iconName:
    | "penTool"
    | "laptop"
    | "video"
    | "share2"
    | "megaphone"
    | "briefcase"
    | "trendingUp";
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Artes para redes sociais"
    | "Posts promocionais"
    | "Elementos PNG"
    | "Emojis 3D"
    | "Templates de Stories"
    | "Composições criativas";
  caption: string;
  imageSrc: string;
  alt: string;
}

export interface PurchaseStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Início", href: CHECKOUT_URL },
  { label: "O que está incluído", href: CHECKOUT_URL },
  { label: "Bónus", href: CHECKOUT_URL },
  { label: "Benefícios", href: CHECKOUT_URL },
  { label: "Como funciona", href: CHECKOUT_URL },
  { label: "Perguntas frequentes", href: CHECKOUT_URL },
];

export const HERO_INDICATORS: string[] = [
  "Produto 100% digital",
  "Compra através da lojou.app",
  "Entrega em PDF",
  "Acesso aos materiais através de link",
];

export const HERO_MOCKUP_IMAGE = heroMockupImg;

export const BONUS_BOX_IMAGE = bonusBoxImg;

export const BENEFITS_LIST: BenefitItem[] = [
  {
    number: "01",
    title: "MAIS CRIATIVIDADE",
    description:
      "Explora milhares de recursos para desenvolver novas ideias e projectos gráficos.",
    iconName: "sparkles",
    featured: true,
  },
  {
    number: "02",
    title: "MAIS PRODUTIVIDADE",
    description:
      "Reduz o tempo de procura de materiais e concentra-te na criação.",
    iconName: "zap",
    featured: true,
  },
  {
    number: "03",
    title: "MAIS POSSIBILIDADES",
    description:
      "Diversifica os teus trabalhos com diferentes estilos, imagens e elementos gráficos.",
    iconName: "layers",
  },
  {
    number: "04",
    title: "ORGANIZAÇÃO",
    description:
      "Encontra diferentes categorias de materiais num único pacote organizado.",
    iconName: "folder",
  },
  {
    number: "05",
    title: "ACESSO PERMANENTE",
    description:
      "Guarda os ficheiros descarregados e consulta-os sempre que precisares.",
    iconName: "hardDrive",
  },
];

export const RESOURCES_CATEGORY_A: ResourceItem[] = [
  {
    id: "artes-canva",
    quantity: "+12.000",
    title: "POSTS E ARTES EDITÁVEIS PARA CANVA",
    description:
      "Uma grande biblioteca de artes e publicações editáveis para desenvolver conteúdos gráficos.",
    category: "A",
    iconName: "layout",
  },
  {
    id: "png-34k",
    quantity: "+34.000",
    title: "IMAGENS PNG EM ALTA RESOLUÇÃO",
    description:
      "Recursos visuais para enriquecer os teus projectos e composições.",
    category: "A",
    iconName: "image",
  },
  {
    id: "png-270k",
    quantity: "+270.000",
    title: "IMAGENS PNG EM ALTA RESOLUÇÃO",
    description:
      "Mais uma extensa colecção de imagens para ampliar as tuas possibilidades criativas.",
    category: "A",
    iconName: "images",
  },
  {
    id: "emojis-3d",
    quantity: "MEGA PACK",
    title: "EMOJIS 3D",
    description:
      "Elementos gráficos tridimensionais para dar mais personalidade aos teus conteúdos.",
    category: "A",
    iconName: "smile",
  },
];

export const RESOURCES_CATEGORY_B: ResourceItem[] = [
  {
    id: "planilhas",
    quantity: "14",
    title: "PLANILHAS DE GERENCIAMENTO",
    description:
      "Materiais para apoiar a organização e gestão das actividades.",
    category: "B",
    iconName: "table",
  },
  {
    id: "stories",
    quantity: "PACK COMPLETO",
    title: "PACK DE STORIES",
    description:
      "Recursos criativos para desenvolver conteúdos em formato Stories.",
    category: "B",
    iconName: "smartphone",
  },
  {
    id: "trilhas-sonoras",
    quantity: "1.800",
    title: "TRILHAS SONORAS",
    description:
      "Uma colecção de trilhas sonoras para diferentes projectos criativos.",
    category: "B",
    iconName: "music",
  },
];

export const BONUS_SLOTS: number[] = Array.from({ length: 14 }, (_, i) => i + 1);

export const FOLDER_STRUCTURE: FolderPreviewItem[] = [
  {
    id: "artes-editaveis",
    name: "Artes Editáveis",
    summary: "+12.000 posts e artes editáveis para Canva organizados por tema.",
    subItems: [
      "Posts para Redes Sociais",
      "Artes Promocionais",
      "Composições Editáveis",
    ],
    accentColor: "#2563EB",
  },
  {
    id: "imagens-png",
    name: "Imagens PNG",
    summary: "Colecções com +34.000 e +270.000 imagens PNG em alta resolução.",
    subItems: [
      "Colecção +34.000 PNG",
      "Colecção +270.000 PNG",
      "Elementos Recortados",
    ],
    accentColor: "#7C3AED",
  },
  {
    id: "emojis-3d",
    name: "Emojis 3D",
    summary: "Mega Pack de Emojis 3D prontos para composições e criativos.",
    subItems: [
      "Expressões e Reacções 3D",
      "Ícones Tridimensionais",
      "Elementos de Destaque",
    ],
    accentColor: "#F59E0B",
  },
  {
    id: "planilhas",
    name: "Planilhas",
    summary: "14 planilhas de gerenciamento para apoiar a organização diária.",
    subItems: [
      "Gestão de Projectos",
      "Organização de Conteúdos",
      "Controlo de Actividades",
    ],
    accentColor: "#16A34A",
  },
  {
    id: "stories",
    name: "Stories",
    summary: "Pack de Stories pensado para formatos verticais dinâmicos.",
    subItems: [
      "Templates Verticais",
      "Sequências Promocionais",
      "Destaques Visuais",
    ],
    accentColor: "#3B82F6",
  },
  {
    id: "trilhas-sonoras",
    name: "Trilhas Sonoras",
    summary: "1.800 trilhas sonoras para vídeos, anúncios e apresentações.",
    subItems: [
      "Fundo Musical para Vídeos",
      "Ritmos para Redes Sociais",
      "Áudios para Conteúdos",
    ],
    accentColor: "#8B5CF6",
  },
  {
    id: "super-bonus",
    name: "Super Bónus",
    summary: "14 super bónus incluídos no mesmo pacote digital.",
    subItems: [
      "Bónus Adicionais (01 a 07)",
      "Bónus Adicionais (08 a 14)",
      "Acesso Organizado",
    ],
    accentColor: "#EAB308",
  },
];

export const LIFETIME_STAGES: LifetimeStage[] = [
  {
    stage: "ETAPA 1",
    title: "Adquire o MOZ MEGA KIT DESIGNER PRO.",
    description:
      "Escolhe o pacote completo e avança para o checkout oficial da lojou.app.",
  },
  {
    stage: "ETAPA 2",
    title: "Recebe o PDF disponibilizado após a compra.",
    description:
      "Assim que o pagamento é confirmado na plataforma, o PDF fica disponível.",
  },
  {
    stage: "ETAPA 3",
    title: "Abre o link de acesso que encontrarás dentro do PDF.",
    description:
      "No interior do documento tens o endereço directo para os componentes do Mega Kit.",
  },
  {
    stage: "ETAPA 4",
    title: "Descarrega e guarda os materiais no teu dispositivo.",
    description:
      "Armazena as pastas no teu computador ou telemóvel para consultar sempre que precisares.",
  },
];

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    title: "Designers gráficos",
    description:
      "Acelera a criação de peças visuais com bases editáveis e PNGs prontos.",
    iconName: "penTool",
  },
  {
    title: "Freelancers",
    description:
      "Entrega projectos variados para clientes com muito mais rapidez e variedade.",
    iconName: "laptop",
  },
  {
    title: "Criadores de conteúdo",
    description:
      "Combina artes, Stories, emojis 3D e trilhas sonoras nas tuas publicações.",
    iconName: "video",
  },
  {
    title: "Gestores de redes sociais",
    description:
      "Mantém calendários visuais consistentes com milhares de formatos prontos.",
    iconName: "share2",
  },
  {
    title: "Agências de publicidade",
    description:
      "Centraliza recursos criativos para campanhas, anúncios e produções em equipa.",
    iconName: "megaphone",
  },
  {
    title: "Empreendedores",
    description:
      "Cria materiais profissionais para divulgar produtos e serviços do teu negócio.",
    iconName: "briefcase",
  },
  {
    title: "Profissionais de marketing digital",
    description:
      "Produz criativos, banners e apresentações com agilidade e impacto visual.",
    iconName: "trendingUp",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Artes para redes sociais e campanhas",
    category: "Artes para redes sociais",
    caption:
      "Exemplo ilustrativo de composições editáveis para feeds, carrosséis e publicações comerciais.",
    imageSrc: gallerySocialPostsImg,
    alt: "Exemplo ilustrativo de artes editáveis para redes sociais e posts promocionais",
  },
  {
    id: "gal-2",
    title: "Templates verticais para Stories",
    category: "Templates de Stories",
    caption:
      "Exemplo ilustrativo de layouts verticais para promoções, lançamentos e comunicação rápida.",
    imageSrc: galleryStoriesPackImg,
    alt: "Exemplo ilustrativo de templates verticais para Stories em smartphones",
  },
  {
    id: "gal-3",
    title: "Emojis 3D e elementos PNG",
    category: "Emojis 3D",
    caption:
      "Exemplo ilustrativo de ícones tridimensionais e elementos gráficos para destacar ofertas e conteúdos.",
    imageSrc: galleryPngEmojisImg,
    alt: "Exemplo ilustrativo de emojis 3D e elementos gráficos isolados",
  },
  {
    id: "gal-4",
    title: "Composições criativas e recursos gráficos",
    category: "Composições criativas",
    caption:
      "Exemplo ilustrativo da versatilidade de combinações visuais para projectos digitais.",
    imageSrc: galleryCreativeCompImg,
    alt: "Exemplo ilustrativo de composições criativas e fluxo de trabalho gráfico",
  },
  {
    id: "gal-5",
    title: "Posts promocionais para negócios",
    category: "Posts promocionais",
    caption:
      "Exemplo ilustrativo de peças publicitárias adaptáveis a comércio, tecnologia e restauração.",
    imageSrc: heroMockupImg,
    alt: "Exemplo ilustrativo de posts promocionais exibidos em computador e telemóvel",
  },
  {
    id: "gal-6",
    title: "Biblioteca visual de elementos PNG",
    category: "Elementos PNG",
    caption:
      "Exemplo ilustrativo de recursos gráficos preparados para composição rápida em qualquer software.",
    imageSrc: galleryPngEmojisImg,
    alt: "Exemplo ilustrativo de biblioteca visual de elementos gráficos e PNG",
  },
];

export const PRICING_CHECKLIST: string[] = [
  "+12.000 Artes Editáveis para Canva.",
  "+34.000 Imagens PNG.",
  "+270.000 Imagens PNG.",
  "Mega Pack de Emojis 3D.",
  "14 Planilhas de Gerenciamento.",
  "Pack de Stories.",
  "1.800 Trilhas Sonoras.",
  "14 SUPER BÓNUS.",
];

export const PURCHASE_STEPS: PurchaseStep[] = [
  {
    number: "01",
    title: "ESCOLHE O TEU KIT",
    description:
      "Conhece os materiais e decide adquirir o MOZ MEGA KIT DESIGNER PRO.",
  },
  {
    number: "02",
    title: "COMPRA NA LOJOU.APP",
    description:
      "Clica no botão de compra e finaliza a aquisição através do checkout oficial da lojou.app.",
  },
  {
    number: "03",
    title: "RECEBE O PDF",
    description:
      "Após a confirmação da compra, recebe o PDF disponibilizado através da plataforma.",
  },
  {
    number: "04",
    title: "ACESSA OS MATERIAIS",
    description:
      "Abre o PDF, utiliza o link disponibilizado e acede aos componentes do Mega Kit.",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "O que é o MOZ MEGA KIT DESIGNER PRO?",
    answer:
      "É uma biblioteca digital com milhares de recursos gráficos, materiais criativos e ferramentas para designers, criadores de conteúdo e profissionais de marketing digital.",
  },
  {
    question: "O que está incluído?",
    answer:
      "O pacote inclui artes editáveis para Canva, imagens PNG, emojis 3D, planilhas de gerenciamento, Stories, trilhas sonoras e 14 super bónus.",
  },
  {
    question: "Como posso comprar?",
    answer:
      "A compra é realizada através do checkout oficial da plataforma lojou.app, acessível pelo botão de compra desta página.",
  },
  {
    question: "Como recebo o produto?",
    answer:
      "Após a confirmação da compra, receberás o PDF disponibilizado na plataforma, que contém o link de acesso aos componentes do Mega Kit.",
  },
  {
    question: "Preciso de descarregar cada categoria separadamente?",
    answer:
      "Não. Recebes um único ficheiro com várias pastas organizadas por categorias.",
  },
  {
    question: "Posso guardar os materiais?",
    answer:
      "Sim. Depois de descarregares os ficheiros, podes guardá-los no teu computador ou dispositivo.",
  },
  {
    question: "O produto é físico?",
    answer: "Não. É um produto totalmente digital.",
  },
  {
    question: "Qual é o preço?",
    answer: "O MOZ MEGA KIT DESIGNER PRO está disponível por 997 MT.",
  },
  {
    question: "Onde faço o pagamento?",
    answer:
      "O pagamento é efectuado directamente no checkout oficial da lojou.app.",
  },
];
