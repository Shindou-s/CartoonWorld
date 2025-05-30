import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Twitter, Youtube, Zap, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    content: "123 Creative Street, Animation City",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-TOON",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@cartoonland.com",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Zap, href: "#", label: "TikTok" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-24"
    >
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              {...fadeInUp}
              viewport={{ once: true }}
            >
              <h1 className="font-cartoon text-4xl lg:text-5xl text-white mb-6">Let's Create Magic Together!</h1>
              <p className="text-xl text-white/90">Ready to bring your ideas to life? We'd love to hear from you!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                {...fadeInLeft}
                viewport={{ once: true }}
              >
                <Card className="bg-white cartoon-shadow border-0">
                  <CardContent className="p-8">
                    <h3 className="font-cartoon text-2xl text-charcoal mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-coral"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-coral"
                        />
                      </div>
                      <div>
                        <Textarea
                          name="message"
                          placeholder="Tell us about your project..."
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-coral resize-none"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-coral hover:bg-coral/90 text-white py-3 rounded-xl font-semibold"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="mr-2" size={20} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                {...fadeInRight}
                viewport={{ once: true }}
              >
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.title}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <info.icon className="text-xl" size={24} />
                      </div>
                      <div>
                        <h4 className="font-cartoon text-lg">{info.title}</h4>
                        <p className="text-white/80">{info.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Social Media */}
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-cartoon text-lg text-white mb-4 text-center">Follow Us</h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-coral transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
