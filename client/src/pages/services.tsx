import { motion } from "framer-motion";
import { Palette, Video, Gamepad2, Book, Gift, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer, scaleIn, wiggleAnimation } from "@/lib/animations";

const mainServices = [
  {
    icon: Palette,
    title: "Character Design",
    description: "Create unique, memorable characters that capture hearts and tell amazing stories.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    alt: "Cartoon character design showcase with colorful personalities",
    color: "coral"
  },
  {
    icon: Video,
    title: "Animation",
    description: "Full animation production services from concept to final delivery with stunning results.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    alt: "Animation production scene with vibrant cartoon elements",
    color: "mint"
  }
];

const additionalServices = [
  {
    icon: Gamepad2,
    title: "Game Assets",
    description: "Fun game characters and environments",
    color: "sky"
  },
  {
    icon: Book,
    title: "Storyboards",
    description: "Visual storytelling and planning",
    color: "lavender"
  },
  {
    icon: Gift,
    title: "Merchandise",
    description: "Custom character merchandise",
    color: "sage"
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <section className="py-20 bg-gradient-to-br from-sunny/20 via-lavender/10 to-mint/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
          >
            <h1 className="font-cartoon text-4xl lg:text-5xl text-charcoal mb-6">Our Amazing Services</h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              From character design to full animation productions, we bring your creative visions to life!
            </p>
          </motion.div>

          {/* Main Services */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mainServices.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
              >
                <Card className="bg-white cartoon-shadow hover-bounce overflow-hidden border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-${service.color} rounded-full flex items-center justify-center mr-4`}
                        {...wiggleAnimation}
                      >
                        <service.icon className="text-white text-2xl" size={32} />
                      </motion.div>
                      <h3 className="font-cartoon text-3xl text-charcoal">{service.title}</h3>
                    </div>
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="rounded-2xl w-full h-48 object-cover mb-6"
                    />
                    <p className="text-charcoal/70 mb-6">{service.description}</p>
                    <Button
                      className={`bg-${service.color} hover:bg-${service.color}/90 text-white px-6 py-3 rounded-full font-semibold`}
                    >
                      Learn More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Services */}
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {additionalServices.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
              >
                <Card className="bg-white/80 hover-bounce border-0 text-center">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 bg-${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <service.icon className="text-white" size={24} />
                    </motion.div>
                    <h4 className="font-cartoon text-xl text-charcoal mb-2">{service.title}</h4>
                    <p className="text-charcoal/60 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-2xl mx-auto gradient-bg border-0">
              <CardContent className="p-8 text-white text-center">
                <h3 className="font-cartoon text-2xl mb-4">Ready to Start Your Project?</h3>
                <p className="mb-6 text-white/90">
                  Let's discuss your ideas and bring them to life with our creative expertise!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-charcoal hover:bg-white/90 px-8 py-3 rounded-full font-semibold"
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
