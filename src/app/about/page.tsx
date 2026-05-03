"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Eye, Lightbulb, Handshake, Target, Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { Magnetic } from '@/components/ui/magnetic';
import { BreadcrumbSchema } from '@/components/JsonLd';
import TeamSection from '@/components/TeamSection';

export default function About() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const coreValues = [
    { icon: Lightbulb, title: 'INNOVATION', description: 'We constantly explore new strategies, including AI automation and trend-jacking, to keep you ahead.' },
    { icon: Handshake, title: 'TRANSPARENCY', description: 'Clear communication and honest reporting at every step of your digital journey.' },
    { icon: Target, title: 'RESULTS-DRIVEN', description: 'Every action is focused on delivering measurable outcomes, from leads to brand visibility.' },
    { icon: Heart, title: 'PARTNERSHIP', description: 'We build long-term relationships, treating your success as our own.' },
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://deccanhive.com' }, 
        { name: 'About Us', url: 'https://deccanhive.com/about' }
      ]} />
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24 overflow-hidden">
        <motion.div className="container mx-auto text-center max-w-5xl relative" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
            <h1 className="sr-only">About Deccan Hive - Leading Digital Marketing Agency</h1>
            <span className="label-tag mb-6">About Deccan Hive</span>
            <GradualSpacing text="WE ARE DECCAN HIVE" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground" duration={0.3} delayMultiple={0.02} />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto text-pretty">
              A passionate team of digital marketing experts and PR strategists helping local businesses and "Deccan Marketing" leaders thrive online.
            </p>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Magnetic strength={0.3}>
                <Button className="bg-primary text-primary-foreground rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base font-semibold" asChild>
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }}>
              <span className="label-tag mb-4">Our Mission</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                EMPOWERING <span className="text-gradient-gold">LOCAL BUSINESSES</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 text-pretty">
                At Deccan Hive, we believe every local business deserves access to world-class digital marketing. Our mission is to bridge the gap between traditional businesses and the digital world.
              </p>
              <p className="text-muted-foreground text-pretty">
                We specialize in understanding the unique challenges faced by micro and small businesses, crafting strategies that deliver real ROI without breaking the bank.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: true, margin: "-100px" }} className="premium-card p-8">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-balance">Our Vision</h3>
              <p className="text-muted-foreground text-lg text-pretty">
                To be the leading digital marketing agency that transforms local businesses into digital success stories, creating a thriving ecosystem where small businesses can compete and win.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="label-tag mb-4">What Drives Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              OUR CORE <span className="text-gradient-gold">VALUES</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }} viewport={{ once: true }} className="premium-card p-8 text-center group hover:border-primary/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors text-balance">{value.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      <section className="py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="premium-card p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Ready to Start Your <span className="text-gradient-gold">Success Story</span>?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto text-pretty">
              Join the 500+ businesses that have transformed their digital presence with Deccan Hive.
            </p>
            <div className="flex justify-center">
              <Magnetic strength={0.3}>
                <Button size="lg" className="bg-primary text-primary-foreground rounded-full px-8 h-12 sm:h-14 text-base font-semibold" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}