"use client";

import { motion } from 'framer-motion';

export default function StatsSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl space-y-6"
        >
          <h2 className="text-4xl font-bold lg:text-5xl text-foreground">
            360° Digital Solutions for <span className="text-primary">Real Business Growth</span>
          </h2>
          <p className="text-muted-foreground">
            Our ecosystem combines strategy, creativity, and technology to deliver <span className="font-medium text-foreground">measurable results</span> — from brand awareness to revenue generation.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-12">
              We help micro and local businesses establish their digital presence, generate leads, and convert customers through data-driven marketing strategies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-primary text-5xl font-bold">160+</div>
                <p className="text-muted-foreground">Successful Projects Delivered</p>
              </div>
              <div className="space-y-4">
                <div className="text-primary text-5xl font-bold">400%</div>
                <p className="text-muted-foreground">Average ROI for Clients</p>
              </div>
              <div className="space-y-4">
                <div className="text-foreground text-5xl font-bold">₹50L+</div>
                <p className="text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="space-y-4">
                <div className="text-foreground text-5xl font-bold">90%</div>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <blockquote className="border-l-4 border-border pl-6">
              <p className="text-foreground text-lg italic leading-relaxed">
                "Deccan Hive transformed our online presence completely. Their strategic approach to digital marketing helped us achieve 5x growth in just 6 months. Highly recommend for any business looking to scale."
              </p>

              <div className="mt-6 space-y-1">
                <cite className="block font-semibold text-foreground not-italic">Rahul Kumar</cite>
                <span className="text-muted-foreground text-sm">Founder, Kumar Electronics</span>
              </div>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
