"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Target, MessageSquare, Video, Monitor, ShoppingCart, PaintBucket, CheckCircle2, Zap, TrendingUp, Share2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import { Card, CardContent } from '@/components/ui/card';
import { Magnetic } from '@/components/ui/magnetic';
import { ServiceSchema, BreadcrumbSchema } from '@/components/JsonLd';

export default function Services() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const mainServices = [
    { icon: Share2, title: 'SOCIAL MEDIA MANAGEMENT', description: 'Build a loyal community and boost brand awareness with strategic organic content, engagement, and consistent posting.', features: ['Content Calendar Strategy', 'Community Management', 'Reels & Short-form Video', 'Growth Analytics'], stat: '3x', statLabel: 'Engagement Growth' },
    { icon: Target, title: 'PAID ADVERTISING', description: 'Strategic Meta, Google & LinkedIn advertising campaigns that drive targeted traffic and maximize ROI for your business.', features: ['Meta Ads (Facebook & Instagram)', 'Google Ads (Search & Display)', 'LinkedIn B2B Campaigns', 'Retargeting Strategies'], stat: '400%', statLabel: 'Average ROI' },
    { icon: MessageSquare, title: 'EMAIL & MESSAGING', description: 'Automated email campaigns and WhatsApp marketing that nurture leads and boost conversions effectively.', features: ['Email Marketing Automation', 'WhatsApp Business Integration', 'WhatsApp Store Setup', 'Lead Nurturing Sequences'], stat: '35%', statLabel: 'Open Rate' },
    { icon: Video, title: 'CONTENT & MEDIA', description: 'Professional video production and podcast editing that tells your brand story and captivates your audience.', features: ['Video Marketing', 'Podcast Editing', 'Ad Creatives Production', 'Content Strategy'], stat: '500K+', statLabel: 'Monthly Reach' },
    { icon: Monitor, title: 'WEB DEVELOPMENT', description: 'Custom website design with intuitive UI/UX, responsive layouts, and SEO optimization for maximum visibility.', features: ['Custom Website Design', 'UI/UX Development', 'SEO Optimization', 'Performance Analytics'], stat: '100%', statLabel: 'Responsive' },
    { icon: ShoppingCart, title: 'E-COMMERCE', description: 'Complete e-commerce solutions with product pages, shopping cart, and seamless checkout experiences.', features: ['Product Page Design', 'Shopping Cart Integration', 'Payment Gateway Setup', 'Inventory Management'], stat: '₹50L+', statLabel: 'Revenue Generated' },
    { icon: PaintBucket, title: 'GRAPHIC DESIGN', description: 'Unique logos, brand identity kits, marketing collaterals, and social media creatives that stand out.', features: ['Logo & Brand Identity', 'Marketing Collaterals', 'Social Media Creatives', 'Print Design'], stat: '200+', statLabel: 'Brands Created' },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'We analyze your business goals and current digital presence' },
    { step: '02', title: 'Strategy', description: 'Create a customized roadmap for your growth' },
    { step: '03', title: 'Execution', description: 'Implement campaigns with precision and creativity' },
    { step: '04', title: 'Optimize', description: 'Continuous improvement based on data insights' },
  ];

  return (
    <>
      <ServiceSchema serviceName="Digital Marketing Services" serviceDescription="Comprehensive 360° digital marketing solutions including paid advertising, SEO, web development, and content marketing." />
      <BreadcrumbSchema items={[{ name: 'Home', url: 'https://deccanhive.com' }, { name: 'Services', url: 'https://deccanhive.com/services' }]} />

      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-24 overflow-hidden">
        <motion.div className="container mx-auto text-center max-w-5xl" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
            <h1 className="sr-only">Comprehensive Digital Marketing Services</h1>
            <span className="label-tag mb-6">360° Digital Solutions</span>
            <GradualSpacing text="OUR SERVICES" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground" duration={0.3} delayMultiple={0.03} />
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              From paid advertising to AI automation, we provide comprehensive digital marketing solutions tailored for micro and local businesses.
            </p>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Magnetic strength={0.3}>
                <Button className="bg-primary text-primary-foreground rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base font-semibold" asChild>
                  <Link href="/contact">
                    Get Started
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
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              {mainServices.slice(0, 2).map((service, idx) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}>
                  <Card className="premium-card h-full group hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{service.stat}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">{service.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mainServices.slice(2, 5).map((service, idx) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}>
                  <Card className="premium-card h-full group hover:border-primary/40 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-primary">{service.stat}</div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{service.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                      <ul className="space-y-1.5">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {mainServices.slice(5, 7).map((service, idx) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }} viewport={{ once: true, margin: "-50px" }}>
                  <Card className="premium-card h-full group hover:border-primary/40 transition-all duration-300">
                     <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">{service.stat}</div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide">{service.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} viewport={{ once: true }}>
              <Card className="premium-card h-full">
                <CardContent className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">Why Choose Us?</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      We don't just deliver services; we deliver measurable growth. Our local business expertise ensures your budget is spent where it matters most.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6">
                      <div>
                         <TrendingUp className="w-5 h-5 text-primary mb-2" />
                         <h4 className="font-bold">Data-Driven</h4>
                         <p className="text-xs text-muted-foreground">Analytics backed decisions</p>
                      </div>
                      <div>
                         <Target className="w-5 h-5 text-primary mb-2" />
                         <h4 className="font-bold">Local Focus</h4>
                         <p className="text-xs text-muted-foreground">Micro-business specialists</p>
                      </div>
                      <div>
                         <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                         <h4 className="font-bold">Proven Results</h4>
                         <p className="text-xs text-muted-foreground">160+ Successful projects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="label-tag mb-4">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              HOW WE <span className="text-gradient-gold">WORK</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }} viewport={{ once: true }} className="premium-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-3">{step.step}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }} className="premium-card p-6 sm:p-8 md:p-12 text-center rounded-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Ready to Grow Your Business?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how our 360° digital solutions can help you achieve your goals.
            </p>
            <Magnetic strength={0.3}>
              <Button size="lg" className="bg-primary text-primary-foreground rounded-2xl px-6 sm:px-8 h-11 sm:h-12 md:h-14 text-sm sm:text-base font-semibold" asChild>
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </section>
    </>
  );
}