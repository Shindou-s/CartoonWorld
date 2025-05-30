import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";

const portfolioItems = [
  {
    id: 1,
    title: "Fantasy World",
    description: "Magical adventure animation",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Colorful cartoon landscape with whimsical elements"
  },
  {
    id: 2,
    title: "Hero Squad",
    description: "Superhero cartoon series",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Animated cartoon characters in action poses"
  },
  {
    id: 3,
    title: "Animal Friends",
    description: "Educational kids show",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Cute cartoon animal characters in colorful setting"
  },
  {
    id: 4,
    title: "Game Graphics",
    description: "Mobile game artwork",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    alt: "Colorful cartoon graphics and design elements"
  }
];

export default function PortfolioShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-cartoon text-4xl lg:text-5xl text-charcoal mb-6">Our Amazing Creations</h2>
          <p className="text-xl text-charcoal/70">Check out some of our favorite projects!</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl hover-bounce"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="p-6 text-white">
                  <h4 className="font-cartoon text-lg mb-2">{item.title}</h4>
                  <p className="text-sm">{item.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
