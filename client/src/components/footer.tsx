import { motion } from "framer-motion";
import { Rocket, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-coral to-sky rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Rocket className="text-white" size={20} />
            </motion.div>
            <span className="font-cartoon text-xl">CartoonLand</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/70 mb-2">© 2024 CartoonLand. All rights reserved.</p>
            <p className="text-white/50 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart className="text-red-400 mx-1" size={16} fill="currentColor" /> and lots of creativity
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
