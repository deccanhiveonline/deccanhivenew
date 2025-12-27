import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, MessageSquare, Video, Monitor, ShoppingCart, PaintBucket } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'PAID ADVERTISING',
    description: 'Strategic Meta, Google & LinkedIn advertising campaigns that drive targeted traffic and maximize ROI.',
    stat: '400%',
    statLabel: 'Avg. ROI'
  },
  {
    icon: MessageSquare,
    title: 'EMAIL & MESSAGING',
    description: 'Automated email campaigns and WhatsApp marketing that nurture leads and boost conversions.',
    stat: '35%',
    statLabel: 'Open Rate'
  },
  {
    icon: Video,
    title: 'CONTENT & MEDIA',
    description: 'Professional video production, podcast editing, and social media management that captivates audiences.',
    stat: '500K+',
    statLabel: 'Monthly Reach'
  },
  {
    icon: Monitor,
    title: 'WEB DEVELOPMENT',
    description: 'Custom website design with intuitive UI/UX, responsive layouts, and SEO optimization.',
    stat: '100%',
    statLabel: 'Responsive'
  },
  {
    icon: ShoppingCart,
    title: 'E-COMMERCE',
    description: 'Complete e-commerce solutions with product pages, shopping cart, and seamless checkout experiences.',
    stat: '₹50L+',
    statLabel: 'Revenue Generated'
  },
  {
    icon: PaintBucket,
    title: 'GRAPHIC DESIGN',
    description: 'Unique logos, brand identity kits, marketing collaterals, and social media creatives.',
    stat: '200+',
    statLabel: 'Brands Created'
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="label-tag mb-4">Services We Provide</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              EXPERT SERVICES<br />
              TO DRIVE SUCCESS
            </h2>
            <p className="text-muted-foreground max-w-md text-lg">
              Comprehensive digital solutions tailored for micro and local businesses ready to scale.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card h-full group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-muted/50 border border-border flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <service.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.stat}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{service.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}