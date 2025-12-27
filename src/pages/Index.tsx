import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FeaturesSection } from '@/components/ui/features-section';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Magnetic } from '@/components/ui/magnetic';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema } from '@/components/JsonLd';

const Index = () => {
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const portfolioItems = [
    { 
      title: 'E-commerce Growth Campaign', 
      client: 'Kumar Electronics',
      result: '450% ROI achieved',
    },
    { 
      title: 'B2B Lead Generation', 
      client: 'TechSolutions Pvt Ltd',
      result: '200+ qualified leads/month',
    },
  ];

  return (
    <main className="w-full relative">
      <SEOHead 
        title="Deccan Hive - Full-Service Digital Marketing Agency | Hyderabad"
        description="Transform your business with 360° digital solutions. Deccan Hive helps micro and local businesses grow online with proven digital marketing strategies."
        canonicalPath="/"
      />
      <OrganizationSchema />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
        <motion.div 
          className="container mx-auto max-w-5xl text-center"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* FIX: Removed <br /> tags and added text-balance + max-w constraint */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-foreground text-balance max-w-4xl mx-auto">
              WE OFFER <span className="text-primary">360°</span> DIGITAL SOLUTIONS THAT DELIVER
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 text-pretty">
              Helping micro and local businesses grow online with proven digital marketing strategies that generate real results.
            </p>

            <Magnetic strength={0.3}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 sm:px-8 h-12 sm:h-14 text-base font-semibold"
                asChild
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Our Works Section */}
      <motion.section 
        className="py-20 lg:py-32 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="label-tag mb-4">Our Works</span>
              {/* FIX: Removed <br /> tags and added text-balance */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance max-w-3xl">
                OUR WORK SPEAKS LOUDER THAN WORDS
              </h2>
            </motion.div>
            <Magnetic strength={0.3}>
              <Button variant="outline" className="rounded-full px-6" asChild>
                <Link to="/portfolio">
                  View All
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group premium-card p-8"
              >
                <p className="text-muted-foreground text-sm font-medium mb-2">{item.client}</p>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-balance">{item.title}</h3>
                <p className="text-primary font-semibold">{item.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="premium-card p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <span className="label-tag mb-4 sm:mb-6">Let's Work Together</span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-foreground text-balance">
              LET'S WORK TOGETHER
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 text-pretty">
              Ready to transform your business? Let's discuss how our 360° digital solutions can help you achieve your goals.
            </p>
            
            <div className="flex justify-center">
              <Magnetic strength={0.3}>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 sm:px-10 h-12 sm:h-14 text-base font-semibold"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
