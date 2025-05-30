import { motion } from "framer-motion";
import HeroSection from "@/components/hero-section";
import PortfolioShowcase from "@/components/portfolio-showcase";
import { fadeInUp } from "@/lib/animations";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      
      {/* Quick intro section */}
      <motion.section
        className="py-16 bg-white/50"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-cartoon text-3xl lg:text-4xl text-charcoal mb-6">
            Where Imagination Comes to Life
          </h2>
          <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
            At CartoonLand, we specialize in creating vibrant, engaging cartoon content that captures hearts and sparks imagination. From character design to full animation productions, we bring your creative visions to life!
          </p>
        </div>
      </motion.section>

      <PortfolioShowcase />
    </motion.div>
  );
}
