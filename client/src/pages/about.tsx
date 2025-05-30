import { motion } from "framer-motion";
import { Users, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const teamValues = [
  {
    icon: Users,
    title: "Creative Team",
    description: "Our talented artists and animators bring characters to life with passion and creativity.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Creative cartoon team working together",
    gradient: "from-coral/10 to-coral/5"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We use cutting-edge technology to create stunning visuals and memorable experiences.",
    image: "https://images.unsplash.com/photo-1541199249251-f713e6145474?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Colorful animation workspace with creative tools",
    gradient: "from-mint/10 to-mint/5"
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a worldwide community of cartoon lovers and creative enthusiasts.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Happy cartoon characters celebrating together",
    gradient: "from-sky/10 to-sky/5"
  }
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
            viewport={{ once: true }}
          >
            <h1 className="font-cartoon text-4xl lg:text-5xl text-charcoal mb-6">About Our Magical World</h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We're a team of creative wizards who believe in the power of imagination and the magic of storytelling through animation.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamValues.map((value) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
              >
                <Card className={`bg-gradient-to-br ${value.gradient} border-0 hover-bounce overflow-hidden`}>
                  <CardContent className="p-8">
                    <img
                      src={value.image}
                      alt={value.alt}
                      className="rounded-2xl w-full h-48 object-cover mb-6"
                    />
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg">
                        <value.icon className="text-charcoal" size={24} />
                      </div>
                      <h3 className="font-cartoon text-2xl text-charcoal">{value.title}</h3>
                    </div>
                    <p className="text-charcoal/70">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-sunny/20 via-lavender/10 to-mint/20 border-0">
              <CardContent className="p-12">
                <h2 className="font-cartoon text-3xl text-charcoal mb-6">Our Mission</h2>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  At CartoonLand, we believe that animation has the power to inspire, educate, and bring joy to people of all ages. 
                  Our mission is to create high-quality, imaginative content that not only entertains but also sparks creativity 
                  and encourages positive values. We strive to build a community where artists, storytellers, and dreamers can 
                  come together to create something truly magical.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
