import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInLeft, fadeInRight, floatAnimation, bounceAnimation, wiggleAnimation } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            {...fadeInLeft}
          >
            <h1 className="font-cartoon text-5xl lg:text-7xl text-charcoal mb-6 leading-tight">
              Welcome to{" "}
              <motion.span
                className="text-transparent bg-clip-text gradient-bg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CartoonLand!
              </motion.span>
            </h1>
            <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
              Bringing your wildest dreams to life through colorful characters, amazing animations, and endless creativity!
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-coral hover:bg-coral/90 text-white px-8 py-4 rounded-full font-bold text-lg cartoon-shadow hover-bounce"
              >
                <Play className="mr-2" size={20} />
                Start Adventure
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-mint text-mint px-8 py-4 rounded-full font-bold text-lg hover:bg-mint hover:text-white transition-all duration-300"
              >
                <Info className="mr-2" size={20} />
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            {...fadeInRight}
          >
            {/* Main cartoon character illustration */}
            <motion.div
              className="relative"
              {...floatAnimation}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt="Colorful cartoon character illustration"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-sunny rounded-full"
              {...bounceAnimation}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-16 h-16 bg-lavender rounded-full"
              {...wiggleAnimation}
            />
            <motion.div
              className="absolute top-1/2 -left-20 w-12 h-12 bg-sage rounded-full"
              {...floatAnimation}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
