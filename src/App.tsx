import { motion, MotionConfig } from "motion/react";
import { AudienceSection } from "./components/AudienceSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { BonusesSection } from "./components/BonusesSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LifetimeAccessSection } from "./components/LifetimeAccessSection";
import { MobilePurchaseBar } from "./components/MobilePurchaseBar";
import { OrganizationSection } from "./components/OrganizationSection";
import { PricingSection } from "./components/PricingSection";
import { PurchaseStepsSection } from "./components/PurchaseStepsSection";
import { ResourcesSection } from "./components/ResourcesSection";

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const REVEAL_SECTIONS = [
  { key: "benefits", Component: BenefitsSection },
  { key: "resources", Component: ResourcesSection },
  { key: "bonuses", Component: BonusesSection },
  { key: "organization", Component: OrganizationSection },
  { key: "lifetime-access", Component: LifetimeAccessSection },
  { key: "audience", Component: AudienceSection },
  { key: "gallery", Component: GallerySection },
  { key: "pricing", Component: PricingSection },
  { key: "purchase-steps", Component: PurchaseStepsSection },
  { key: "faq", Component: FAQSection },
  { key: "final-cta", Component: FinalCTASection },
];

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8FAFF] text-[#0B1228]">
        <Header />

        <main className="flex-1">
          <HeroSection />

          {REVEAL_SECTIONS.map(({ key, Component }) => (
            <motion.div
              key={key}
              variants={sectionRevealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Component />
            </motion.div>
          ))}
        </main>

        <Footer />
        <MobilePurchaseBar />
      </div>
    </MotionConfig>
  );
}
